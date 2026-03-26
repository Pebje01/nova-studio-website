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
    <section ref={ref} className="bg-cream py-[60px] lg:py-[80px]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 px-[30px] lg:flex-row lg:gap-16 lg:px-[68px]">
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
            <em className="italic text-sage-dark">{instructorsCTAContent.headingAccent}</em>
          </h2>
          <p
            className="mt-6 max-w-[460px] text-brown-medium"
            style={{ fontSize: 16, lineHeight: "26px" }}
          >
            {instructorsCTAContent.subtitle}
          </p>
          <div className="mt-8">
            <ArrowButton href="#memberships" variant="sage">
              {instructorsCTAContent.ctaLabel}
            </ArrowButton>
          </div>
        </motion.div>

        {/* Right circle image with parallax */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0, 1] }}
          style={{
            y: imageY,
            width: "clamp(260px, 40vw, 540px)",
            height: "clamp(320px, 55vw, 734px)",
            borderRadius: "500px",
          }}
          className="relative overflow-hidden"
        >
          <Image
            src={instructorsCTAContent.image}
            alt="Nova Studio trainer"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
