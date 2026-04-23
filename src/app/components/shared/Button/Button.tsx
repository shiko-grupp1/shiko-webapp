import styles from "./Button.module.css";
import Link from "next/link";

type ButtonProps = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  variant?: "primary" | "secondary" | "neutral";
  size?: "small" | "medium" | "large";
  shape?: "square" | "pill" | "circle";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  // if you send an href, the button will be rendered as a link
  href?: string;
  // for how the link should be opened, e.g _self, _blank, _parent, _top
  target?: string;
  rel?: string;
  className?: string;
};

// primary = orange, secondary = grey, neutral = darker grey. The rectangular shape is default.

export const Button = ({
  children,
  icon,
  iconPosition = "left",
  variant = "primary",
  shape,
  type = "button",
  size = "medium",
  disabled = false,
  onClick,
  href,
  target,
  rel = target === "_blank" ? "noopener noreferrer" : undefined,
  // possibility for custom styling of link or button
  className: customClassName,
}: ButtonProps) => {
  const className = [
    styles.button,
    styles[`button-${variant}`],
    styles[`button-${size}`],
    shape ? styles[`button-${shape}`] : "",
    customClassName || "",
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </>
  );

  const isLink = href ? true : false;
  const isExternalLink = href?.startsWith("http") === true;

  if (!isLink) {
    return (
      <button type={type} className={className} disabled={disabled} onClick={onClick}>
        {content}
      </button>
    );
  }
  // EXTERNAL LINK renders as <a>
  if (isExternalLink) {
    return (
      <a
        href={href}
        className={className}
        target={target}
        rel={rel}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
      >
        {content}
      </a>
    );
  }
  // INTERNAL LINK renders as <Link> 
  return (
    <Link href={href!} className={className}>
      {content}
    </Link>
  );
};
