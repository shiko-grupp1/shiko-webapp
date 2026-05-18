"use client";

import { useId, useState } from "react";
import styles from "./Faq.module.css";

type FaqProps = {
  title: string;
  answer: string;
};

export default function Faq({ title, answer }: FaqProps) {
  const [open, setOpen] = useState(false);
  const answerId = useId();

  return (
    <div className={`${styles.faq} ${open ? styles.open : ""}`}>
      <button
        className={styles.question}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={answerId}
      >
        <span className="body-20">{title}</span>
        <span className={`${styles.icon} ${open ? styles.active : ""}`}></span>
      </button>

      {open && (
        <div id={answerId} className={styles.answer}>
          <p className="body-14">{answer}</p>
        </div>
      )}
    </div>
  );
}
