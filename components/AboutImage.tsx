"use client";

import Image from "next/image";
import { useState } from "react";

export default function AboutImage() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative tablet:flex-1 flex flex-col gap-3">
      <div
        className="relative min-h-[400px] overflow-hidden rounded-lg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src="/illustrations/About photo.jpg"
          alt="About Kelvin"
          fill
          className="object-cover object-[75%_center] scale-125 origin-center transition-opacity duration-500 ease-in-out"
          style={{ opacity: hovered ? 0 : 1 }}
        />
        <Image
          src="/illustrations/Lion dance.jpg"
          alt="Kelvin lion dancing"
          fill
          className="object-cover object-[%_center] scale-125 origin-bottom transition-opacity duration-500 ease-in-out"
          style={{ opacity: hovered ? 1 : 0 }}
        />
      </div>
      <p className="type-body text-center" style={{ color: "rgb(var(--muted))" }}>
        Hover to see my standard weekend
      </p>
    </div>
  );
}