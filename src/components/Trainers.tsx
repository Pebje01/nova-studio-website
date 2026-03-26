"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { trainersContent } from "@/lib/content";

export default function Trainers() {
  return (
    <section id="trainers" className="bg-white py-[120px] lg:py-[160px]">
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
          {trainersContent.headingStart}{" "}
          <em className="italic">{trainersContent.headingAccent}</em>
          {trainersContent.headingEnd}
        </motion.h2>

        {/* Trainer grid */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 lg:gap-10">
          {trainersContent.trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.25, 0.1, 0, 1] }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="flex flex-col items-center"
            >
              <div
                className="relative overflow-hidden"
                style={{
                  width: "clamp(200px, 24vw, 340px)",
                  height: "clamp(280px, 34vw, 490px)",
                  borderRadius: "200px",
                }}
              >
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3
                className="mt-5 text-center font-serif font-normal text-brown-dark"
                style={{ fontSize: 24, lineHeight: "30px" }}
              >
                {trainer.name}
              </h3>
              <p
                className="mt-1 text-center text-gray-light"
                style={{ fontSize: 14 }}
              >
                Experience: {trainer.experience}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
