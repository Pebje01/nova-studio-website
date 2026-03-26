"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, navLinks } from "@/lib/content";

function LotusIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 21c-1.5-1.5-6-6.5-6-11C6 5.5 8.7 3 12 3s6 2.5 6 7c0 4.5-4.5 9.5-6 11z"
        fill="currentColor"
        opacity="0.3"
      />
      <path
        d="M12 21c-3-2-8-7-8-12 0-3 2-6 5-6s3 1.5 3 3c0-1.5 0-3 3-3s5 3 5 6c0 5-5 10-8 12z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M12 13c-2-1-4-3-4-6M12 13c2-1 4-3 4-6" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[16px] lg:px-[68px]"
      style={{ height: 64 }}
    >
      {/* Background pill — slim */}
      <div
        className={`absolute inset-x-[48px] lg:inset-x-[52px] top-[10px] transition-all duration-300 ${
          scrolled
            ? "bg-white/90 shadow-sm backdrop-blur-md"
            : "bg-white/20 backdrop-blur-sm"
        }`}
        style={{ height: 44, borderRadius: 100 }}
      />

      {/* Logo */}
      <Link
        href="/"
        className="relative z-10 flex items-center gap-2"
      >
        <div
          className={`flex h-[36px] w-[36px] items-center justify-center rounded-full transition-colors duration-300 ${
            scrolled ? "bg-cream" : "bg-white/30"
          }`}
        >
          <LotusIcon
            className={`transition-colors duration-300 ${
              scrolled ? "text-brown-dark" : "text-white"
            }`}
          />
        </div>
        <span
          className={`font-semibold transition-colors duration-300 ${
            scrolled ? "text-brown-dark" : "text-white"
          }`}
          style={{ fontSize: 13, letterSpacing: "0.3px", textTransform: "uppercase" }}
        >
          {siteConfig.name}
        </span>
      </Link>

      {/* Desktop nav links */}
      <div className="relative z-10 hidden items-center gap-8 lg:flex">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`font-medium transition-colors duration-300 ${
              scrolled
                ? "text-brown-dark hover:text-sage-dark"
                : "text-white/80 hover:text-white"
            }`}
            style={{ fontSize: 13 }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#contact"
          className={`font-medium transition-all duration-300 ${
            scrolled
              ? "bg-brown-dark text-white hover:bg-brown-medium"
              : "bg-white text-brown-dark hover:bg-cream"
          }`}
          style={{
            fontSize: 12,
            padding: "8px 20px 8px 20px",
            borderRadius: "0 20px 20px 0",
            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4,
            letterSpacing: "0.5px",
            textTransform: "uppercase",
          }}
        >
          Contact
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="relative z-10 flex h-8 w-8 flex-col items-center justify-center gap-1 lg:hidden"
      >
        <span
          className={`h-0.5 w-5 transition-all duration-300 ${
            mobileOpen
              ? `rotate-45 translate-y-1.5 ${scrolled ? "bg-brown-dark" : "bg-white"}`
              : scrolled
              ? "bg-brown-dark"
              : "bg-white"
          }`}
        />
        <span
          className={`h-0.5 w-5 transition-all duration-300 ${
            mobileOpen ? "opacity-0" : scrolled ? "bg-brown-dark" : "bg-white"
          }`}
        />
        <span
          className={`h-0.5 w-5 transition-all duration-300 ${
            mobileOpen
              ? `-rotate-45 -translate-y-1.5 ${scrolled ? "bg-brown-dark" : "bg-white"}`
              : scrolled
              ? "bg-brown-dark"
              : "bg-white"
          }`}
        />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[60px] left-4 right-4 z-50 rounded-2xl bg-white p-5 shadow-xl lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-brown-dark"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 bg-brown-dark px-5 py-2 text-center text-xs font-medium uppercase tracking-wide text-white"
                style={{ borderRadius: "0 16px 16px 0", borderTopLeftRadius: 4, borderBottomLeftRadius: 4 }}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
