"use client";
import React from "react";
import { FloatingNav } from "./FloatingNav";
import {
  Home,
  MessageCircle,
  BookAIcon,
  ShoppingCartIcon,
  StarIcon,
} from "lucide-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <BookAIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Products and Services",
      link: "#products",
      icon: (
        <ShoppingCartIcon className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Testimonials",
      link: "#testimonials",
      icon: <StarIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
