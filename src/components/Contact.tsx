"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { contactContent } from "@/lib/content";
import ArrowButton from "@/components/ui/ArrowButton";

export default function Contact() {
  const diensten = ["Personal training", "Small group training", "Zwanger", "Bevallen"];
  const [form, setForm] = useState({ voornaam: "", achternaam: "", email: "", bericht: "", voorkeur: "" });
  const [interesse, setInteresse] = useState<string[]>([]);

  const toggleInteresse = (dienst: string) => {
    setInteresse((prev) =>
      prev.includes(dienst) ? prev.filter((d) => d !== dienst) : [...prev, dienst]
    );
  };
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "6221382d-90f0-4594-aa8a-639976000685",
          subject: `Nieuwe intakeaanvraag van ${form.voornaam} ${form.achternaam}`,
          name: `${form.voornaam} ${form.achternaam}`,
          email: form.email,
          "Ik heb interesse in": interesse.length ? interesse.join(", ") : "niet opgegeven",
          "Communicatievoorkeur": form.voorkeur || "niet opgegeven",
          "Vragen of opmerkingen": form.bericht || "",
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "border border-white/20 bg-white/10 px-5 py-4 text-white placeholder-white/50 outline-none transition-colors focus:border-white/40";
  const inputStyle = { fontSize: 16, borderRadius: 16 };

  return (
    <section id="contact" className="bg-sage-dark py-[60px] lg:py-[160px]" style={{ borderRadius: "40px 40px 0 0" }}>
      <div className="mx-auto max-w-[1440px] px-[20px] lg:px-[68px]">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-stretch lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.3 }}
            className="w-full lg:w-1/2"
          >
            <h2
              className="font-serif font-normal text-white heading-tracking"
              style={{ fontSize: "clamp(36px, 5vw, 68px)", lineHeight: 1.1 }}
            >
              {contactContent.headingStart}{" "}
              <span>{contactContent.headingAccent}</span>
            </h2>
            <p className="mt-6 text-white/70" style={{ fontSize: 16, lineHeight: "26px" }}>
              {contactContent.subtitle}
            </p>

            {status === "success" ? (
              <div className="mt-10 rounded-2xl bg-white/10 px-6 py-8 text-white">
                <p className="text-lg font-serif">Bedankt voor je bericht.</p>
                <p className="mt-2 text-white/70" style={{ fontSize: 15 }}>
                  Ik neem zo snel mogelijk contact met je op.
                </p>
              </div>
            ) : (
              <form className="mt-10 flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <input
                    name="voornaam"
                    type="text"
                    placeholder="Voornaam"
                    value={form.voornaam}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    style={inputStyle}
                  />
                  <input
                    name="achternaam"
                    type="text"
                    placeholder="Achternaam"
                    value={form.achternaam}
                    onChange={handleChange}
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
                <input
                  name="email"
                  type="email"
                  placeholder="E-mailadres"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  style={inputStyle}
                />
                <div>
                  <p className="mb-3 font-semibold text-white/90" style={{ fontSize: 14 }}>Ik heb interesse in</p>
                  <div className="grid grid-cols-2 gap-2">
                    {diensten.map((dienst) => (
                      <label key={dienst} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={interesse.includes(dienst)}
                          onChange={() => toggleInteresse(dienst)}
                          className="accent-white"
                        />
                        <span className="text-white/80" style={{ fontSize: 15 }}>{dienst}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-3 font-semibold text-white/90" style={{ fontSize: 14 }}>Communicatievoorkeur</p>
                  <div className="flex gap-3 flex-wrap">
                    {["Bellen", "E-mail", "WhatsApp"].map((optie) => (
                      <label key={optie} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="voorkeur"
                          value={optie}
                          checked={form.voorkeur === optie}
                          onChange={handleChange}
                          className="accent-white"
                        />
                        <span className="text-white/80" style={{ fontSize: 15 }}>{optie}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <textarea
                  name="bericht"
                  placeholder="Heb je nog vragen of opmerkingen? Vul ze dan hierin. (optioneel)"
                  rows={4}
                  value={form.bericht}
                  onChange={handleChange}
                  className={`resize-none ${inputClass}`}
                  style={inputStyle}
                />
                {status === "error" && (
                  <p className="text-sm text-white/70">
                    Er ging iets mis. Probeer het opnieuw of stuur een mail.
                  </p>
                )}
                <div className="mt-2 md:self-start">
                  <ArrowButton type="submit" variant="dark" disabled={status === "loading"}>
                    {status === "loading" ? "Versturen..." : "Verstuur bericht"}
                  </ArrowButton>
                </div>
              </form>
            )}
          </motion.div>

          {/* Circle image */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0, 1] }}
            className="hidden lg:flex lg:w-1/2 self-stretch justify-end"
          >
            <div className="relative w-full overflow-hidden" style={{ borderRadius: 240, minHeight: 560 }}>
              <Image src={contactContent.image} alt="Nova Studio" fill className="object-cover object-center" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
