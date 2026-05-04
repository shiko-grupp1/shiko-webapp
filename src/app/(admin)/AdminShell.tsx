"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";

import styles from "./layout.module.css";
import Header from "../components/shared/Header/Header";
import MenuListItem from "../components/shared/MenuItem/MenuListItem";
import CoursesIcon from "../components/icons/CoursesIcon";
import ProfileIcon from "../components/icons/ProfileIcon";
import RoleAssignmentsIcon from "../components/icons/RoleAssignmentsIcon";

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

// import { signOut } from "next-auth/react";

// const handleLogout = () => {
//   signOut({ callbackUrl: "/login" });
// };

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

      <Header />

      <aside className={styles.sidebar}>
        <nav aria-label="Admin navigation">
          <section>
            <h2 className={styles.navLabel}>MENU</h2>
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
        <div className={styles.logoutActions}>
          <button
            type="button"
            className={styles.logoutButton}
            onClick={handleLogout}
            aria-label="Log out"
          >
            <span className={styles.logoutIcon} aria-hidden="true">
              <Image src="/icons/logout.svg" width={19} height={18} alt="" />
            </span>
            <span className={`${styles.logoutText} body-20`}>Log Out</span>
          </button>
        </div>
      </aside>

      <div className={styles.mainArea}>
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
