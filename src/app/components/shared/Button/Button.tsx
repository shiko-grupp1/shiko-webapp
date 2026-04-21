type ButtonProps = {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "icon";
  size?: "small" | "medium" | "large";
  disabled: boolean;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
}: ButtonProps);
