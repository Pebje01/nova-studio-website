"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { reviewsContent } from "@/lib/content";

function Stars() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 1l2.5 5.5L18 7.5l-4 4 1 6-5-2.5L5 17.5l1-6-4-4 5.5-1L10 1z"
            fill="#909c87"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const textReviews = reviewsContent.reviews.filter(
    (r) => !r.hasImage && r.title
  );
  const imageReviews = reviewsContent.reviews.filter((r) => r.hasImage);

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
          <em className="italic">{reviewsContent.headingAccent}</em>
          {reviewsContent.headingMiddle}{" "}
          <em className="italic">{reviewsContent.headingAccent2}</em>{" "}
          {reviewsContent.headingEnd}
        </motion.h2>

        {/* Masonry-style grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {textReviews[0] && (
              <ReviewCard review={textReviews[0]} index={0} />
            )}
            {imageReviews[1] && (
              <ImageCard review={imageReviews[1]} index={1} />
            )}
            {textReviews[3] && (
              <ReviewCard review={textReviews[3]} index={4} />
            )}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            {textReviews[1] && (
              <ReviewCard review={textReviews[1]} index={2} />
            )}
            {imageReviews[2] && (
              <ImageCard review={imageReviews[2]} index={3} />
            )}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            {imageReviews[0] && (
              <ImageCard review={imageReviews[0]} index={0} />
            )}
            {textReviews[2] && (
              <ReviewCard review={textReviews[2]} index={5} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

interface Review {
  id: number;
  title: string;
  text: string;
  name: string;
  age: number;
  hasImage: boolean;
  image?: string;
  isVideo?: boolean;
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index, ease: [0.25, 0.1, 0, 1] }}
      className="bg-white p-8"
      style={{ borderRadius: 20 }}
    >
      <Stars />
      <h3
        className="mt-5 font-serif font-normal text-brown-dark"
        style={{ fontSize: 24, lineHeight: "30px" }}
      >
        {review.title}
      </h3>
      <p
        className="mt-4 text-brown-medium"
        style={{ fontSize: 14, lineHeight: "22px" }}
      >
        {review.text}
      </p>
      <div className="mt-6 border-t border-gray-border pt-5">
        <p className="font-sans text-brown-dark" style={{ fontSize: 15, fontWeight: 500 }}>
          {review.name},{" "}
          <span className="font-normal text-gray-light">{review.age} years</span>
        </p>
      </div>
    </motion.div>
  );
}

function ImageCard({ review, index }: { review: Review; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index, ease: [0.25, 0.1, 0, 1] }}
      whileHover="hovered"
      className="relative overflow-hidden"
      style={{ borderRadius: 20, minHeight: 300 }}
    >
      <motion.div
        className="absolute inset-0"
        variants={{ hovered: { scale: 1.05 } }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0, 1] }}
      >
        <Image
          src={review.image || ""}
          alt={review.name || "Review"}
          fill
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      {review.name && (
        <div className="absolute bottom-6 left-6 text-white">
          <p className="font-serif" style={{ fontSize: 22 }}>
            {review.name}
          </p>
          <p className="mt-1 text-white/70" style={{ fontSize: 13 }}>
            {review.age} years
          </p>
        </div>
      )}
      {review.isVideo && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M6 3l12 7-12 7V3z" fill="#221e20" />
            </svg>
          </div>
        </div>
      )}
    </motion.div>
  );
}
