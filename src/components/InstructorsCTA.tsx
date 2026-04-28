"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ArrowButton from "@/components/ui/ArrowButton";
import { instructorsCTAContent } from "@/lib/content";

export default function InstructorsCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" ref={ref} className="bg-brown-dark py-[60px] lg:py-[140px]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-[20px] lg:flex-row lg:gap-20 lg:px-[68px]">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left"
        >
          <h2
            className="font-serif font-normal text-white heading-tracking"
            style={{
              fontSize: "clamp(36px, 5vw, 68px)",
              lineHeight: 1.1,
            }}
          >
            {instructorsCTAContent.headingStart}{" "}
            <em className="italic text-sage">{instructorsCTAContent.headingAccent}</em>
          </h2>
          <p
            className="mt-6 max-w-[460px] text-white/60"
            style={{ fontSize: 16, lineHeight: "26px" }}
          >
            {instructorsCTAContent.subtitle}
          </p>
          <div className="mt-8">
            <ArrowButton href="#memberships" variant="light">
              {instructorsCTAContent.ctaLabel}
            </ArrowButton>
          </div>
        </motion.div>

        {/* Right photo */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0, 1] }}
          className="relative lg:w-1/2 flex justify-center"
        >
          <div
            className="relative overflow-hidden"
            style={{
              width: "clamp(220px, 65vw, 420px)",
              height: "clamp(300px, 90vw, 580px)",
              borderRadius: 500,
            }}
          >
            <Image
              src={instructorsCTAContent.image}
              alt="Shirley"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
