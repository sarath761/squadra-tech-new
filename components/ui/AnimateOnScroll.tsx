"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { scrollRevealVariants } from "@/lib/animations";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  variant?: keyof typeof scrollRevealVariants;
  delay?: number;
  duration?: number;
  className?: string;
  amount?: "some" | "all" | number;
}

export default function AnimateOnScroll({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.6,
  className = "",
  amount = 0.2,
}: AnimateOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });
  
  const selectedVariant = scrollRevealVariants[variant];
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedVariant}
      transition={{ delay, duration, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
