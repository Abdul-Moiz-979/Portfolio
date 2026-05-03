import Link from "next/link";

/**
 * Button Component
 * Reusable button with variants: primary, outline, ghost.
 * Renders as <Link> when href is provided, otherwise as <button>.
 */
export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  id,
  ...props
}) {
  // Base styles shared by all variants
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 cursor-pointer";

  // Size variants
  const sizeStyles = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2",
  };

  // Visual variants
  const variantStyles = {
    primary:
      "bg-accent-primary text-white hover:bg-accent-primary/90 hover:shadow-lg hover:shadow-accent-glow hover:scale-[1.02] active:scale-[0.98]",
    outline:
      "border border-border-hover text-text-primary hover:border-accent-primary hover:text-accent-primary hover:bg-accent-primary/5 hover:scale-[1.02] active:scale-[0.98]",
    ghost:
      "text-text-secondary hover:text-text-primary hover:bg-white/5 active:scale-[0.98]",
  };

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  // Render as anchor for hash links, Link for route paths
  if (href) {
    if (href.startsWith("#")) {
      return (
        <a href={href} id={id} className={combinedClassName} {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} id={id} className={combinedClassName} {...props}>
        {children}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button onClick={onClick} id={id} className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
