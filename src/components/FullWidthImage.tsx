"use client";

import Image from "next/image";

export default function FullWidthImage() {
  return (
    <section className="relative w-full" style={{ height: "clamp(300px, 50vw, 700px)" }}>
      <Image
        src="https://cdn.prod.website-files.com/65c50e40afae39c0bdf7ae15/65c50e40afae39c0bdf7ae8f_hero-bg%402x.webp"
        alt="Yoga practice"
        fill
        className="object-cover"
      />
    </section>
  );
}
