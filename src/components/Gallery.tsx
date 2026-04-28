"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { galleryContent } from "@/lib/content";

export default function Gallery() {
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

        {/* 3 foto's naast elkaar */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {galleryContent.images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: 0.1 * i, ease: [0.25, 0.1, 0, 1] }}
              className="relative overflow-hidden"
              style={{
                height: "clamp(220px, 32vw, 520px)",
                borderRadius: 16,
              }}
            >
              <Image
                src={src}
                alt={`Nova Studio ${i + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
