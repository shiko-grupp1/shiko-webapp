"use client";

import { usePathname, useRouter } from "next/navigation";

import MenuListItem from "../shared/MenuItem/MenuListItem";
import DashboardIcon from "../icons/dashboardIcon";
import CoursesIcon from "../icons/CoursesIcon";
import CalendarIcon from "../icons/CalendarIcon";
import LiveClassIcon from "../icons/LiveClassIcon";
import ProfileIcon from "../icons/ProfileIcon";
import TeamIcon from "../icons/TeamIcon";
import SettingsIcon from "../icons/SettingsIcon";
import HelpCenterIcon from "../icons/HelpCenterIcon";
import LogoutIcon from "../icons/LogOutIcon";
import Image from "next/image";


export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <aside className="sidebar">
      <nav>
        <div className="logo-container">
          <div className="logo">
            <Image loading="eager" src="/images/shikologo.webp" width={143} height={35} alt="Shiko logo"></Image>
          </div>
        </div>

        <p className="section">MENU</p>

        <ul className="menu-list">
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
            icon={<CalendarIcon />}
            isActive={pathname === "/calendar"}
          />

          <MenuListItem
            href="/live"
            text="Live Class"
            icon={<LiveClassIcon />}
            isActive={pathname === "/live"}
          />
        </ul>

        <p className="section">GENERAL</p>

        <ul className="menu-list">
          <MenuListItem
            href="/profile"
            text="Profile"
            icon={<ProfileIcon />}
            isActive={pathname === "/profile"}
          />

          <MenuListItem
            href="/team"
            text="Team"
            icon={<TeamIcon />}
            isActive={pathname === "/team"}
          />

          <MenuListItem
            href="/settings"
            text="Settings"
            icon={<SettingsIcon />}
            isActive={pathname === "/settings"}
          />

          <MenuListItem
            href="/help"
            text="Help Center"
            icon={<HelpCenterIcon />}
            isActive={pathname === "/help"}
          />
        </ul>

          <section className="menu-actions">
            <button className="menu-button" onClick={handleLogout}>
              <span className="icon">
                <LogoutIcon />
              </span>
              <span>Log Out</span>
            </button>
          </section>
        
      </nav>
    </aside>
  );
}
