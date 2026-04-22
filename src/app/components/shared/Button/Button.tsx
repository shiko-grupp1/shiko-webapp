import styles from "./Button.module.css";

type ButtonProps = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  variant?: "primary" | "secondary" | "neutral";
  size?: "small" | "medium" | "large";
  shape?: "rounded" | "square" | "pill";
  disabled?: boolean;
  onClick?: () => void;
};

// primary = orange, secondary = grå, neutral = mörkare grå. Rektangulär shape är default

export const Button = ({
  children,
  icon,
  iconPosition = "left",
  variant = "primary",
  shape = "rounded",
  size = "medium",
  disabled = false,
  onClick,
}: ButtonProps) => {
  const className = [styles.button, styles[`button_${variant}`], styles[`button_${size}`], shape ? styles[`button_${shape}`] : "",]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </button>
  );
};
