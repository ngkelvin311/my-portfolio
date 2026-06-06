"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

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
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [unlockHovered, setUnlockHovered] = useState(false);
  const [closeHovered, setCloseHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleClick() {
    document.body.style.overflow = "hidden";
    setOpen(true);
  }

  async function handleUnlock() {
    setLoading(true);
    setError(false);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: input }),
    });

    if (res.ok) {
      document.body.style.overflow = "";
      setOpen(false);
      router.push(href);
    } else {
      setError(true);
      setLoading(false);
      setTimeout(() => setError(false), 2000);
    }
  }

  function handleClose() {
    document.body.style.overflow = "";
    setOpen(false);
    setInput("");
    setError(false);
    setLoading(false);
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
        onMouseDown={(e) => e.stopPropagation()}
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
          userSelect: "text",
          WebkitUserSelect: "text",
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
            onMouseEnter={() => setCloseHovered(true)}
            onMouseLeave={() => setCloseHovered(false)}
            className="type-meta"
            style={{
              color: closeHovered ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)",
              transition: "color 200ms ease",
              cursor: "pointer",
            }}
          >
            CLOSE
          </button>
        </div>

       <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <p className="type-body" style={{ color: "rgba(255,255,255,0.8)", userSelect: "text", WebkitUserSelect: "text" }}>
            This section is password protected as it may include confidential
            context. Some details are redacted, but the work and outcomes are
            intact.
          </p>
          <p className="type-body" style={{ color: "rgba(255,255,255,0.8)", userSelect: "text", WebkitUserSelect: "text" }}>
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
              That password is not correct. Try again or request a new password.
            </p>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <button
            onClick={handleUnlock}
            onMouseEnter={() => setUnlockHovered(true)}
            onMouseLeave={() => setUnlockHovered(false)}
            disabled={loading || !input}
            className="type-body"
            style={{
              width: "100%",
              padding: "12px 24px",
              borderRadius: "999px",
              fontWeight: 500,
              cursor: loading || !input ? "not-allowed" : "pointer",
              background: unlockHovered && !loading && input
                ? "rgba(255,255,255,1)"
                : "rgba(255,255,255,0.85)",
              color: "#111111",
              border: "none",
              transition: "background 200ms ease",
              opacity: loading || !input ? 0.5 : 1,
            }}
          >
            {loading ? "Checking..." : "Unlock case studies"}
          </button>
          <a
            href="mailto:ngkelvin311@gmail.com"
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