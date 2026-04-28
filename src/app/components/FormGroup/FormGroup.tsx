
import React from "react";
import styles from "./FormGroup.module.css";

type FormGroupProps = {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  hint?: string;
};

const FormGroup: React.FC<FormGroupProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  name,
  onChange,
  icon,
  hint,
}) => {
  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>{label}</label>

      <div className={styles.inputWrapper}>
        {icon && <span className={styles.icon}>{icon}</span>}

        <input
          className={styles.input}
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
        />
      </div>

      {hint && <p className={styles.hint}>{hint}</p>}
    </div>
  );
};

export default FormGroup;