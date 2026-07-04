"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { chatSuggestions } from "@/lib/data";
import { recordActivity } from "@/lib/progress";
import {
  loadStore,
  saveStore,
  newSession,
  nowTime,
  groupSessions,
  type ChatSession,
  type StoredMsg,
} from "@/lib/chat-store";

/* ------------------------------------------------------------------ */
/* Icons                                                               */
/* ------------------------------------------------------------------ */

function IconMenu() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

function IconPlus() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function IconTrash() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* TypingDots                                                          */
/* ------------------------------------------------------------------ */

function TypingDots() {
  return (
    <span className="flex gap-1 py-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-ink-2"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
        />
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* History Sidebar                                                     */
/* ------------------------------------------------------------------ */

function HistorySidebar({
  sessions,
  activeId,
  open,
  onClose,
  onSelect,
  onNew,
  onDelete,
}: {
  sessions: ChatSession[];
  activeId: string;
  open: boolean;
  onClose: () => void;
  onSelect: (id: string) => void;
  onNew: () => void;
  onDelete: (id: string, e: React.MouseEvent) => void;
}) {
  const groups = groupSessions(sessions);

  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-20 bg-black/40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-30 flex w-60 flex-col border-r border-line bg-card
          transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
          md:static md:z-auto md:w-52 md:translate-x-0 md:transition-none
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-line px-4 py-3">
          <span className="text-sm font-semibold text-ink">Riwayat</span>
          <button
            onClick={onNew}
            title="Obrolan baru"
            className="flex items-center gap-1 rounded-sm border border-line bg-background px-2.5 py-1 text-xs font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
          >
            <IconPlus /> Baru
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-1">
          {sessions.length === 0 ? (
            <p className="px-4 py-8 text-center text-xs text-ink-2">
              Belum ada riwayat obrolan
            </p>
          ) : (
            groups.map(({ label, items }) => (
              <div key={label} className="mb-1">
                <p className="px-4 pb-0.5 pt-3 text-[0.625rem] font-semibold uppercase tracking-wider text-ink-2">
                  {label}
                </p>
                {items.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => onSelect(s.id)}
                    className={`group relative flex w-full items-center gap-1 px-4 py-2 text-left text-[0.8125rem] leading-snug transition-colors ${
                      s.id === activeId
                        ? "bg-accent font-medium text-primary"
                        : "text-ink hover:bg-accent/50 hover:text-ink"
                    }`}
                  >
                    <span className="flex-1 truncate">{s.title}</span>
                    <span
                      role="button"
                      onClick={(e) => onDelete(s.id, e)}
                      title="Hapus obrolan ini"
                      className="ml-1 shrink-0 rounded p-0.5 text-ink-2 opacity-0 transition-opacity hover:bg-red-50 hover:text-red-500 group-hover:opacity-100"
                    >
                      <IconTrash />
                    </span>
                  </button>
                ))}
              </div>
            ))
          )}
        </div>
      </aside>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */

