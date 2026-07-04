"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { getLesson, modules, type Quiz } from "@/lib/data";
import {
  useProgress,
  solveQuiz,
  setModuleProgress,
  completeModule,
  POINTS_PER_QUIZ,
} from "@/lib/progress";

export function LessonView({ id }: { id: number }) {
  const lesson = getLesson(id);
  const moduleMeta = modules.find((m) => m.id === lesson.moduleId);
  const totalParts = lesson.sections.length + lesson.quizzes.length;
  const store = useProgress();

  const solvedList = store.quizSolved[lesson.moduleId] ?? [];
  const solvedCount = solvedList.length;
  const points = solvedCount * POINTS_PER_QUIZ;

  const completedParts = lesson.sections.length + solvedCount;
  const progress = Math.min(
    100,
    Math.round((completedParts / totalParts) * 100),
  );

  React.useEffect(() => {
    if (!store.completedModules.includes(lesson.moduleId)) {
      setModuleProgress(lesson.moduleId, progress);
    }
  }, [progress, lesson.moduleId, store.completedModules]);

  // BUG-A fix: also treat as solved if module is already in completedModules
  const allSolved =
    solvedCount >= lesson.quizzes.length ||
    store.completedModules.includes(lesson.moduleId);
  const totalQuizzes = lesson.quizzes.length;

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky header */}
      <header className="sticky top-0 z-40 border-b border-line bg-card/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-3.5">
          <Link
            href="/dashboard/modul"
            className="text-sm text-ink-2 transition-colors hover:text-ink"
          >
            &larr; Kembali
          </Link>
          <span className="truncate text-sm font-medium text-ink">
            {lesson.title}
          </span>
          <span className="whitespace-nowrap font-mono-data text-[13px] text-ink-2">
            {progress}%
          </span>
        </div>
        <div className="h-0.5 w-full bg-line">
          <motion.div
            className="h-full bg-primary"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3">{moduleMeta?.tag ?? "Modul"}</p>
          <h1 className="font-display text-4xl font-bold leading-tight text-ink">
            {lesson.title}
          </h1>
        </motion.div>

        {lesson.sections.map((s, i) => (
          <motion.section
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12"
          >
            <h2 className="font-display text-2xl font-bold text-ink">
              {s.heading}
            </h2>
            {s.body.map((p, j) => (
              <p key={j} className="mt-4 leading-[1.85] text-ink-2">
                {p}
              </p>
            ))}

            {s.highlight && (
              <div className="my-6 rounded-r-sm border-l-[3px] border-primary bg-accent px-5 py-4">
                <strong className="block text-xs font-semibold uppercase tracking-wider text-primary">
                  {s.highlight.term}
                </strong>
                <p className="mt-1.5 text-sm leading-relaxed text-ink">
                  {s.highlight.def}
                </p>
              </div>
            )}

            {s.bigNumber && (
              <div className="my-8 text-center">
                <div className="font-mono-data text-5xl font-medium text-primary">
                  {s.bigNumber.value}
                </div>
                <p className="mx-auto mt-2 max-w-[36ch] text-sm text-ink-2">
                  {s.bigNumber.label}
                </p>
              </div>
            )}

            {lesson.quizzes[i] && (
              <QuizBlock
                quiz={lesson.quizzes[i]}
                index={i}
                totalQuizzes={totalQuizzes}
                solved={solvedList.includes(i)}
                onSolve={() => solveQuiz(lesson.moduleId, i)}
              />
            )}
          </motion.section>
        ))}

        {/* Footer nav */}
        <div className="mt-16 border-t border-line pt-6">
          {!allSolved && (
            <p className="mb-4 text-center text-sm text-ink-2">
              <span className="font-semibold text-primary">{solvedCount}</span>
              {" "}dari{" "}
              <span className="font-semibold">{totalQuizzes}</span>
              {" "}latihan selesai â€” jawab semua untuk melanjutkan
            </p>
          )}
          <div className="flex items-center justify-between">
            <Link
              href="/dashboard/modul"
              className="inline-flex h-10 items-center rounded-sm border border-line px-4 text-sm font-medium text-ink-2 transition-colors hover:border-primary hover:text-primary"
            >
              &larr; Kembali
            </Link>
            <span className="font-mono-data text-sm text-primary">
              +{points} poin
            </span>
            {allSolved ? (
              <Link
                href="/dashboard"
                onClick={() => completeModule(lesson.moduleId)}
                className="inline-flex h-10 items-center rounded-sm bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[#7a2ff2]"
              >
                Selesaikan Modul &rarr;
              </Link>
            ) : (
              <button
                disabled
                title={`Selesaikan ${totalQuizzes - solvedCount} latihan lagi`}
                className="inline-flex h-10 cursor-not-allowed items-center rounded-sm bg-muted px-4 text-sm font-semibold text-ink-2 opacity-60"
              >
                Selesaikan Modul &rarr;
              </button>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}

function QuizBlock({
  quiz,
  index,
  totalQuizzes,
  solved,
  onSolve,
}: {
  quiz: Quiz;
  index: number;
  totalQuizzes: number;
  solved: boolean;
  onSolve: () => void;
}) {
  const [selected, setSelected] = React.useState<string | null>(null);
  const [checked, setChecked] = React.useState(false);

  // BUG-03 fix: sync when store hydrates from localStorage after mount
  React.useEffect(() => {
    if (solved && !checked) {
      setSelected(quiz.correct);
      setChecked(true);
    }
  }, [solved, quiz.correct, checked]);

  const isCorrect = checked && selected === quiz.correct;

  function check() {
    if (!selected || checked) return;
    setChecked(true);
    if (selected === quiz.correct) onSolve();
  }

  // BUG-02 fix: retry resets state so learner can attempt again
  function retry() {
    setSelected(null);
    setChecked(false);
  }

  return (
    <div className="my-10 rounded-md border border-line bg-card p-6">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-2">
          Latihan {index + 1} dari {totalQuizzes}
        </p>
        <span className="font-mono-data text-xs text-primary">
          +{POINTS_PER_QUIZ} poin
        </span>
      </div>
      <p className="font-semibold text-ink">{quiz.question}</p>

      <div className="mt-4 space-y-2">
        {quiz.options.map((opt) => {
          // BUG-01 fix: state derivation for correct-answer reveal on wrong
          const state =
            checked && opt.id === quiz.correct
              ? "correct"
              : checked && opt.id === selected && selected !== quiz.correct
                ? "wrong"
                : !checked && selected === opt.id
                  ? "selected"
                  : "idle";

          return (
            <button
              key={opt.id}
              type="button"
              disabled={checked}
              onClick={() => setSelected(opt.id)}
              className={`flex w-full items-center gap-3 rounded-sm border px-4 py-3 text-left text-sm transition-colors disabled:cursor-default ${
                state === "correct"
                  ? "border-primary bg-accent"
                  : state === "wrong"
                    ? "border-destructive bg-[#fdecea]"
                    : state === "selected"
                      ? "border-primary bg-accent"
                      : "border-line hover:border-primary hover:bg-accent/40"
              }`}
            >
              <span
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${
                  state === "correct" || state === "selected"
                    ? "border-primary"
                    : state === "wrong"
                      ? "border-destructive"
                      : "border-line"
                }`}
              >
                {state === "correct" && (
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                )}
                {state === "wrong" && (
                  <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
                )}
                {state === "selected" && (
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                )}
              </span>
              <span
                className={
                  state === "wrong" ? "text-destructive" : "text-ink"
                }
              >
                {opt.text}
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {!checked ? (
          <motion.button
            key="check"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            type="button"
            onClick={check}
            disabled={!selected}
            className="mt-4 inline-flex h-10 items-center rounded-sm bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[#7a2ff2] disabled:opacity-50"
          >
            Cek Jawaban
          </motion.button>
        ) : (
          <motion.div
            key="feedback"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4"
          >
            <div
              className={`rounded-sm px-4 py-3 text-sm leading-relaxed ${
                isCorrect
                  ? "bg-accent text-[#1a5c3a]"
                  : "bg-[#fdecea] text-[#7f1d1d]"
              }`}
            >
              <strong>{isCorrect ? "Benar. " : "Belum tepat. "}</strong>
              {quiz.explanation}
            </div>

            {/* BUG-02 fix: retry button when wrong */}
            {!isCorrect && (
              <motion.button
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.25 }}
                type="button"
                onClick={retry}
                className="mt-3 inline-flex h-10 items-center rounded-sm border border-line px-5 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
              >
                Coba Lagi
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
