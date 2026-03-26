"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { heroContent } from "@/lib/content";

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden" style={{ paddingTop: "120px" }}>
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src={heroContent.heroImage}
          alt="Yoga class"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-[30px] lg:px-[68px]">
        <div className="flex items-center justify-between">
          <div className="max-w-[720px]">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] }}
              className="font-serif font-normal text-white"
              style={{
                fontSize: "clamp(48px, 5.8vw, 80px)",
                lineHeight: 1.0,
                letterSpacing: "-2.4px",
              }}
            >
              {heroContent.headingStart}{" "}
              <em className="italic">{heroContent.headingAccent}</em>{" "}
              {heroContent.headingMiddle}{" "}
              <em className="italic">{heroContent.headingAccent2}</em>{" "}
              {heroContent.headingEnd}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0, 1] }}
              className="mt-6 max-w-[514px] font-sans text-white/80"
              style={{ fontSize: 18, lineHeight: "25.2px" }}
            >
              {heroContent.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0, 1] }}
              className="mt-10"
            >
              <Link
                href="#memberships"
                className="inline-flex items-center bg-white font-medium text-brown-dark transition-all duration-300 hover:bg-cream"
                style={{ fontSize: 14, borderRadius: 50, fontWeight: 500, padding: "12px 28px", letterSpacing: "0.3px" }}
              >
                {heroContent.ctaLabel}
              </Link>
            </motion.div>
          </div>

          {/* Circle image on right with scale animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileInView={{ scale: [0.95, 1] }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0, 1] }}
            className="relative hidden lg:block"
            style={{ width: "clamp(260px, 24vw, 380px)", height: "clamp(360px, 32vw, 520px)", borderRadius: "160px" }}
          >
            <div className="h-full w-full overflow-hidden" style={{ borderRadius: "160px" }}>
              <Image
                src={heroContent.heroCircleImage}
                alt="Yoga pose"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
