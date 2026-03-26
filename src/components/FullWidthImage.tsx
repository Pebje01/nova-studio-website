"use client";

import Image from "next/image";

export default function FullWidthImage() {
  return (
    <section className="relative w-full" style={{ height: "clamp(300px, 50vw, 700px)" }}>
      <Image
        src="/nova-fullwidth.jpg"
        alt="Nova Studio"
        fill
        className="object-cover"
      />
    </section>
  );
}
