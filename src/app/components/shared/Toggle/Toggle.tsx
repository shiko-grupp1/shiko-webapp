"use client";

import { useId } from "react";
import styles from "./Toggle.module.css";

type ToggleProps = {
  checked: boolean;
  onChange: (value: boolean) => void;
  label: string;
  disabled?: boolean;
};

export default function Toggle({ checked, onChange, label, disabled = false }: ToggleProps) {
  const labelId = useId();
  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-labelledby={labelId}
        disabled={disabled}
        className={`${styles.toggle} ${checked ? styles.on : ""} ${disabled ? styles.disabled : ""}`}
        onClick={() => {
          if (!disabled) onChange(!checked);
        }}
      >
        <div className={styles.circle}></div>
      </button>

      <label id={labelId} className={styles.label}>
        {label}
      </label>
    </div>
  );
}
