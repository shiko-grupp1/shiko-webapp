"use client";

import { useState } from "react";
import styles from "./Faq.module.css";

type FaqProps = {
  title: string;
  answer: string;
};

export default function Faq({ title, answer }: FaqProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.faq}>
      <button className={styles.question} onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{title}</span>
        <span className={styles.icon}>{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className={styles.answer}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
