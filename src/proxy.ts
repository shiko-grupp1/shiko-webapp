import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { UserRole } from "./types/roles";

export default withAuth(
  function proxy(req) {
    const role = (req.nextauth.token?.role as UserRole) ?? undefined;
    const path = req.nextUrl.pathname;

    if (path.startsWith("/login") && req.nextauth.token) {
      const redirectedPath = role === "Admin" ? "/admin" : "/student";
      return NextResponse.redirect(new URL(redirectedPath, req.url));
    }

    if (path.startsWith("/admin") && role !== "Admin")
      return NextResponse.redirect(new URL("/login", req.url));
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;

        if (pathname.startsWith("/login")) return true;

        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico).*)"],
};
