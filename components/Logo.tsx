"use client";

import Image from "next/image";

interface LogoProps {
  /**
   * "dark"  → white/light version for navy or dark backgrounds (header, footer)
   * "light" → full-colour version for white or light backgrounds
   * "burgundy" → light version on burgundy background
   */
  variant?: "dark" | "light" | "burgundy";
  /** Height in px – width scales automatically */
  height?: number;
  className?: string;
}

export default function Logo({
  variant = "dark",
  height = 72,
  className = "",
}: LogoProps) {
  const src =
    variant === "light"
      ? "/logo-on-white.png"
      : variant === "burgundy"
      ? "/logo-on-burgundy.png"
      : "/logo-on-navy.png";

  return (
    <div className={`relative flex-shrink-0 ${className}`} style={{ height }}>
      <Image
        src={src}
        alt="Friends of the Royals Alumni Association"
        height={height}
        width={height}          // square source images – Next.js will keep aspect ratio
        style={{ height, width: "auto", objectFit: "contain" }}
        priority
        unoptimized
      />
    </div>
  );
}
