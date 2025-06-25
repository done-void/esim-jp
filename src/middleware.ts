import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // "/" 以外は無視
  if (pathname !== "/") return NextResponse.next();

  const languageHeader = request.headers.get("accept-language") || "";
  const preferredLang = languageHeader.split(",")[0].toLowerCase();

  let destination = "/en/what-is-esim"; // デフォルトは英語

  if (preferredLang.startsWith("ja")) {
    destination = "/blog/what-is-esim";
  }

  return NextResponse.redirect(new URL(destination, request.url));
}
