import React from "react";

export interface StatItem {
  value: string;
  label: string;
  subtext?: string;
}

export interface StatBlockProps {
  value: string;
  label: string;
  subtext?: string;
  className?: string;
  bordered?: boolean;
}

export const StatBlock: React.FC<StatBlockProps> = ({
  value,
  label,
  subtext,
  className = "",
  bordered = true
}) => {
  return (
    <div
      className={`p-6 sm:p-8 flex flex-col justify-center text-center transition-all duration-300 ${
        bordered ? "border border-[#E7DFCD] bg-white hover:border-gold-500/50 shadow-xs hover:shadow-md" : ""
      } ${className}`}
    >
      <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-gold-600 mb-2 tracking-tight">
        {value}
      </div>
      <div className="font-ui text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-forest-950 mb-1">
        {label}
      </div>
      {subtext && (
        <div className="font-ui text-xs text-forest-900/70 font-light mt-1">
          {subtext}
        </div>
      )}
    </div>
  );
};

export interface StatGridProps {
  stats: StatItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export const StatGrid: React.FC<StatGridProps> = ({
  stats,
  columns = 4,
  className = ""
}) => {
  const colClasses = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-3",
    4: "grid-cols-2 lg:grid-cols-4"
  };

  return (
    <div className={`grid gap-4 sm:gap-6 ${colClasses[columns]} ${className}`}>
      {stats.map((stat, idx) => (
        <StatBlock
          key={idx}
          value={stat.value}
          label={stat.label}
          subtext={stat.subtext}
        />
      ))}
    </div>
  );
};
