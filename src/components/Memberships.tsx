"use client";

import { motion } from "framer-motion";
import { membershipsContent } from "@/lib/content";
import ArrowButton from "@/components/ui/ArrowButton";

export default function Memberships() {
  return (
    <section id="memberships" className="bg-white py-[120px] lg:py-[160px]">
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
          {membershipsContent.headingStart}{" "}
          <em className="italic text-sage-dark">{membershipsContent.headingAccent}</em>{" "}
          {membershipsContent.headingEnd}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="mx-auto mt-6 max-w-[600px] text-center text-brown-medium"
          style={{ fontSize: 16, lineHeight: "26px" }}
        >
          {membershipsContent.subtitle}
        </motion.p>

        {/* Pricing cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {membershipsContent.plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={
                plan.featured
                  ? { opacity: 0, y: 40, scale: 0.98 }
                  : { opacity: 0, y: 30 }
              }
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.25, 0.1, 0, 1] }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)", transition: { duration: 0.3 } }}
              className={`flex flex-col justify-between p-6 md:p-8 lg:p-10 ${
                plan.featured
                  ? "bg-sage text-white"
                  : "bg-white text-brown-dark border border-gray-border"
              }`}
              style={{ borderRadius: 20 }}
            >
              <div>
                <span
                  className={`inline-block rounded-full px-6 py-2.5 text-sm font-medium ${
                    plan.featured
                      ? "bg-white/20 text-white"
                      : "bg-brown-dark text-white"
                  }`}
                  style={{ fontSize: 13 }}
                >
                  {plan.name}
                </span>

                <div className="mt-6">
                  <span
                    className="font-serif font-normal"
                    style={{ fontSize: "clamp(36px, 7vw, 52px)", lineHeight: 1 }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`${
                      plan.featured ? "text-white/70" : "text-gray-light"
                    }`}
                    style={{ fontSize: 16 }}
                  >
                    {plan.period}
                  </span>
                </div>

                <div
                  className={`my-8 h-[1px] ${
                    plan.featured ? "bg-white/20" : "bg-gray-border"
                  }`}
                />

                <ul className="flex flex-col gap-4">
                  {plan.features.map((feature, fi) => (
                    <li
                      key={fi}
                      className={`flex items-start gap-3 ${
                        plan.featured ? "text-white/90" : "text-brown-medium"
                      }`}
                      style={{ fontSize: 14, lineHeight: "22px" }}
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-current" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <ArrowButton
                  href="#contact"
                  variant={plan.featured ? "light" : "outline"}
                  fullWidth
                >
                  Abonnement kiezen
                </ArrowButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
