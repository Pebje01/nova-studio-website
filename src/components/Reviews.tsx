"use client";

import { motion } from "framer-motion";
import { reviewsContent } from "@/lib/content";

function Stars({ light }: { light?: boolean }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 1l2.5 5.5L18 7.5l-4 4 1 6-5-2.5L5 17.5l1-6-4-4 5.5-1L10 1z"
            fill={light ? "#a3b096" : "#ffffff"}
          />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-cream py-[120px] lg:py-[160px]">
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
          {reviewsContent.headingStart}{" "}
          <em className="italic text-sage-dark">{reviewsContent.headingAccent}</em>{" "}
          {reviewsContent.headingEnd}
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {reviewsContent.reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index, ease: [0.25, 0.1, 0, 1] }}
              className={`p-8 md:p-10 ${
                review.variant === "dark"
                  ? "bg-brown-dark text-white"
                  : "bg-white text-brown-dark"
              }`}
              style={{ borderRadius: 20 }}
            >
              <Stars light={review.variant === "light"} />
              <h3
                className={`mt-5 font-serif font-normal ${
                  review.variant === "dark" ? "text-white" : "text-brown-dark"
                }`}
                style={{ fontSize: "clamp(18px, 3vw, 24px)", lineHeight: "30px" }}
              >
                {review.title}
              </h3>
              <p
                className={`mt-4 ${
                  review.variant === "dark" ? "text-white/70" : "text-brown-medium"
                }`}
                style={{ fontSize: 14, lineHeight: "22px" }}
              >
                {review.text}
              </p>
              <div
                className={`mt-6 border-t pt-5 ${
                  review.variant === "dark" ? "border-white/20" : "border-gray-border"
                }`}
              >
                <p
                  className={`font-sans ${
                    review.variant === "dark" ? "text-white" : "text-brown-dark"
                  }`}
                  style={{ fontSize: 15, fontWeight: 500 }}
                >
                  {review.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
