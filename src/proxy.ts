import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { UserRole } from "./types/roles";

export default withAuth(
  function proxy(req) {
    const role = (req.nextauth.token?.role as UserRole) ?? undefined;
    const path = req.nextUrl.pathname;

    if (path.startsWith("/admin") && role !== "Admin") {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    if (path.startsWith("/student") && role !== "Student" && role !== "Admin") {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/student/:path*"],
};
