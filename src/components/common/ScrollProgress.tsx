import React, { useState, useEffect } from "react";

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const scrolled = (window.scrollY / scrollHeight) * 100;
        setProgress(Math.min(100, Math.max(0, scrolled)));
      }
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 w-full h-[2.5px] z-[60] bg-transparent pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-gold-600 via-gold-500 to-amber-400 transition-all duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
