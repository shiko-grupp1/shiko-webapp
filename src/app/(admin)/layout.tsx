import styles from "./layout.module.css";
import { usePathname } from "next/navigation";

import MenuListItem from "../components/shared/MenuItem/MenuListItem";
import DashboardIcon from "../components/icons/dashboardIcon";
import CoursesIcon from "../components/icons/CoursesIcon";
import ProfileIcon from "../components/icons/ProfileIcon";
import RoleAssignmentsIcon from "../components/icons/RoleAssignmentsIcon";
import { Button } from "../components/shared/Button/Button";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <div className={styles.adminLayout}>
      <div className={styles.brandCard}>
        <span className={styles.brandMark}></span>
        <span className={styles.brandText}>Shiko</span>
        <button
          className={styles.collapseButton}
          type="button"
          aria-label="Collapse sidebar"
        ></button>
      </div>

      <header className={styles.header}>
        <label className={styles.search}>
          <span className={styles.searchIcon} aria-hidden="true">
            <img src="/icons/search.svg" alt="" />
          </span>
          <input type="search" placeholder="Search task..." aria-label="Search task" />
        </label>

        <div className={styles.headerActions}>
          <Button className={styles.iconButton} type="button" aria-label="Messages"></Button>

          <Button className={styles.iconButton} type="button" aria-label="Notifications"></Button>

          <div className={styles.userSummary}>
            <img src="/images/avatar.webp" alt="User avatar" className={styles.avatar} />
            <div>
              <p>Hasan Mahmud</p>
              <span>hasan@gmail.com</span>
            </div>
          </div>
        </div>
      </header>

      <aside className={styles.sidebar} aria-label="Admin navigation">
        <nav>
          <p className={styles.navLabel}>Menu</p>
          <ul className={styles.menuList}>
            <MenuListItem icon={<DashboardIcon />} text="Dashboard" href="/admin" isActive />
            <MenuListItem
              icon={<CoursesIcon />}
              text="Courses"
              href="/admin/courses"
              isActive={false}
            />
            <MenuListItem
              icon={<ProfileIcon />}
              text="Users"
              href="/admin/users"
              isActive={false} 
            />
            <MenuListItem
              icon={<RoleAssignmentsIcon />}
              text="Role Assignments"
              href="/admin/role-assignments"
              isActive={false}
            />
          </ul>
        </nav>
      </aside>

      <div className={styles.mainArea}>
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}

