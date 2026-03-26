"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { classesContent } from "@/lib/content";

export default function Classes() {
  const [activeDay, setActiveDay] = useState("Monday");

  const schedule = classesContent.schedule[activeDay] || [];

  return (
    <section id="classes" className="bg-white py-[120px] lg:py-[160px]">
      <div className="mx-auto max-w-[1440px] px-[30px] lg:px-[68px]">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.3 }}
          className="text-center font-serif font-normal text-brown-dark"
          style={{
            fontSize: "clamp(36px, 5vw, 68px)",
            lineHeight: 1.1,
            letterSpacing: "-4.08px",
          }}
        >
          {classesContent.headingStart}{" "}
          <em className="italic">{classesContent.headingAccent}</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="mx-auto mt-6 max-w-[600px] text-center text-brown-medium"
          style={{ fontSize: 16, lineHeight: "26px" }}
        >
          {classesContent.subtitle}
        </motion.p>

        {/* Day tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {classesContent.days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`relative rounded-full px-7 py-3 text-sm font-medium transition-all duration-300 ${
                activeDay === day
                  ? "bg-sage-dark text-white"
                  : "border border-gray-border bg-transparent text-brown-dark hover:bg-cream"
              }`}
              style={{ fontSize: 14, height: 48 }}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule rows */}
        <div className="mt-12">
          {schedule.map((item, i) => (
            <motion.div
              key={`${activeDay}-${i}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.08 * i, ease: [0.25, 0.1, 0, 1] }}
              className="flex flex-col items-start gap-4 border-t border-gray-border py-6 md:flex-row md:items-center md:justify-between"
            >
              <div className="min-w-[200px]">
                <p className="text-gray-light" style={{ fontSize: 13 }}>
                  Time
                </p>
                <p
                  className="mt-1 font-sans font-medium text-brown-dark"
                  style={{ fontSize: 18 }}
                >
                  {item.time}
                </p>
              </div>

              <div className="min-w-[240px]">
                <p className="text-gray-light" style={{ fontSize: 13 }}>
                  Class
                </p>
                <p
                  className="mt-1 font-serif font-normal text-brown-dark"
                  style={{ fontSize: 24 }}
                >
                  {item.className}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="relative overflow-hidden rounded-full"
                  style={{ width: 48, height: 48 }}
                >
                  <Image
                    src={item.trainerImage}
                    alt={item.trainer}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-light" style={{ fontSize: 13 }}>
                    Trainer
                  </p>
                  <p
                    className="font-sans font-medium text-brown-dark"
                    style={{ fontSize: 15 }}
                  >
                    {item.trainer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-gray-border" />
        </div>
      </div>
    </section>
  );
}
