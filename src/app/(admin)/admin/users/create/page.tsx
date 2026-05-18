"use client";

import { Button } from "../../../../components/shared/Button/Button";
import UserForm from "../components/userForm/UserForm";
import styles from "./page.module.css";

export default function CreateUserPage() {
  return (
    <section className={styles.page}>
      <div className={styles.pageHeader}>
        <div>
          <p className={styles.eyebrow}>Admin / Users / Create</p>
          <h1 className={styles.title}>Create user</h1>
        </div>

        <Button href="/admin/users" variant="secondary" size="medium">
          Back to users
        </Button>
      </div>

      <UserForm />
    </section>
  );
}
