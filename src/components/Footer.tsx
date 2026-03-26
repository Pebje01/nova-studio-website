"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig, footerContent } from "@/lib/content";

function LotusIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brown-dark py-[80px] lg:py-[100px]">
      <div className="mx-auto max-w-[1440px] px-[30px] lg:px-[68px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12 lg:justify-between">
          {/* Logo + description */}
          <div className="max-w-[340px]">
            <Image
              src="/logo-white.svg"
              alt="Nova Studio"
              width={120}
              height={48}
              style={{ height: 100, width: "auto" }}
            />
            <p
              className="mt-6 text-white/60"
              style={{ fontSize: 14, lineHeight: "22px" }}
            >
              {footerContent.description}
            </p>
          </div>

          {/* Menu links */}
          <div>
            <p
              className="text-white/40"
              style={{ fontSize: 13, fontWeight: 500 }}
            >
              Menu
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {footerContent.menuLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/80 transition-colors hover:text-white"
                  style={{ fontSize: 15 }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-start gap-3">
            {/* LinkedIn */}
            <a
              href="#"
              className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* X (Twitter) */}
            <a
              href="#"
              className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="#"
              className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <svg width="10" height="18" viewBox="0 0 10 18" fill="currentColor">
                <path d="M6.39 18V9.79h2.67l.4-3.27H6.39V4.5c0-.95.25-1.59 1.54-1.59h1.65V.13C9.24.09 8.24 0 7.08 0c-2.42 0-4.08 1.56-4.08 4.43v2.08H.32v3.27H3V18h3.39z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col gap-4 lg:flex-row lg:justify-between">
          <p className="text-white/40" style={{ fontSize: 13 }}>
            {footerContent.copyright}
          </p>
          <p className="text-white/40" style={{ fontSize: 13 }}>
            Designed by{" "}
            <a
              href="https://wegrowbrands.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition-colors hover:text-white"
            >
              We Grow Brands
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
