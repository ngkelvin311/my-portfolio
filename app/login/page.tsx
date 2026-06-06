"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/work");
    } else {
      setError("Wrong password. Try again.");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-4 w-full max-w-sm px-6">
        <h1 className="text-xl font-semibold">Protected work</h1>
        <p className="text-sm text-gray-500">
          This section is password protected. Reach out if you need access.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded px-3 py-2 text-sm w-full"
            autoFocus
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading || !password}
            className="bg-black text-white rounded px-4 py-2 text-sm disabled:opacity-40"
          >
            {loading ? "Checking..." : "Enter"}
          </button>
        </form>
      </div>
    </main>
  );
}