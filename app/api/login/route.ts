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

  // httpOnly cookie — middleware reads this server-side for real access control.
  // JavaScript cannot read this. It is the actual security layer.
  response.cookies.set("portfolio-auth", process.env.PORTFOLIO_SECRET, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  // Readable signal cookie — ProtectedButton reads this client-side to skip the modal.
  // Contains no secret. Security still comes entirely from the httpOnly cookie above.
  response.cookies.set("portfolio-auth-ui", "1", {
    httpOnly: false,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days — matches httpOnly cookie exactly
  });

  return response;
}
