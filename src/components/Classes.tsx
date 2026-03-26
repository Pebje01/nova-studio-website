"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { classesContent } from "@/lib/content";

export default function Classes() {
  const [activeDay, setActiveDay] = useState("Maandag");

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
          <em className="italic text-sage-dark">{classesContent.headingAccent}</em>
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
              className="grid grid-cols-1 gap-3 border-t border-gray-border py-5 md:grid-cols-[1fr_2fr] md:items-center"
            >
              <div>
                <p className="text-gray-light" style={{ fontSize: 13 }}>
                  Tijd
                </p>
                <p
                  className="mt-1 font-sans font-medium text-brown-dark"
                  style={{ fontSize: 18 }}
                >
                  {item.time}
                </p>
              </div>

              <div>
                <p className="text-gray-light" style={{ fontSize: 13 }}>
                  Les
                </p>
                <p
                  className="mt-1 font-serif font-normal text-brown-dark"
                  style={{ fontSize: "clamp(18px, 3vw, 24px)" }}
                >
                  {item.className}
                </p>
              </div>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-gray-border" />
        </div>

        {/* WhatsApp button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mt-12 flex justify-center"
        >
          <a
            href={classesContent.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 transition-opacity duration-300 hover:opacity-80"
          >
            <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#25D366] text-white">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
            <span className="font-medium text-brown-dark" style={{ fontSize: 15 }}>
              Interesse? Meld je aan.
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
