"use client";

import styles from "./Toggle.module.scss";

type ToggleProps = {
  checked: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
};

export default function Toggle({ checked, onChange, disabled = false }: ToggleProps) {
  return (
    <button
      type="button"
      className={`${styles.toggle} ${checked ? styles.on : ""} ${disabled ? styles.disabled : ""}`}
      onClick={() => {
        if (!disabled) onChange(!checked);
      }}
    >
      <div className={styles.circle}></div>
    </button>
  );
}
