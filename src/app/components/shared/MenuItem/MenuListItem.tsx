import Link from "next/link";
import styles from "./MenuListItem.module.css";

type MenuItemProps = {
  icon: React.ReactNode;
  text: string;
  href: string;
  isActive: boolean;
  notifications?: number;
};

export default function MenuListItem({ icon, text, href, isActive, notifications }: MenuItemProps) {
  const itemClassName = `${styles["menu-item"]} ${isActive ? styles["active"] : ""}`;
  return (
    <li className={styles["menu-list-item"]}>
      <Link className={itemClassName} href={href}>
        <div className={styles["left-column"]}>
          <span className={styles["menu-icon"]}>{icon}</span>{" "}
          <span className={`${styles["menu-text"]} body-20`}>{text}</span>
        </div>
        {notifications ? (
          <div className={styles.notification}>
            <span>{notifications}</span>
          </div>
        ) : null}
      </Link>
    </li>
  );
}
