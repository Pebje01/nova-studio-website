"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { reviewsContent } from "@/lib/content";

const CLAMP_LINES = 8;
const CLAMP_FROM_CHARS = 320;

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

function NavButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Vorige reviews" : "Volgende reviews"}
      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-gray-border bg-white text-brown-dark transition-all duration-300 hover:border-transparent hover:bg-sage-dark disabled:cursor-default disabled:opacity-30 disabled:hover:border-gray-border disabled:hover:bg-white"
    >
      <span className="text-[16px] leading-none">
        {direction === "prev" ? "←" : "→"}
      </span>
    </button>
  );
}

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);

  const geometry = () => {
    const el = trackRef.current;
    const cards = el ? ([...el.children] as HTMLElement[]) : [];
    if (!el || cards.length === 0 || el.clientWidth === 0) return null;

    const firstLeft = cards[0].offsetLeft;
    const rows = cards.filter((c, i) => i === 0 || c.offsetLeft === firstLeft).length;
    const nextColumn = cards.find((c) => c.offsetLeft > firstLeft);
    const step = nextColumn ? nextColumn.offsetLeft - firstLeft : cards[0].offsetWidth;
    const gap = step - cards[0].offsetWidth;
    const columnsPerView = Math.max(1, Math.round((el.clientWidth + gap) / step));

    return {
      el,
      cards,
      firstLeft,
      step,
      columnsPerView,
      perView: columnsPerView * rows,
      pageCount: Math.max(1, Math.ceil(cards.length / (columnsPerView * rows))),
    };
  };

  const measure = useCallback(() => {
    const g = geometry();
    if (!g) return;
    const maxScroll = g.el.scrollWidth - g.el.clientWidth;

    setPages(g.pageCount);
    setPage(
      g.el.scrollLeft >= maxScroll - 2
        ? g.pageCount - 1
        : Math.min(g.pageCount - 1, Math.round(g.el.scrollLeft / (g.columnsPerView * g.step)))
    );
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const goTo = (index: number) => {
    const g = geometry();
    if (!g) return;
    const left =
      index >= g.pageCount - 1
        ? g.el.scrollWidth
        : g.cards[index * g.perView].offsetLeft - g.firstLeft;
    g.el.scrollTo({ left, behavior: "smooth" });
  };

  return (
    <section id="reviews" className="bg-cream py-[60px] lg:py-[160px]">
      <div className="mx-auto max-w-[1440px] px-[20px] lg:px-[68px]">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.3 }}
          className="text-center font-serif font-normal text-brown-dark heading-tracking"
          style={{
            fontSize: "clamp(36px, 5vw, 68px)",
            lineHeight: 1.1,
          }}
        >
          {reviewsContent.headingStart}{" "}
          <span className="text-sage-dark">{reviewsContent.headingAccent}</span>{" "}
          {reviewsContent.headingEnd}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0, 1] }}
          className="mt-16"
        >
          <div
            ref={trackRef}
            onScroll={measure}
            className="grid snap-x snap-mandatory grid-flow-col grid-rows-2 auto-cols-[100%] gap-6 overflow-x-auto pb-1 sm:grid-rows-1 sm:auto-cols-[calc(50%-12px)] lg:auto-cols-[calc(33.333%-16px)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviewsContent.reviews.map((review, index) => {
              const isExpanded = expanded === review.id;
              const isClamped = review.text.length > CLAMP_FROM_CHARS;
              const isLast = index === reviewsContent.reviews.length - 1;

              return (
                <div
                  key={review.id}
                  className={`flex flex-col p-8 md:p-10 ${
                    isLast ? "snap-end" : "snap-start"
                  } ${
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
                    style={{
                      fontSize: 14,
                      lineHeight: "22px",
                      ...(isClamped && !isExpanded
                        ? {
                            display: "-webkit-box",
                            WebkitLineClamp: CLAMP_LINES,
                            WebkitBoxOrient: "vertical" as const,
                            overflow: "hidden",
                          }
                        : {}),
                    }}
                  >
                    {review.text}
                  </p>
                  {isClamped && (
                    <button
                      type="button"
                      onClick={() => setExpanded(isExpanded ? null : review.id)}
                      className={`mt-3 cursor-pointer self-start underline underline-offset-4 transition-opacity duration-200 hover:opacity-60 ${
                        review.variant === "dark" ? "text-white/70" : "text-brown-medium"
                      }`}
                      style={{ fontSize: 14, lineHeight: "22px" }}
                    >
                      {isExpanded ? "Lees minder" : "Lees meer"}
                    </button>
                  )}
                  <div
                    className={`mt-6 border-t pt-5 ${
                      review.variant === "dark" ? "border-white/20" : "border-gray-border"
                    }`}
                    style={{ marginTop: "auto", paddingTop: 20 }}
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
                </div>
              );
            })}
          </div>

          {pages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-6">
              <NavButton direction="prev" onClick={() => goTo(page - 1)} disabled={page === 0} />
              <div className="flex gap-2">
                {[...Array(pages)].map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    className="h-1.5 cursor-pointer rounded-full bg-brown-dark transition-all duration-500"
                    style={{ width: i === page ? 32 : 8, opacity: i === page ? 1 : 0.3 }}
                    aria-label={`Reviews ${i + 1}`}
                  />
                ))}
              </div>
              <NavButton
                direction="next"
                onClick={() => goTo(page + 1)}
                disabled={page >= pages - 1}
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
