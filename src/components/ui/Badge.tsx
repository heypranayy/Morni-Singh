import React from "react";

export interface BadgeProps {
  variant?: "gold" | "pine" | "terracotta" | "muted";
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "gold",
  icon,
  children,
  className = ""
}) => {
  const variantStyles = {
    gold: "bg-gold-500/10 text-gold-700 border-gold-500/30",
    pine: "bg-forest-950/10 text-forest-950 border-forest-950/25",
    terracotta: "bg-terracotta-500/10 text-terracotta-600 border-terracotta-500/30",
    muted: "bg-[#FAF8F5] text-forest-900 border-[#E7DFCD]"
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-ui uppercase tracking-widest border rounded-none ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

export interface OverlineBadgeProps {
  children: React.ReactNode;
  dotColor?: "gold" | "terracotta" | "green";
  className?: string;
}

export const OverlineBadge: React.FC<OverlineBadgeProps> = ({
  children,
  dotColor = "gold",
  className = ""
}) => {
  const dotClasses = {
    gold: "bg-gold-500",
    terracotta: "bg-terracotta-500",
    green: "bg-emerald-600"
  };

  return (
    <div className={`inline-flex items-center gap-2 text-xs font-ui tracking-[0.2em] uppercase text-gold-600 font-semibold ${className}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dotClasses[dotColor]} animate-pulse`} />
      <span>{children}</span>
    </div>
  );
};
