import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "narrow" | "default" | "wide" | "full";
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  size = "default",
  className = "",
  children,
  ...props
}) => {
  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
    full: "max-w-full"
  };

  return (
    <div
      className={`mx-auto px-4 sm:px-6 lg:px-8 w-full ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "white" | "warm" | "stone" | "cream" | "dark" | "pine" | "muted" | "earthen";
  spacing?: "sm" | "md" | "lg" | "xl";
  className?: string;
  id?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  variant = "white",
  spacing = "lg",
  className = "",
  id,
  children,
  ...props
}) => {
  const variantClasses = {
    white: "bg-white text-forest-950",
    warm: "bg-[#FAF8F5] text-forest-950",
    stone: "bg-[#F5F1E8] text-forest-950",
    cream: "bg-[#EFEBE2] text-forest-950",
    dark: "bg-white text-forest-950", // converted to white for sophisticated light luxury
    pine: "bg-[#14281E] text-parchment-100",
    muted: "bg-[#FAF8F5] text-forest-950",
    earthen: "bg-[#F5F1E8] text-forest-950"
  };

  const spacingClasses = {
    sm: "py-10 sm:py-12",
    md: "py-14 sm:py-20",
    lg: "py-20 sm:py-28",
    xl: "py-24 sm:py-36"
  };

  return (
    <section
      id={id}
      className={`relative w-full ${variantClasses[variant]} ${spacingClasses[spacing]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export interface DividerProps {
  className?: string;
  gold?: boolean;
}

export const Divider: React.FC<DividerProps> = ({ className = "", gold = false }) => {
  return (
    <div
      className={`w-full h-px ${
        gold ? "bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" : "bg-[#E7DFCD]"
      } ${className}`}
    />
  );
};
