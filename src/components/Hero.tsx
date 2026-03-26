"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { heroContent } from "@/lib/content";
import ArrowButton from "@/components/ui/ArrowButton";

const slideImages = [
  { src: "/nova-hero-1.jpg", alt: "Nova Studio" },
  { src: "/nova-hero-2.jpg", alt: "Nova Studio fitness" },
  { src: "/nova-hero-3.jpg", alt: "Nova Studio sfeer" },
];

const kenBurnsVariants = [
  { initial: { scale: 1.12, x: 20, y: 10 }, animate: { scale: 1, x: 0, y: 0 } },
  { initial: { scale: 1, x: -20, y: -10 }, animate: { scale: 1.12, x: 0, y: 0 } },
  { initial: { scale: 1.08, x: 0, y: 15 }, animate: { scale: 1, x: 0, y: -15 } },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const kb = kenBurnsVariants[current % kenBurnsVariants.length];

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden" style={{ paddingTop: "160px" }}>
      {/* Slideshow background */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0"
            initial={kb.initial}
            animate={kb.animate}
            transition={{ duration: 7, ease: "easeInOut" }}
          >
            <Image
              src={slideImages[current].src}
              alt={slideImages[current].alt}
              fill
              className="object-cover"
              priority={current === 0}
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-[30px] lg:px-[68px]">
        <div className="flex items-center">
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
              <em className="italic">{heroContent.headingAccent}</em>
              <br />
              {heroContent.headingMiddle}{" "}
              <em className="italic">{heroContent.headingAccent2}</em>{" "}
              {heroContent.headingEnd}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0, 1] }}
              className="mt-10 max-w-[514px] font-sans text-white/80"
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
              <ArrowButton href="#memberships" variant="light">
                {heroContent.ctaLabel}
              </ArrowButton>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slideImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="h-1.5 rounded-full bg-white transition-all duration-500"
            style={{ width: i === current ? 32 : 8, opacity: i === current ? 1 : 0.4 }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
