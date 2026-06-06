import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { password } = await req.json();

  if (!process.env.PORTFOLIO_SECRET) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  if (password !== process.env.PORTFOLIO_SECRET) {
    return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set("portfolio-auth", process.env.PORTFOLIO_SECRET, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return response;
}