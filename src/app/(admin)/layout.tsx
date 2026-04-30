"use client";
import styles from "./layout.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";

import MenuListItem from "../components/shared/MenuItem/MenuListItem";
import CoursesIcon from "../components/icons/CoursesIcon";
import ProfileIcon from "../components/icons/ProfileIcon";
import RoleAssignmentsIcon from "../components/icons/RoleAssignmentsIcon";
import { Button } from "../components/shared/Button/Button";
import LetterIcon from "../components/icons/LetterIcon";
import BellIcon from "../components/icons/BellIcon";

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  return (
    <div className={styles.adminLayout}>
      <div className={styles.logoCard}>
        <Image
          src="/images/logo.webp"
          className={styles.logo}
          width={143}
          height={35}
          alt="Shiko logo"
        />
      </div>

      <header className={styles.siteHeader}>
        <label className={styles.search}>
          <span className={styles.searchIcon} aria-hidden="true">
            <Image src="/icons/search.svg" width={16} height={16} alt="" />
          </span>
          <input
            className={styles.searchInput}
            type="search"
            placeholder="Search task..."
            aria-label="Search task"
          />
        </label>

        <div className={styles.headerActions}>
          <Button
            type="button"
            shape="circle"
            variant="neutral"
            icon={<LetterIcon />}
            className={styles.iconButton}
            aria-label="Messages"
          />

          <Button
            type="button"
            shape="circle"
            variant="neutral"
            icon={<BellIcon />}
            className={styles.iconButton}
            aria-label="Notifications"
          />

          <div className={styles.userSummary}>
            <Image
              src="/images/avatar.webp"
              width={60}
              height={60}
              alt="User avatar"
              className={styles.avatar}
            />
            <div>
              <p>Hasan Mahmud</p>
              <span>hasan@gmail.com</span>
            </div>
          </div>
        </div>
      </header>

      <aside className={styles.sidebar} >
        <nav aria-label="Admin navigation">
          <section>
            <p className={styles.navLabel}>MENU</p>
            <ul className={styles.menuList}>
              <MenuListItem
                icon={<CoursesIcon />}
                text="Courses"
                href="/admin/courses"
                isActive={pathname === "/admin/courses"}
              />
              <MenuListItem
                icon={<ProfileIcon />}
                text="Users"
                href="/admin/users"
                isActive={pathname === "/admin/users"}
              />
              <MenuListItem
                icon={<RoleAssignmentsIcon />}
                text="Role Assignments"
                href="/admin/role-assignments"
                isActive={pathname === "/admin/role-assignments"}
              />
            </ul>
          </section>
        </nav>
        <section className={styles.logoutSection}>
          <button type="button" className={styles.logoutButton} aria-label="Log out">
            <span className={styles.logoutIcon} aria-hidden="true">
              <Image src="/icons/logout.svg" width={19} height={18} alt="" />
            </span>
            <span className={styles.logoutText}>Log Out</span>
          </button>
        </section>
      </aside>

      <div className={styles.mainArea}>
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
