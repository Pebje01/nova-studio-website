"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

type Variant = "light" | "outline" | "sage" | "dark";

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

const variantBase: Record<Variant, string> = {
  light: "text-brown-dark border border-transparent",
  outline: "text-brown-dark border border-gray-border",
  sage: "text-white border border-transparent",
  dark: "text-white border border-transparent",
};

function ButtonInner({ children, hovered }: { children: React.ReactNode; hovered: boolean }) {
  return (
    <span className="relative z-10 flex items-center gap-2.5">
      <span>{children}</span>
      <motion.span
        className="inline-flex text-[16px] leading-none"
        animate={{ rotate: hovered ? -45 : 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        →
      </motion.span>
    </span>
  );
}

const sharedStyle: React.CSSProperties = {
  fontSize: 14,
  borderRadius: 50,
  fontWeight: 500,
  padding: "12px 28px",
  letterSpacing: "0.3px",
};

const variantHoverBg: Record<Variant, string> = {
  light: "#a3b096",
  outline: "#a3b096",
  sage: "#ffffff",
  dark: "#a3b096",
};

const variantDefaultBg: Record<Variant, string> = {
  light: "#ffffff",
  outline: "transparent",
  sage: "#a3b096",
  dark: "#221e20",
};

const variantHoverText: Record<Variant, string | undefined> = {
  light: "#221e20",
  outline: "#221e20",
  sage: "#221e20",
  dark: "#ffffff",
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
  const baseClasses = `inline-flex items-center font-medium cursor-pointer transition-colors duration-300 ${variantBase[variant]} ${fullWidth ? "w-full justify-center" : ""} ${className}`;

  const buttonStyle: React.CSSProperties = {
    ...mergedStyle,
    backgroundColor: hovered ? variantHoverBg[variant] : variantDefaultBg[variant],
    color: hovered && variantHoverText[variant] ? variantHoverText[variant] : undefined,
  };

  const inner = <ButtonInner hovered={hovered}>{children}</ButtonInner>;

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
        <Link href={href} className={baseClasses} style={buttonStyle}>
          {inner}
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
      className={baseClasses}
      style={buttonStyle}
    >
      {inner}
    </motion.button>
  );
}
