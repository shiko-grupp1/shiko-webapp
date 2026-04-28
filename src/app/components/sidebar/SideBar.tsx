"use client";

import { usePathname } from "next/navigation";
import MenuListItem from "../shared/MenuItem/MenuListItem";
import DashboardIcon from "../icons/dashboardIcon";
import CoursesIcon from "../icons/CoursesIcon";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <h2 className="logo">Shiko</h2>

      <p className="section">MENU</p>

      <ul>
        <MenuListItem
          href="/"
          text="Dashboard"
          icon={<DashboardIcon />}
          isActive={pathname === "/"}
        />

        <MenuListItem
          href="/courses"
          text="Courses"
          icon={<CoursesIcon />}
          isActive={pathname === "/courses"}
        />

        <MenuListItem
          href="/calendar"
          text="Calendar"
          isActive={pathname === "/calendar"}
        />

        <MenuListItem
          href="/live"
          text="Live Class"
          isActive={pathname === "/live"}
        />
      </ul>

      <p className="section">GENERAL</p>

      <ul>
        <MenuListItem
          href="/profile"
          text="Profile"
          isActive={pathname === "/profile"}
        />

        <MenuListItem
          href="/team"
          text="Team"
          isActive={pathname === "/team"}
        />

        <MenuListItem
          href="/settings"
          text="Settings"
          isActive={pathname === "/settings"}
        />

        <MenuListItem
          href="/help"
          text="Help Center"
          isActive={pathname === "/help"}
        />
      </ul>

      {/* logout kan du göra senare om ni vill */}
    </aside>
  );
}