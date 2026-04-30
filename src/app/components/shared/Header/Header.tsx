"use client";

import Image from "next/image";

import styles from "./Header.module.css";
import { Button } from "../Button/Button";
import LetterIcon from "../../icons/LetterIcon";
import BellIcon from "../../icons/BellIcon";

type HeaderIconButtonProps = {
  icon: React.ReactNode;
  label: string;
  hasUnread?: boolean;
  iconClassName?: string;
};

function HeaderIconButton({ icon, label, hasUnread = false, iconClassName }: HeaderIconButtonProps) {
  const iconContent = hasUnread ? (
    <span className={`${styles.iconWithDot} ${iconClassName || ""}`}>
      {icon}
      <span className={styles.notificationDot} aria-hidden="true" />
    </span>
  ) : (
    icon
  );

  return (
    <span className={styles.iconButtonWrapper}>
      <Button
        type="button"
        shape="circle"
        variant="neutral"
        icon={iconContent}
        className={styles.iconButton}
        aria-label={label}
      />
    </span>
  );
}

export default function Header() {
  return (
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
        <HeaderIconButton icon={<LetterIcon />} label="Messages" />

        <HeaderIconButton
          icon={<BellIcon />}
          label="Notifications"
          hasUnread
          iconClassName={styles.bellIcon}
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
  );
}
