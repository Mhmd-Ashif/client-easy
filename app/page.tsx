"use client";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import { FloatingNavDemo } from "@/components/FloatingDemo";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
          history.replaceState(null, "", window.location.pathname);
        }, 100);
      }
    }
  }, []);

  return (
    <main>
      <FloatingNavDemo />
      <Hero />
      <About />
      <Products />
      <Testimonials />
      <Footer />
    </main>
  );
}
