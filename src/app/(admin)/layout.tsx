"use client";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

import styles from "./layout.module.css";
import AdminHeader from "./AdminHeader";
import MenuListItem from "../components/shared/MenuItem/MenuListItem";
import CoursesIcon from "../components/icons/CoursesIcon";
import ProfileIcon from "../components/icons/ProfileIcon";
import RoleAssignmentsIcon from "../components/icons/RoleAssignmentsIcon";

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("https://auth-api/logout", {
        method: "POST",
        credentials: "include", // do we use cookies?
      });
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      router.push("/login");
    }
  };

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

      <AdminHeader />

      <aside className={styles.sidebar}>
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
          <button
            type="button"
            className={styles.logoutButton}
            onClick={handleLogout}
            aria-label="Log out"
          >
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
