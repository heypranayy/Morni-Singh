import React from "react";

export interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  theme?: "light" | "dark";
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  size = "md",
  showText = true,
  theme = "light",
}) => {
  const sizeMap = {
    sm: "h-10",
    md: "h-14",
    lg: "h-20",
    xl: "h-28",
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 320 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeMap[size]} w-auto object-contain shrink-0 drop-shadow-xs`}
        aria-label="Morni Singh's Logo"
      >
        {/* Semicircle Arch Background with Orange Fill */}
        <path
          d="M 60 130 A 100 100 0 0 1 260 130 Z"
          fill="#EA580C"
          stroke="#14281E"
          strokeWidth="3"
        />

        {/* Cottage Silhouette in Deep Forest Pine */}
        <rect x="115" y="80" width="90" height="50" rx="3" fill="#14281E" />
        {/* Chimney */}
        <rect x="120" y="55" width="16" height="30" fill="#14281E" />
        {/* House Roof Triangle */}
        <path
          d="M 100 85 L 160 38 L 220 85 Z"
          fill="#1C382A"
          stroke="#FAF8F5"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Cottage Door */}
        <path
          d="M 148 130 V 105 H 172 V 130 Z"
          fill="#FAF8F5"
        />

        {/* Three Organic Green Leaves Sprouting from the Roof */}
        {/* Left leaf */}
        <path
          d="M 190 60 C 180 35 205 20 220 30 C 225 45 205 65 190 60 Z"
          fill="#22C55E"
          stroke="#FAF8F5"
          strokeWidth="2.5"
        />
        <path d="M 192 58 Q 205 45 218 32" stroke="#FAF8F5" strokeWidth="1.5" />
        
        {/* Center top leaf */}
        <path
          d="M 210 75 C 205 50 235 35 250 48 C 255 65 230 85 210 75 Z"
          fill="#16A34A"
          stroke="#FAF8F5"
          strokeWidth="2.5"
        />
        <path d="M 212 73 Q 230 60 248 50" stroke="#FAF8F5" strokeWidth="1.5" />

        {/* Lower leaf */}
        <path
          d="M 205 95 C 205 75 235 70 248 85 C 248 100 225 110 205 95 Z"
          fill="#4ADE80"
          stroke="#FAF8F5"
          strokeWidth="2.5"
        />
        <path d="M 207 93 Q 225 88 245 86" stroke="#FAF8F5" strokeWidth="1.5" />

        {/* Horizontal Orange Plaque Banner */}
        <rect
          x="15"
          y="120"
          width="290"
          height="45"
          rx="6"
          fill="#C2410C"
          stroke="#14281E"
          strokeWidth="2.5"
        />

        {/* White Brand Text: MORNI SINGH'S */}
        <text
          x="160"
          y="152"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
          fontWeight="900"
          fontSize="25"
          letterSpacing="1.8"
        >
          MORNI SINGH’S
        </text>

        {/* Bottom Subtitle: AT MORNI HILLS with decorative side rules */}
        <line x1="25" y1="184" x2="80" y2="184" stroke={theme === "dark" ? "#E5B869" : "#14281E"} strokeWidth="2" strokeLinecap="round" />
        <text
          x="160"
          y="189"
          textAnchor="middle"
          fill={theme === "dark" ? "#FAF8F5" : "#14281E"}
          fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
          fontWeight="800"
          fontSize="14"
          letterSpacing="4"
        >
          AT MORNI HILLS
        </text>
        <line x1="240" y1="184" x2="295" y2="184" stroke={theme === "dark" ? "#E5B869" : "#14281E"} strokeWidth="2" strokeLinecap="round" />
      </svg>

      {showText && (
        <div className="flex flex-col text-left whitespace-nowrap text-nowrap shrink-0">
          <span
            className={`font-serif text-lg sm:text-xl font-medium tracking-wide leading-tight whitespace-nowrap text-nowrap ${
              theme === "dark" ? "text-white" : "text-forest-950"
            }`}
          >
            MORNI SINGH’S
          </span>
          <span
            className={`text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-ui font-medium whitespace-nowrap text-nowrap ${
              theme === "dark" ? "text-gold-400" : "text-gold-600"
            }`}
          >
            Morni Hills · 1,220m
          </span>
        </div>
      )}
    </div>
  );
};
