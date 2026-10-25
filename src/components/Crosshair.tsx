import React from "react";

interface CrosshairProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "all-corners";
  className?: string;
}

export default function Crosshair({ position = "all-corners", className = "" }: CrosshairProps) {
  if (position === "all-corners") {
    return (
      <>
        <span
          className={`absolute -top-[5px] -left-[5px] text-neutral-600 font-mono text-[11px] leading-none select-none pointer-events-none z-10 ${className}`}
          aria-hidden="true"
        >
          +
        </span>
        <span
          className={`absolute -top-[5px] -right-[5px] text-neutral-600 font-mono text-[11px] leading-none select-none pointer-events-none z-10 ${className}`}
          aria-hidden="true"
        >
          +
        </span>
        <span
          className={`absolute -bottom-[5px] -left-[5px] text-neutral-600 font-mono text-[11px] leading-none select-none pointer-events-none z-10 ${className}`}
          aria-hidden="true"
        >
          +
        </span>
        <span
          className={`absolute -bottom-[5px] -right-[5px] text-neutral-600 font-mono text-[11px] leading-none select-none pointer-events-none z-10 ${className}`}
          aria-hidden="true"
        >
          +
        </span>
      </>
    );
  }

  const positionClasses = {
    "top-left": "-top-[5px] -left-[5px]",
    "top-right": "-top-[5px] -right-[5px]",
    "bottom-left": "-bottom-[5px] -left-[5px]",
    "bottom-right": "-bottom-[5px] -right-[5px]",
  }[position];

  return (
    <span
      className={`absolute ${positionClasses} text-neutral-600 font-mono text-[11px] leading-none select-none pointer-events-none z-10 ${className}`}
      aria-hidden="true"
    >
      +
    </span>
  );
}
