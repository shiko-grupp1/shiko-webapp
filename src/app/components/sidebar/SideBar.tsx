"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <aside className="sidebar">
      <h2 className="logo">Shiko</h2>

      <p className="section">MENU</p>

      <nav>
        <Link className={isActive("/") ? "active" : ""} href="/">
          Dashboard
        </Link>
        <Link className={isActive("/courses") ? "active" : ""} href="/courses">
          Courses
        </Link>
        <Link className={isActive("/calendar") ? "active" : ""} href="/calendar">
          Calendar
        </Link>
        <Link className={isActive("/live") ? "active" : ""} href="/live">
          Live Class
        </Link>
      </nav>

      <p className="section">GENERAL</p>

      <nav>
        <Link className={isActive("/profile") ? "active" : ""} href="/profile">
          Profile
        </Link>
        <Link className={isActive("/team") ? "active" : ""} href="/team">
          Team
        </Link>
        <Link className={isActive("/settings") ? "active" : ""} href="/settings">
          Settings
        </Link>
        <Link className={isActive("/help") ? "active" : ""} href="/help">
          Help Center
        </Link>
      </nav>

      <Link href="/logout" className="logout">
        Log Out
      </Link>
    </aside>
  );
}
