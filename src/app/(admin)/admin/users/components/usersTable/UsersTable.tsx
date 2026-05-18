"use client";

import { Button } from "../../../../../components/shared/Button/Button";
import styles from "./UsersTable.module.css";

const mockUsers = [
  {
    id: "1",
    name: "Hasan Mahmud",
    email: "hasan@gmail.com",
    role: "Student",
  },
];

export default function UsersTable() {
  return (
    <div className={styles.listCard}>
      <div className={styles.listHeader}>
        <h3>All users</h3>
      </div>

      <div className={styles.tableHeader}>
        <div className={styles.nameCell}>
          <span>Name</span>
        </div>
        <div className={styles.emailCell}>
          <span>Email</span>
        </div>
        <div className={styles.roleCell}>
          <span>Role</span>
        </div>
        <div className={styles.actionsHeader}>
          <span>Actions</span>
        </div>
      </div>

      <div className={styles.rowList}>
        {mockUsers.map((user) => (
          <div key={user.id} className={styles.userRow}>
            <div className={styles.nameCell}>
              <span className={styles.cellTextStrong}>{user.name}</span>
            </div>

            <div className={styles.emailCell}>
              <span className={styles.cellText}>{user.email}</span>
            </div>

            <div className={styles.roleCell}>
              <span className={styles.roleBadge}>{user.role}</span>
            </div>

            <div className={styles.actionsCell}>
              <Button type="button" variant="secondary" size="small" className={styles.updateButton}>
                Update
              </Button>
              <Button type="button" size="small" className={styles.deleteButton}>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
