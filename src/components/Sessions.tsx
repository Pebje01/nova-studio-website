"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { sessionsContent } from "@/lib/content";

function LotusIconSmall() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21c-1.5-1.5-6-6.5-6-11C6 5.5 8.7 3 12 3s6 2.5 6 7c0 4.5-4.5 9.5-6 11z"
        fill="currentColor"
        opacity="0.4"
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

export default function Sessions() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setScrollProgress(scrollLeft / (scrollWidth - clientWidth));
    };
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-white py-[60px] lg:py-[160px]">
      <div className="mx-auto max-w-[1440px] px-[20px] lg:px-[68px]">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0, 1] }}
          className="text-center font-serif font-normal text-brown-dark heading-tracking"
          style={{
            fontSize: "clamp(36px, 5vw, 68px)",
            lineHeight: 1.1,
          }}
        >
          {sessionsContent.headingStart}{" "}
          <em className="italic text-sage-dark">
            {sessionsContent.headingAccent}
          </em>
          <br />
          {sessionsContent.headingEnd}
        </motion.h2>
      </div>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        className="hide-scrollbar mt-12 flex gap-5 overflow-x-auto px-[30px] lg:mt-16 lg:px-[68px]"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {sessionsContent.sessions.map((session, i) => (
          <motion.div
            key={session.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 * i, ease: [0.25, 0.1, 0, 1] }}
            whileHover={{ boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.25)", transition: { duration: 0.2 } }}
            className="flex-shrink-0 flex flex-col justify-between p-6 md:p-10"
            style={{
              width: "clamp(260px, 75vw, 420px)",
              minHeight: "clamp(320px, 45vw, 468px)",
              borderRadius: 20,
              scrollSnapAlign: "start",
              backgroundColor: ["#ebe6df", "#e4ded6", "#ddd6cc"][i] || "#ddd6cc",
            }}
          >
            <div>
              <div className="mb-6 flex h-[48px] w-[48px] items-center justify-center rounded-xl bg-brown-dark/10 text-brown-dark">
                <LotusIconSmall />
              </div>
              <h3
                className="font-serif font-normal text-brown-dark"
                style={{ fontSize: 32, lineHeight: "34px" }}
              >
                {session.title}
              </h3>
            </div>
            <p
              className="mt-auto text-brown-medium"
              style={{ fontSize: 14, lineHeight: "22px" }}
            >
              {session.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mx-auto mt-8 max-w-[1440px] px-[20px] lg:px-[68px]">
        <div className="h-[2px] w-full bg-gray-border">
          <motion.div
            className="h-full bg-brown-dark"
            style={{ width: `${Math.max(25, scrollProgress * 100)}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>
    </section>
  );
}
