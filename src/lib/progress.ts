"use client";

import * as React from "react";
import { modules } from "@/lib/data";

const STORAGE_KEY = "kopedu:progress:v2";
const POINTS_PER_QUIZ = 20;
const POINTS_PER_MODULE = 60;
const SYNC_DEBOUNCE_MS = 5000;

export type AvatarId = string;

export type ProgressState = {
  userId: string;
  updatedAt: number;
  points: number;
  completedModules: number[];
  moduleProgress: Record<number, number>;
  quizSolved: Record<number, number[]>;
  streak: number;
  lastActiveDate: string;
  activity: { text: string; ts: number }[];
  profileName: string;
  firstName: string;
  lastName: string;
  username: string;
  bio: string;
  avatarId: AvatarId;
};

function todayKey(d = new Date()): string {
  return d.toISOString().slice(0, 10);
}

function makeUserId(): string {
  try {
    return crypto.randomUUID();
  } catch {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
  }
}

function seed(): ProgressState {
  return {
    userId: "",
    updatedAt: 0,
    points: 0,
    completedModules: [],
    moduleProgress: {},
    quizSolved: {},
    streak: 1,
    lastActiveDate: todayKey(),
    activity: [],
    profileName: "",
    firstName: "",
    lastName: "",
    username: "",
    bio: "",
    avatarId: "sarjana",
  };
}

/* ---------------- store (external, SSR-safe) ---------------- */

let state: ProgressState = seed();
let hydrated = false;
let syncTimer: ReturnType<typeof setTimeout> | null = null;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage may be unavailable; in-memory still works for the session */
  }
}

async function syncToCloud() {
  const { userId } = state;
  if (!userId) return;
  try {
    await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, state }),
    });
  } catch {
    /* sync failure is non-fatal; localStorage is always the primary store */
  }
}

function scheduleSyncToCloud() {
  if (syncTimer) clearTimeout(syncTimer);
  syncTimer = setTimeout(() => void syncToCloud(), SYNC_DEBOUNCE_MS);
}

async function fetchFromCloud(userId: string): Promise<ProgressState | null> {
  try {
    const res = await fetch(`/api/progress?userId=${encodeURIComponent(userId)}`);
    if (!res.ok) return null;
    const json = (await res.json()) as { enabled: boolean; state: ProgressState | null };
    if (!json.enabled || !json.state) return null;
    return json.state;
  } catch {
    return null;
  }
}

const SEED_ACTIVITY_FRAGMENTS = [
  "Bertanya ke KopBot tentang perhitungan SHU",
  "Menyelesaikan Kuis Modul 2 — Jenis-Jenis Koperasi",
  "Menyelesaikan Modul 1 — Apa Itu Koperasi?",
];

function hydrate() {
  if (hydrated || typeof window === "undefined") return;
  hydrated = true;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as ProgressState;
      if (Array.isArray(parsed.activity)) {
        parsed.activity = parsed.activity.filter(
          (a: { text: string }) =>
            !SEED_ACTIVITY_FRAGMENTS.some((f) => a.text.startsWith(f)),
        );
      }
      state = { ...seed(), ...parsed };
    }
  } catch {
    /* fall back to seed */
  }

  // Ensure userId exists — generated once, lives in localStorage forever
  if (!state.userId) {
    state = { ...state, userId: makeUserId(), updatedAt: Date.now() };
    persist();
  }

  rollStreak();
  emit();

  // Async: load from cloud, apply if newer than local
  void fetchFromCloud(state.userId).then((cloud) => {
    if (!cloud) return;
    const localTs = state.updatedAt ?? 0;
    const cloudTs = cloud.updatedAt ?? 0;
    // >= so that migrated records without updatedAt (cloudTs=0) still win over a fresh local seed (localTs=0)
    if (cloudTs >= localTs) {
      state = { ...seed(), ...cloud, userId: state.userId };
      persist();
      emit();
    }
  });
}

function rollStreak() {
  const today = todayKey();
  if (state.lastActiveDate === today) return;
  const yesterday = todayKey(new Date(Date.now() - 86400_000));
  state.streak = state.lastActiveDate === yesterday ? state.streak + 1 : 1;
  state.lastActiveDate = today;
  persist();
}

function setState(next: Partial<ProgressState>) {
  state = { ...state, ...next, updatedAt: Date.now() };
  persist();
  emit();
  scheduleSyncToCloud();
}

/* ---------------- public actions ---------------- */

