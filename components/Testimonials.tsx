"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { InfiniteMovingCardsDemo } from "./MovingCardFinal";
import {
  useMotionValue,
  motion,
  animate,
  useTransform,
  useInView,
} from "motion/react";

const Testimonials: React.FC = () => {
  const [isAnimating] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const satisfaction = useMotionValue(0);
  const projects = useMotionValue(0);
  const rating = useMotionValue(0.0);
  const response = useMotionValue(0);
  const roundedSatisfaction = useTransform(() =>
    Math.round(satisfaction.get())
  );
  const roundedProjects = useTransform(() => Math.round(projects.get()));
  const roundedResponse = useTransform(() => Math.round(response.get()));
  const roundedRating = useTransform(rating, (val) =>
    parseFloat(val.toFixed(1))
  );

  useEffect(() => {
    if (isInView) {
      const controls1 = animate(satisfaction, 98, { duration: 3 });
      const controls2 = animate(projects, 75, { duration: 3 });
      const controls3 = animate(rating, 4.9, { duration: 3 });
      const controls4 = animate(response, 24, { duration: 3 });
      return () => {
        controls1.stop();
        controls2.stop();
        controls3.stop();
        controls4.stop();
      };
    }
  }, [projects, rating, response, satisfaction, isInView]);

  return (
    <section
      id="testimonials"
      className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3 md:mb-4 transition-all duration-500 ${
              isAnimating
                ? "opacity-0 transform translate-y-4"
                : "opacity-100 transform translate-y-0"
            }`}
          >
            What Our Clients Say
          </h2>
          <p
            className={`text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 transition-all duration-500 delay-100 ${
              isAnimating
                ? "opacity-0 transform translate-y-4"
                : "opacity-100 transform translate-y-0"
            }`}
          >
            {
              "Don't just take our word for it. Here's what our satisfied clients have to say about our work."
            }
          </p>
        </div>

        <InfiniteMovingCardsDemo />

        {/* Stats section */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2 flex place-content-center">
              <motion.span>{roundedSatisfaction}</motion.span>%
            </div>
            <div className="text-slate-600 text-sm md:text-base">
              Client Satisfaction
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2 flex place-content-center">
              <motion.span>{roundedProjects}</motion.span>+
            </div>
            <div className="text-slate-600 text-sm md:text-base">
              Projects Completed
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2">
              <motion.span>{roundedRating}</motion.span>
            </div>
            <div className="text-slate-600 text-sm md:text-base">
              Average Rating
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2 flex place-content-center">
              <motion.span>{roundedResponse}</motion.span>h
            </div>
            <div className="text-slate-600 text-sm md:text-base">
              Response Time
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
