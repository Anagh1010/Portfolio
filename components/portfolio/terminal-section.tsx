"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronRight, Terminal as TerminalIcon } from "lucide-react";
import { profile, terminalCommands } from "@/data/portfolio";

export function TerminalSection() {
  const [lines, setLines] = useState<string[]>([
    "Welcome to anagh.dev interactive shell.",
    "Type 'help' to view available commands.",
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;

    setHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const cmd = trimmed.toLowerCase();
    if (cmd === "clear") {
      setLines([]);
      setInput("");
      return;
    }

    if (cmd === "resume") {
      window.open(profile.resume, "_blank");
    }

    const reply =
      terminalCommands[cmd] ??
      `zsh: command not found: ${trimmed}. Type 'help' for available commands.`;

    setLines((prev) => [...prev, `anagh@dev:~/portfolio$ ${trimmed}`, reply]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(history[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      }
    }
  };

  return (
    <section id="terminal" className="border-t border-white/[0.04] px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
            <span className="flex items-center gap-1.5">
              <span className="text-zinc-600">~</span>
              <ChevronRight className="h-3 w-3 text-zinc-600" />
            </span>
            <span className="text-zinc-300 font-medium">run.sh</span>
            <span className="ml-3 text-zinc-600">// 05</span>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-3xl text-3xl font-medium tracking-tight text-zinc-100 sm:text-5xl">
              Interactive shell
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 font-mono">
              Type <span className="text-zinc-200 font-semibold">help</span> to explore. ↑/↓ for history.
            </p>
          </div>
        </div>

        {/* Terminal Window */}
        <div
          className="mt-10 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0c0e]/95 shadow-2xl shadow-black/50 backdrop-blur-xl font-mono text-xs cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Terminal Titlebar */}
          <div className="flex h-9 items-center justify-between border-b border-white/[0.06] bg-black/40 px-4 text-zinc-400">
            <div className="flex items-center gap-2">
              <TerminalIcon className="h-3.5 w-3.5 text-emerald-400" />
              <span className="font-semibold text-zinc-300">TERMINAL</span>
            </div>
            <span className="text-[11px] text-zinc-600">zsh — 120×32</span>
          </div>

          {/* Terminal Output & Input */}
          <div ref={outputRef} className="max-h-96 min-h-[220px] overflow-y-auto p-4 sm:p-5 space-y-2">
            {lines.map((line, idx) => {
              const isCommand = line.startsWith("anagh@dev:");
              return (
                <div
                  key={idx}
                  className={`leading-relaxed whitespace-pre-wrap ${
                    isCommand ? "text-emerald-400 font-medium" : "text-zinc-400"
                  }`}
                >
                  {line}
                </div>
              );
            })}

            {/* Prompt input line */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCommand(input);
              }}
              className="flex items-center gap-2 pt-2"
            >
              <span className="text-emerald-400/90 font-medium shrink-0">
                anagh@dev:~/portfolio$
              </span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent text-zinc-100 placeholder:text-zinc-700 focus:outline-none"
                autoComplete="off"
                spellCheck={false}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