export function KopbotChat() {
  const [sessions, setSessions] = React.useState<ChatSession[]>([]);
  const [activeId, setActiveId] = React.useState("");
  const [input, setInput] = React.useState("");
  const [streaming, setStreaming] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [hydrated, setHydrated] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  // Load from localStorage once on mount
  React.useEffect(() => {
    const store = loadStore();
    if (store.sessions.length > 0) {
      setSessions(store.sessions);
      const validId =
        store.activeId && store.sessions.find((s) => s.id === store.activeId)
          ? store.activeId
          : store.sessions[0].id;
      setActiveId(validId);
    }
    setHydrated(true);
  }, []);

  // Persist on every change (after hydration to avoid overwriting on mount)
  React.useEffect(() => {
    if (!hydrated) return;
    saveStore(sessions, activeId);
  }, [sessions, activeId, hydrated]);

  const activeSession = sessions.find((s) => s.id === activeId) ?? null;
  const messages = activeSession?.messages ?? [];

  // Scroll to bottom on new content
  React.useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages.length, streaming]);

  function patchSession(id: string, updater: (s: ChatSession) => ChatSession) {
    setSessions((prev) => prev.map((s) => (s.id === id ? updater(s) : s)));
  }

  function handleNew() {
    const s = newSession();
    setSessions((prev) => [s, ...prev]);
    setActiveId(s.id);
    setSidebarOpen(false);
  }

  function handleSelect(id: string) {
    setActiveId(id);
    setSidebarOpen(false);
  }

  function handleDelete(id: string, e: React.MouseEvent) {
    e.stopPropagation();
    setSessions((prev) => {
      const next = prev.filter((s) => s.id !== id);
      if (activeId === id) setActiveId(next[0]?.id ?? "");
      return next;
    });
  }

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || streaming) return;

    setInput("");

    // Ensure there's an active session â€” create one inline if needed
    let sessionId = activeId;
    let baseMessages: StoredMsg[] = activeSession?.messages ?? [];

    if (!sessionId || !activeSession) {
      const s = newSession();
      // We'll add the user+placeholder into the session in one shot below
      setSessions((prev) => [s, ...prev]);
      setActiveId(s.id);
      sessionId = s.id;
      baseMessages = [];
    }

    const isFirst = baseMessages.filter((m) => m.role === "user").length === 0;
    const title = isFirst
      ? trimmed.length > 44
        ? trimmed.slice(0, 44) + "â€¦"
        : trimmed
      : undefined;

    const userMsg: StoredMsg = { role: "user", content: trimmed, time: nowTime() };
    const placeholder: StoredMsg = { role: "assistant", content: "", time: nowTime() };

    // Build API history from the stable baseMessages + new userMsg
    const apiHistory = [
      ...baseMessages
        .filter((m) => m.content)
        .map((m) => ({ role: m.role, content: m.content })),
      { role: "user" as const, content: trimmed },
    ];

    // Patch the session: add user msg + placeholder in one update
    setSessions((prev) =>
      prev.map((s) => {
        if (s.id !== sessionId) return s;
        return {
          ...s,
          ...(title ? { title } : {}),
          messages: [...s.messages.filter((m) => m.content || m.role === "user"), userMsg, placeholder],
          updatedAt: Date.now(),
        };
      }),
    );

    setStreaming(true);
    recordActivity(
      `Bertanya ke KopBot: "${trimmed.length > 48 ? trimmed.slice(0, 48) + "..." : trimmed}"`,
    );

    try {
      const res = await fetch("/api/kopbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiHistory }),
      });

      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Gagal terhubung.");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        const captured = acc;
        setSessions((prev) =>
          prev.map((s) => {
            if (s.id !== sessionId) return s;
            const msgs = [...s.messages];
            msgs[msgs.length - 1] = { ...msgs[msgs.length - 1], content: captured };
            return { ...s, messages: msgs, updatedAt: Date.now() };
          }),
        );
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Maaf, ada gangguan koneksi.";
      patchSession(sessionId, (s) => {
        const msgs = [...s.messages];
        msgs[msgs.length - 1] = { role: "assistant", content: msg + " Coba lagi ya.", time: nowTime() };
        return { ...s, messages: msgs };
      });
    } finally {
      setStreaming(false);
    }
  }

  const empty = messages.length === 0;

  return (
    <div className="flex h-[calc(100dvh-3.5rem)] md:h-screen">
      <HistorySidebar
        sessions={sessions}
        activeId={activeId}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onSelect={handleSelect}
        onNew={handleNew}
        onDelete={handleDelete}
      />

      {/* Chat area */}
      <div className="flex min-w-0 flex-1 flex-col bg-background">
        {/* Header */}
        <div className="flex shrink-0 items-center gap-3 border-b border-line bg-card px-4 py-3 md:px-6">
          {/* Mobile hamburger */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="shrink-0 rounded-sm p-1.5 text-ink-2 transition-colors hover:bg-accent hover:text-ink md:hidden"
            aria-label="Buka riwayat obrolan"
          >
            <IconMenu />
          </button>

          <div className="min-w-0 flex-1">
            <h1 className="font-display text-xl font-bold text-ink">KopBot</h1>
            {activeSession && (
              <p className="truncate text-[0.75rem] text-ink-2">{activeSession.title}</p>
            )}
          </div>

          <button
            onClick={handleNew}
            className="flex shrink-0 items-center gap-1.5 rounded-sm border border-line bg-background px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
          >
            <IconPlus />
            <span className="hidden sm:inline">Obrolan Baru</span>
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-6 md:px-6">
          <div className="mx-auto max-w-2xl space-y-4">
            {empty && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-md border border-line bg-card p-6"
              >
                <p className="text-sm leading-relaxed text-ink">
                  Halo. Aku KopBot, asisten edukasi koperasi. Tanyakan apa saja
                  tentang koperasi â€” mulai dari dasar-dasar, Koperasi Desa Merah Putih,
                  simpan pinjam, SHU, hingga cara mendirikan koperasi.
                </p>
              </motion.div>
            )}

            <AnimatePresence initial={false}>
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[80%] whitespace-pre-wrap rounded-md px-4 py-2.5 text-[0.95rem] leading-relaxed ${
                      m.role === "user"
                        ? "rounded-br-[2px] bg-primary text-primary-foreground"
                        : "rounded-bl-[2px] border border-line bg-card text-ink"
                    }`}
                  >
                    {m.content ||
                      (streaming && i === messages.length - 1 ? <TypingDots /> : "")}
                  </div>
                  {m.content && (
                    <span className="mt-1 text-[0.7rem] text-ink-2">{m.time}</span>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Suggestions */}
        {empty && (
          <div className="shrink-0 px-4 pb-3 md:px-6">
            <div className="mx-auto flex max-w-2xl flex-wrap gap-2">
              {chatSuggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-line bg-card px-4 py-1.5 text-sm text-ink transition-colors hover:border-primary hover:bg-accent hover:text-primary"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="shrink-0 border-t border-line bg-card px-4 py-3 md:px-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="mx-auto flex max-w-2xl gap-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tulis pertanyaanmu..."
              className="h-11 flex-1 rounded-sm border border-line bg-background px-4 text-[0.95rem] text-ink outline-none transition-colors placeholder:text-ink-2/60 focus:border-primary"
            />
            <button
              type="submit"
              disabled={streaming || !input.trim()}
              className="inline-flex h-11 items-center rounded-sm bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[#7a2ff2] disabled:opacity-50"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
