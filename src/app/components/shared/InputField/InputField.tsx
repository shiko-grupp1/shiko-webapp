"use client";
import React from "react";
import styles from "./InputField.module.css";

type InputFieldProps = {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  name: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  hint?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  name,
  id,
  onChange,
  icon,
  hint,
}) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>

      <div className={styles.inputWrapper}>
        {icon && <span className={styles.icon}>{icon}</span>}

        <input
          className={styles.input}
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          id={id}
          onChange={onChange}
        />
      </div>

      {hint && <p className={styles.hint}>{hint}</p>}
    </div>
  );
};

export default InputField;