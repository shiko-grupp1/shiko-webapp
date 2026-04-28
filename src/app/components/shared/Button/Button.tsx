import React from "react";
import styles from "./Button.module.css";
type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "button",
}) => {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;