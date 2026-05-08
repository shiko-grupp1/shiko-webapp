import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { UserRole } from "./types/roles";
import { loginRedirectLocation } from "./app/lib/variable";

export default withAuth(
  function proxy(req) {
    const role = (req.nextauth.token?.role as UserRole) ?? undefined;
    const path = req.nextUrl.pathname;

    if (path.startsWith(loginRedirectLocation) && req.nextauth.token) {
      const redirectedPath = role === "Admin" ? "/admin" : "/student";
      return NextResponse.redirect(new URL(redirectedPath, req.url));
    }

    if (path.startsWith("/admin") && role !== "Admin")
      return NextResponse.redirect(new URL(loginRedirectLocation, req.url));
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;

        if (pathname.startsWith(loginRedirectLocation)) return true;

        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico).*)"],
};
