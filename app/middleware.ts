import { NextRequest, NextResponse } from "next/server";

export function middleware(_req: NextRequest) {
  // noop passthrough; detailed logging handled in API routes
  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
