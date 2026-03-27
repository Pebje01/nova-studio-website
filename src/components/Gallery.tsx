"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryContent } from "@/lib/content";

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) =>
      c === 0 ? galleryContent.images.length - 1 : c - 1
    );
  const next = () =>
    setCurrent((c) =>
      c === galleryContent.images.length - 1 ? 0 : c + 1
    );

  return (
    <section className="py-[60px] lg:py-[160px]" style={{ backgroundColor: "#E0D9D1" }}>
      <div className="mx-auto max-w-[1440px] px-[20px] lg:px-[68px]">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.3 }}
          className="text-center font-serif font-normal text-brown-dark heading-tracking"
          style={{
            fontSize: "clamp(36px, 5vw, 68px)",
            lineHeight: 1.1,
          }}
        >
          {galleryContent.headingStart}{" "}
          <em className="italic text-sage-dark">{galleryContent.headingAccent}</em>{" "}
          {galleryContent.headingEnd}
        </motion.h2>
      </div>

      {/* Slider */}
      <div className="relative mt-16">
        <div
          className="relative mx-auto overflow-hidden"
          style={{
            maxWidth: 1400,
            height: "clamp(220px, 45vw, 620px)",
            borderRadius: 16,
            marginLeft: "clamp(16px, 4vw, 60px)",
            marginRight: "clamp(16px, 4vw, 60px)",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={galleryContent.images[current]}
                alt={`Gallery image ${current + 1}`}
                fill
                className="object-cover"
                style={{ borderRadius: 20 }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 z-10 flex h-10 w-10 lg:h-14 lg:w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-105 lg:left-4"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M13 4l-6 6 6 6"
              stroke="#221e20"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 z-10 flex h-10 w-10 lg:h-14 lg:w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-105 lg:right-4"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M7 4l6 6-6 6"
              stroke="#221e20"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Extra two photos below slider */}
      <div
        className="mx-auto mt-5 grid grid-cols-2 gap-5"
        style={{
          maxWidth: 1400,
          marginLeft: "clamp(16px, 4vw, 60px)",
          marginRight: "clamp(16px, 4vw, 60px)",
        }}
      >
        {galleryContent.extraImages.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.1 * i, ease: [0.25, 0.1, 0, 1] }}
            className="relative overflow-hidden"
            style={{
              height: "clamp(160px, 28vw, 400px)",
              borderRadius: 16,
            }}
          >
            <Image
              src={src}
              alt={`Nova Studio extra ${i + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
