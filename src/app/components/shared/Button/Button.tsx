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

/// primary = orange, secondary = grå, neutral = mörkare grå. Rektangulär shape är default

export const Button = ({
  children,
  icon,
  iconPosition = "left",
  variant = "primary",
  shape,
  size = "medium",
  disabled = false,
  onClick,
}: ButtonProps) => {
    const className = `button button--${variant} button--${size} ${shape ? ` button--${shape}` : ""}`;

  return <button className={className} disabled={disabled} onClick={onClick} >
    {icon && iconPosition === "left" && icon}
    {children}
    {icon && iconPosition === "right" && icon}
    </button>
};


