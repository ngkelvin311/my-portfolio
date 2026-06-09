import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECTED_PATHS = ["/work/reecetech", "/work/fitness-passport", "/work/dcm"];

export function middleware(request: NextRequest) {
  const isProtected = PROTECTED_PATHS.some(path =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (!isProtected) return NextResponse.next();

  const auth = request.cookies.get("portfolio-auth")?.value;

  if (auth !== process.env.PORTFOLIO_SECRET) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const response = NextResponse.next();
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}

export const config = {
  matcher: ["/work/:path*"],
};