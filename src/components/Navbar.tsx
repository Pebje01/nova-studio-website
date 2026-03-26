"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, navLinks } from "@/lib/content";

function LotusIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[20px] lg:px-[96px]"
      style={{ height: 100 }}
    >
      {/* Background pill */}
      <div
        className={`absolute inset-x-[68px] top-[14px] bottom-[0px] transition-all duration-300 ${
          scrolled
            ? "bg-white/90 shadow-md backdrop-blur-md"
            : "bg-white/30 backdrop-blur-sm"
        }`}
        style={{ height: 89, borderRadius: 100 }}
      />

      {/* Logo */}
      <Link
        href="/"
        className="relative z-10 flex items-center gap-3"
      >
        <div
          className={`flex h-[52px] w-[52px] items-center justify-center rounded-full transition-colors duration-300 ${
            scrolled ? "bg-cream" : "bg-white/40"
          }`}
        >
          <LotusIcon
            className={`transition-colors duration-300 ${
              scrolled ? "text-brown-dark" : "text-white"
            }`}
          />
        </div>
        <span
          className={`text-base font-semibold transition-colors duration-300 ${
            scrolled ? "text-brown-dark" : "text-white"
          }`}
          style={{ fontSize: 16, letterSpacing: "-0.2px" }}
        >
          {siteConfig.name}
        </span>
      </Link>

      {/* Desktop nav links */}
      <div className="relative z-10 hidden items-center gap-12 lg:flex">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`text-sm font-medium transition-colors duration-300 ${
              scrolled
                ? "text-brown-dark hover:text-sage-dark"
                : "text-white/90 hover:text-white"
            }`}
            style={{ fontSize: 18 }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#contact"
          className={`border px-6 py-3 text-sm font-medium transition-all duration-300 ${
            scrolled
              ? "border-brown-dark bg-transparent text-brown-dark hover:bg-brown-dark hover:text-white"
              : "border-white bg-white text-brown-dark hover:bg-transparent hover:text-white"
          }`}
          style={{ fontSize: 16, borderRadius: 80, padding: "16px 36px 14px" }}
        >
          Contact
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
      >
        <span
          className={`h-0.5 w-6 transition-all duration-300 ${
            mobileOpen
              ? `rotate-45 translate-y-2 ${scrolled ? "bg-brown-dark" : "bg-white"}`
              : scrolled
              ? "bg-brown-dark"
              : "bg-white"
          }`}
        />
        <span
          className={`h-0.5 w-6 transition-all duration-300 ${
            mobileOpen ? "opacity-0" : scrolled ? "bg-brown-dark" : "bg-white"
          }`}
        />
        <span
          className={`h-0.5 w-6 transition-all duration-300 ${
            mobileOpen
              ? `-rotate-45 -translate-y-2 ${scrolled ? "bg-brown-dark" : "bg-white"}`
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
            className="absolute top-[80px] left-4 right-4 z-50 rounded-2xl bg-white p-6 shadow-xl lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-brown-dark"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-brown-dark px-6 py-3 text-center text-sm font-medium text-white"
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
