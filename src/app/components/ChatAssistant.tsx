"use client";

import { useState, useRef, useEffect, FormEvent } from "react";

type Message = {
  role: "user" | "assistant";
  text: string;
};

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hello! 👋 Welcome to Virtuous Pressure & Window Washing. How can I help you today?",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = input.trim();

    if (!message || loading) return;

    setInput("");

    setMessages((previous) => [
      ...previous,
      { role: "user", text: message },
    ]);

    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "The assistant could not respond.");
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          text: data.reply,
        },
      ]);
    } catch {
      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          text: "I'm sorry, I couldn't respond just now. Please call (281) 902-2796 or email virtuouspww@gmail.com for assistance.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-[100]">
      {isOpen && (
        <section className="mb-4 flex h-[min(560px,75vh)] w-[min(380px,calc(100vw-40px))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between bg-cyan-800 px-5 py-4 text-white">
            <div>
              <h2 className="font-bold">Virtuous Assistant</h2>
              <p className="mt-1 text-xs text-cyan-100">
                Window Cleaning & Pressure Washing
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="rounded-lg px-3 py-2 text-xl hover:bg-white/10"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-4"
            aria-live="polite"
          >
            {messages.map((message, index) => (
              <div
                key={`${index}-${message.role}`}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[88%] whitespace-pre-wrap break-words rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "rounded-br-sm bg-cyan-700 text-white"
                      : "rounded-bl-sm border border-slate-200 bg-white text-slate-800"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="text-sm text-slate-500">
                Virtuous Assistant is typing…
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={sendMessage}
            className="flex items-center gap-2 border-t border-slate-200 bg-white p-3"
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask us a question..."
              aria-label="Your message"
              maxLength={2000}
              className="min-w-0 flex-1 rounded-xl border border-slate-300 px-3 py-3 text-sm outline-none focus:border-cyan-700 focus:ring-2 focus:ring-cyan-100"
            />

            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-xl bg-cyan-800 px-4 py-3 text-sm font-bold text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send
            </button>
          </form>

          <div className="bg-white px-3 pb-3 text-center text-[10px] text-slate-500">
            For appointments and quotes, contact the Virtuous team.
          </div>
        </section>
      )}

      {/* Floating button */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label={isOpen ? "Close assistant" : "Chat with Virtuous Assistant"}
          className="flex items-center gap-3 rounded-full bg-cyan-800 px-5 py-4 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-cyan-700"
        >
          <span className="text-xl" aria-hidden="true">
            {isOpen ? "×" : "💬"}
          </span>
          <span>{isOpen ? "Close Chat" : "Ask Us Anything"}</span>
        </button>
      </div>
    </div>
  );
}