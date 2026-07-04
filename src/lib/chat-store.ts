"use client";

const CHAT_KEY = "kopedu:chat:v1";

export type StoredMsg = { role: "user" | "assistant"; content: string; time: string };

export type ChatSession = {
  id: string;
  title: string;
  messages: StoredMsg[];
  createdAt: number;
  updatedAt: number;
};

type ChatStore = { sessions: ChatSession[]; activeId: string };

function uid(): string {
  return Math.random().toString(36).slice(2, 9) + Date.now().toString(36);
}

export function newSession(): ChatSession {
  const now = Date.now();
  return { id: uid(), title: "Obrolan baru", messages: [], createdAt: now, updatedAt: now };
}

export function loadStore(): ChatStore {
  if (typeof window === "undefined") return { sessions: [], activeId: "" };
  try {
    const raw = localStorage.getItem(CHAT_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as ChatStore;
      if (Array.isArray(parsed.sessions) && parsed.sessions.length > 0) return parsed;
    }
  } catch { /* */ }
  return { sessions: [], activeId: "" };
}

export function saveStore(sessions: ChatSession[], activeId: string): void {
  try {
    localStorage.setItem(CHAT_KEY, JSON.stringify({ sessions, activeId }));
  } catch { /* */ }
}

export function nowTime(): string {
  return new Intl.DateTimeFormat("id-ID", { hour: "2-digit", minute: "2-digit" }).format(new Date());
}

export function sessionRelDate(ts: number): string {
  const diff = Date.now() - ts;
  const day = Math.floor(diff / 86_400_000);
  if (day === 0) return "Hari ini";
  if (day === 1) return "Kemarin";
  if (day < 7) return `${day} hari lalu`;
  return new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "short" }).format(ts);
}

export function groupSessions(sessions: ChatSession[]): { label: string; items: ChatSession[] }[] {
  const sorted = [...sessions].sort((a, b) => b.updatedAt - a.updatedAt);
  const map = new Map<string, ChatSession[]>();
  for (const s of sorted) {
    const label = sessionRelDate(s.updatedAt);
    if (!map.has(label)) map.set(label, []);
    map.get(label)!.push(s);
  }
  return Array.from(map.entries()).map(([label, items]) => ({ label, items }));
}
