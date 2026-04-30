"use client";

import Image from "next/image";

import styles from "./layout.module.css";
import { Button } from "../components/shared/Button/Button";
import LetterIcon from "../components/icons/LetterIcon";
import BellIcon from "../components/icons/BellIcon";

export default function AdminHeader() {
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
  );
}
