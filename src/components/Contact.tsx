"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { contactContent } from "@/lib/content";
import ArrowButton from "@/components/ui/ArrowButton";

export default function Contact() {
  return (
    <section id="contact" className="bg-sage-dark py-[120px] lg:py-[160px]">
      <div className="mx-auto max-w-[1440px] px-[30px] lg:px-[68px]">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.3 }}
            className="w-full lg:w-1/2"
          >
            <h2
              className="font-serif font-normal text-white"
              style={{
                fontSize: "clamp(36px, 5vw, 68px)",
                lineHeight: 1.1,
                letterSpacing: "-4.08px",
              }}
            >
              {contactContent.headingStart}{" "}
              <em className="italic">{contactContent.headingAccent}</em>
            </h2>
            <p
              className="mt-6 text-white/70"
              style={{ fontSize: 16, lineHeight: "26px" }}
            >
              {contactContent.subtitle}
            </p>

            <form className="mt-10 flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Voornaam"
                  className="border border-white/20 bg-white/10 px-5 py-4 text-white placeholder-white/50 outline-none transition-colors focus:border-white/40"
                  style={{ fontSize: 14, borderRadius: 16 }}
                />
                <input
                  type="text"
                  placeholder="Achternaam"
                  className="border border-white/20 bg-white/10 px-5 py-4 text-white placeholder-white/50 outline-none transition-colors focus:border-white/40"
                  style={{ fontSize: 14, borderRadius: 16 }}
                />
              </div>
              <input
                type="email"
                placeholder="E-mailadres"
                className="border border-white/20 bg-white/10 px-5 py-4 text-white placeholder-white/50 outline-none transition-colors focus:border-white/40"
                style={{ fontSize: 14, borderRadius: 16 }}
              />
              <textarea
                placeholder="Jouw bericht of vraag"
                rows={4}
                className="resize-none border border-white/20 bg-white/10 px-5 py-4 text-white placeholder-white/50 outline-none transition-colors focus:border-white/40"
                style={{ fontSize: 14, borderRadius: 16 }}
              />
              <div className="mt-2 md:self-start">
                <ArrowButton type="submit" variant="sage" style={{ fontSize: 16, borderRadius: 80, fontWeight: 500, padding: "20px 36px 18px" }}>
                  Verstuur bericht
                </ArrowButton>
              </div>
            </form>
          </motion.div>

          {/* Circle image with float animation */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0, 1] }}
            className="relative hidden lg:block"
            style={{ width: 450, height: 450 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-full overflow-hidden rounded-full"
            >
              <Image
                src={contactContent.image}
                alt="Yoga meditation"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
