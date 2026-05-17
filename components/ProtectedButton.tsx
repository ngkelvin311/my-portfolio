"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

const STORAGE_KEY = "portfolio-key";
const CORRECT_KEY = "password1"; // change this to your password

export default function ProtectedButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [remember, setRemember] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleClick() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const { granted, expires } = JSON.parse(stored);
    if (granted && Date.now() < expires) {
      router.push(href);
      return;
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }
  document.body.style.overflow = "hidden";
  setOpen(true);
}

  function handleUnlock() {
  if (input.trim() === CORRECT_KEY) {
    if (remember) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        granted: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7
      }));
    }
    document.body.style.overflow = "";
    setOpen(false);
    router.push(href);
  } else {
    setError(true);
    setTimeout(() => setError(false), 2000);
  }
}

  function handleClose() {
  document.body.style.overflow = "";
  setOpen(false);
  setInput("");
  setError(false);
}

  const modal = open && mounted ? createPortal(
    <div
      onClick={handleClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(6px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "560px",
          borderRadius: "16px",
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          background: "#111111",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "16px",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <p className="type-tagline" style={{ color: "rgba(255,255,255,0.9)" }}>
            Enter your provided password
          </p>
          <button
            onClick={handleClose}
            className="type-meta"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            CLOSE
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <p className="type-body" style={{ color: "rgba(255,255,255,0.8)" }}>
            This section is password protected as it may include confidential
            context. Some details are redacted, but the work and outcomes are
            intact.
          </p>
          <p className="type-body" style={{ color: "rgba(255,255,255,0.8)" }}>
            Enter the password provided by Kelvin.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
            placeholder="Enter password here"
            className="type-body"
            style={{
              width: "100%",
              padding: "12px 16px",
              borderRadius: "12px",
              outline: "none",
              background: "rgba(255,255,255,0.06)",
              border: error
                ? "1.5px solid #ef4444"
                : "1.5px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.9)",
            }}
          />
          {error && (
            <p className="type-body" style={{ color: "#ef4444" }}>
              That password is not correct. Try again or request new password.
            </p>
          )}

          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              cursor: "pointer",
              color: "rgba(255,255,255,0.7)",
            }}
            className="type-body"
          >
            <div
              onClick={() => setRemember(!remember)}
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "4px",
                flexShrink: 0,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1.5px solid rgba(255,255,255,0.3)",
                background: remember ? "rgba(255,255,255,0.9)" : "transparent",
              }}
            >
              {remember && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path
                    d="M1 4L3.5 6.5L9 1"
                    stroke="#111111"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
            Remember password on this device
          </label>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <button
            onClick={handleUnlock}
            className="type-body"
            style={{
              width: "100%",
              padding: "12px 24px",
              borderRadius: "999px",
              fontWeight: 500,
              cursor: "pointer",
              background: "rgba(255,255,255,0.9)",
              color: "#111111",
              border: "none",
            }}
          >
            Unlock case studies
          </button>
          <a
            href="mailto:your@email.com"
            className="type-body"
            style={{
              width: "100%",
              padding: "12px 24px",
              borderRadius: "999px",
              textAlign: "center",
              display: "block",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Contact Kelvin for the password
          </a>
        </div>
      </div>
    </div>,
    document.body
  ) : null;

 return (
  <>
    <button
      onClick={handleClick}
      className="inline-flex w-fit items-center justify-center gap-2 whitespace-nowrap rounded-full bg-text px-6 py-3 font-body text-16 leading-none no-underline shadow-soft transition-colors duration-200 hover:opacity-90 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      style={{ color: "rgb(var(--chip-active-text))", textDecoration: "none", border: "none" }}
    >
      {children}
    </button>
    {modal}
  </>
);
}
