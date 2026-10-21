import React from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "terracotta" | "text";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  icon,
  iconPosition = "left",
  fullWidth = false,
  className = "",
  children,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-ui font-medium transition-all duration-300 rounded-none cursor-pointer tracking-wider text-center uppercase select-none";

  const sizeClasses = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5 min-h-[36px]",
    md: "text-xs sm:text-sm px-5 py-2.5 gap-2 min-h-[44px]",
    lg: "text-sm sm:text-base px-7 py-3.5 gap-2.5 min-h-[52px]"
  };

  const variantClasses = {
    primary:
      "bg-forest-950 text-white hover:bg-forest-900 active:bg-forest-950 shadow-xs border border-forest-950 hover:shadow-md transition-all duration-300",
    secondary:
      "bg-white text-forest-950 hover:bg-[#FAF8F5] active:bg-[#F5F1E8] border border-[#E7DFCD] hover:border-gold-500/60 shadow-xs transition-all duration-300",
    outline:
      "bg-transparent text-forest-950 hover:bg-forest-950 hover:text-white border border-forest-950/80 active:bg-forest-900 transition-all duration-300",
    terracotta:
      "bg-terracotta-500 text-white hover:bg-terracotta-600 active:bg-terracotta-700 border border-terracotta-500 shadow-xs transition-all duration-300",
    text:
      "bg-transparent text-forest-950 hover:text-gold-600 underline underline-offset-8 decoration-gold-500/50 hover:decoration-gold-600 px-0 py-1 border-none min-h-0 transition-colors"
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";
  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
