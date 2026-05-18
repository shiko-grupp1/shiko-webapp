"use client";

import { Button } from "../../../components/shared/Button/Button";
import UsersTable from "./components/usersTable/UsersTable";
import styles from "./page.module.css";

export default function Users() {
  return (
    <section className={styles.page}>
      <div className={styles.pageHeader}>
        <div>
          <p className={styles.eyebrow}>Admin / Users</p>
          <h1 className={styles.title}>Users</h1>
        </div>

        <Button href="/admin/users/create" size="medium">
          Create user
        </Button>
      </div>

      <UsersTable />
    </section>
  );
}
