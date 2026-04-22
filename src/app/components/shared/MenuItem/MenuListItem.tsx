import Link from "next/link";
import styles from "./MenuListItem.module.css";

type MenuItem = {
  icon: React.ReactNode;
  text: string;
  href: string;
  isActive: boolean;
  notifications?: number;
};
type MenuItemProps = {
  menuItem: MenuItem;
};

export default function MenuListItem({ menuItem }: MenuItemProps) {
  const itemClassName = `${styles["menu-item"]} ${menuItem.isActive ? styles["active"] : ""}`;
  return (
    <li className={itemClassName}>
      <Link href={menuItem.href}>
        <div className={styles["left-column"]}>
          <span className={styles["menu-icon"]}>{menuItem.icon}</span>{" "}
          <span className={styles["menu-text"]}>{menuItem.text}</span>
        </div>
        {menuItem.notifications ? (
          <div className={styles.notification}>
            <span>{menuItem.notifications}</span>
          </div>
        ) : null}
      </Link>
    </li>
  );
}
