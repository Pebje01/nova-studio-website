"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { instructorsCTAContent } from "@/lib/content";

export default function InstructorsCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="bg-cream py-[60px] lg:py-[80px]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-16 px-[30px] lg:flex-row lg:px-[68px]">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          style={{ flex: 1 }}
        >
          <h2
            className="font-serif font-normal text-brown-dark"
            style={{
              fontSize: "clamp(36px, 5vw, 68px)",
              lineHeight: 1.1,
              letterSpacing: "-4.08px",
            }}
          >
            {instructorsCTAContent.headingStart}{" "}
            <em className="italic">{instructorsCTAContent.headingAccent}</em>
          </h2>
          <p
            className="mt-6 max-w-[460px] text-brown-medium"
            style={{ fontSize: 16, lineHeight: "26px" }}
          >
            {instructorsCTAContent.subtitle}
          </p>
          <Link
            href="#memberships"
            className="mt-8 inline-flex items-center bg-sage font-medium text-white transition-all duration-300 hover:bg-sage-dark"
            style={{ fontSize: 18, borderRadius: 80, padding: "26px 40px 22px", fontWeight: 500 }}
          >
            {instructorsCTAContent.ctaLabel}
          </Link>
        </motion.div>

        {/* Right circle image with parallax */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0, 1] }}
          style={{
            y: imageY,
            width: "clamp(200px, 24vw, 340px)",
            height: "clamp(280px, 34vw, 490px)",
            borderRadius: "50%",
          }}
          className="relative"
        >
          <div className="h-full w-full overflow-hidden" style={{ borderRadius: "50%" }}>
            <Image
              src={instructorsCTAContent.image}
              alt="Yoga instructor"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