export function recordActivity(text: string) {
  setState({
    activity: [{ text, ts: Date.now() }, ...state.activity].slice(0, 12),
  });
}

export function solveQuiz(lessonId: number, quizIndex: number) {
  const solved = state.quizSolved[lessonId] ?? [];
  if (solved.includes(quizIndex)) return;
  setState({
    quizSolved: { ...state.quizSolved, [lessonId]: [...solved, quizIndex] },
    points: state.points + POINTS_PER_QUIZ,
  });
}

export function setModuleProgress(moduleId: number, pct: number) {
  const current = state.moduleProgress[moduleId] ?? 0;
  if (pct <= current) return;
  setState({
    moduleProgress: { ...state.moduleProgress, [moduleId]: pct },
  });
}

export function completeModule(moduleId: number) {
  if (state.completedModules.includes(moduleId)) {
    setModuleProgress(moduleId, 100);
    return;
  }
  const mod = modules.find((m) => m.id === moduleId);
  setState({
    completedModules: [...state.completedModules, moduleId],
    moduleProgress: { ...state.moduleProgress, [moduleId]: 100 },
    points: state.points + POINTS_PER_MODULE,
    activity: [
      { text: `Menyelesaikan Modul ${moduleId}${mod ? ` — ${mod.title}` : ""}`, ts: Date.now() },
      ...state.activity,
    ].slice(0, 12),
  });
}

export function setProfileName(name: string) {
  setState({ profileName: name.trim() });
}

export function setProfile(updates: {
  firstName?: string;
  lastName?: string;
  username?: string;
  bio?: string;
}) {
  const first = (updates.firstName !== undefined ? updates.firstName : state.firstName).trim();
  const last = (updates.lastName !== undefined ? updates.lastName : state.lastName).trim();
  const combined = [first, last].filter(Boolean).join(" ");
  setState({
    firstName: first,
    lastName: last,
    username: updates.username !== undefined ? updates.username.trim().toLowerCase() : state.username,
    bio: updates.bio !== undefined ? updates.bio.trim() : state.bio,
    profileName: combined || state.profileName,
  });
}

export function setAvatar(id: string) {
  setState({ avatarId: id });
}

export async function loginAs(userId: string, firstName: string, lastName: string) {
  const profileName = [firstName, lastName].filter(Boolean).join(" ");
  state = { ...seed(), userId, firstName, lastName, profileName, updatedAt: 0 };
  persist();
  emit();

  const cloud = await fetchFromCloud(userId);
  if (cloud) {
    state = {
      ...seed(),
      ...cloud,
      userId,
      firstName: cloud.firstName || firstName,
      lastName: cloud.lastName || lastName,
      profileName: cloud.profileName || profileName,
    };
    persist();
    emit();
  }
}

export function resetProgress() {
  state = {
    ...seed(),
    userId: state.userId,
    activity: [],
    points: 0,
    completedModules: [],
    moduleProgress: {},
    quizSolved: {},
    streak: 1,
    profileName: state.profileName,
    firstName: state.firstName,
    lastName: state.lastName,
    username: state.username,
    bio: state.bio,
    avatarId: state.avatarId,
    updatedAt: Date.now(),
  };
  persist();
  emit();
  scheduleSyncToCloud();
}

/* ---------------- React binding ---------------- */

function subscribe(cb: () => void) {
  if (!hydrated) hydrate();
  listeners.add(cb);
  return () => listeners.delete(cb);
}
function getSnapshot() {
  return state;
}
function getServerSnapshot() {
  return state;
}

export function useProgress() {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/* ---------------- derived selectors ---------------- */

export function moduleDoneCount(s: ProgressState) {
  return s.completedModules.length;
}
export function activeModuleId(s: ProgressState): number {
  const inProgress = modules.find(
    (m) => !s.completedModules.includes(m.id) && (s.moduleProgress[m.id] ?? 0) > 0,
  );
  if (inProgress) return inProgress.id;
  const firstUndone = modules.find((m) => !s.completedModules.includes(m.id));
  return firstUndone?.id ?? modules[modules.length - 1].id;
}
export function relativeTime(ts: number): string {
  const diff = Date.now() - ts;
  const min = Math.floor(diff / 60000);
  if (min < 1) return "Baru saja";
  if (min < 60) return `${min} menit lalu`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr} jam lalu`;
  const day = Math.floor(hr / 24);
  if (day === 1) return "Kemarin";
  if (day < 7) return `${day} hari lalu`;
  return new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "short" }).format(ts);
}

export { POINTS_PER_QUIZ, POINTS_PER_MODULE };
