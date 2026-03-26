"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

type Variant = "light" | "outline" | "sage";

interface ArrowButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: Variant;
  className?: string;
  fullWidth?: boolean;
  style?: React.CSSProperties;
}

const variantStyles: Record<Variant, string> = {
  light: "bg-white text-brown-dark border border-transparent hover:bg-cream",
  outline: "bg-transparent text-brown-dark border border-gray-border hover:bg-cream hover:border-cream",
  sage: "bg-sage text-white border border-transparent hover:bg-sage-dark",
};

function ButtonInner({ children, hovered }: { children: React.ReactNode; hovered: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span>{children}</span>
      {/* Arrow clips vertically — exits top, enters from bottom */}
      <span className="relative inline-flex h-[14px] w-[14px] overflow-hidden">
        <motion.span
          className="absolute inset-0 flex items-center justify-center text-[13px] leading-none"
          animate={{ y: hovered ? -14 : 0, opacity: hovered ? 0 : 1 }}
          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          →
        </motion.span>
        <motion.span
          className="absolute inset-0 flex items-center justify-center text-[13px] leading-none"
          animate={{ y: hovered ? 0 : 14, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          →
        </motion.span>
      </span>
    </span>
  );
}

const sharedStyle: React.CSSProperties = {
  fontSize: 18,
  borderRadius: 80,
  fontWeight: 500,
  padding: "26px 40px 22px",
};

export default function ArrowButton({
  children,
  href,
  onClick,
  type = "button",
  variant = "light",
  className = "",
  fullWidth = false,
  style: styleProp,
}: ArrowButtonProps) {
  const mergedStyle = styleProp ? { ...sharedStyle, ...styleProp } : sharedStyle;
  const [hovered, setHovered] = useState(false);
  const classes = `inline-flex items-center font-medium transition-colors duration-300 cursor-pointer ${variantStyles[variant]} ${fullWidth ? "w-full justify-center" : ""} ${className}`;

  if (href) {
    return (
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className="inline-block"
        style={fullWidth ? { width: "100%" } : {}}
      >
        <Link href={href} className={classes} style={mergedStyle}>
          <ButtonInner hovered={hovered}>{children}</ButtonInner>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      className={classes}
      style={mergedStyle}
    >
      <ButtonInner hovered={hovered}>{children}</ButtonInner>
    </motion.button>
  );
}
