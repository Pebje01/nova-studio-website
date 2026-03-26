"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { navLinks } from "@/lib/content";

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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between pl-[14px] pr-[18px] lg:pl-[36px] lg:pr-[68px]"
      style={{ height: 92 }}
    >
      {/* Background pill */}
      <div
        className={`absolute inset-x-[12px] lg:inset-x-[16px] top-[8px] bottom-[8px] transition-all duration-300 ${
          scrolled
            ? "bg-white/90 shadow-sm backdrop-blur-md"
            : "bg-white/20 backdrop-blur-sm"
        }`}
        style={{ borderRadius: 100 }}
      />

      {/* Logo */}
      <Link
        href="/"
        className="relative z-10"
        style={{ marginLeft: 20 }}
      >
        <Image
          src={scrolled ? "/logo-dark.svg" : "/logo-white.svg"}
          alt="Nova Studio"
          width={120}
          height={48}
          className="transition-opacity duration-300"
          style={{ height: 120, width: "auto" }}
          priority
        />
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
          className="group font-medium text-white transition-all duration-300 bg-brown-dark hover:bg-sage hover:text-white"
          style={{
            fontSize: 12,
            padding: "10px 24px",
            borderRadius: 50,
            letterSpacing: "0.3px",
          }}
        >
          <span className="flex items-center gap-2">
            Boek een proefles
            <motion.span
              className="inline-flex text-[14px] leading-none transition-transform duration-300 group-hover:-rotate-45"
            >
              →
            </motion.span>
          </span>
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
            className="absolute top-[76px] left-4 right-4 z-50 rounded-2xl bg-white p-5 shadow-xl lg:hidden"
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
                className="mt-2 bg-sage px-5 py-2 text-center text-xs font-medium text-white"
                style={{ borderRadius: 50 }}
              >
                Boek een proefles
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
