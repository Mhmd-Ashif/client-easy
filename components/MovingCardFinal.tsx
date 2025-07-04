"use client";

import React from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className=" rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Working with this team transformed our Amazon business completely. Our sales increased by 300% in just 6 months, and our product listings are now ranking on the first page. Their expertise in account management is unmatched.",
    name: "DJ Traders",
  },
  {
    quote:
      "The growth and marketing services provided were exactly what we needed. Our PPC campaigns are now profitable, and we're seeing consistent revenue growth across all platforms. Highly recommend their services.",
    name: "TG Fashions",
  },
  {
    quote:
      "Professional, reliable, and results-driven. They helped us optimize our Flipkart store and the results speak for themselves. Our inventory management has never been smoother.",
    name: "Arunachala Tex",
  },
  {
    quote:
      "From account setup to full-scale campaign management, they handled everything perfectly. Our brand visibility on Myntra and Ajio has improved dramatically, and our ROI keeps growing month after month.",
    name: "Feel Better & Co",
  },
];
