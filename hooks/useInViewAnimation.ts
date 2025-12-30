"use client";

import { useEffect, useRef } from "react";
import { useAnimation } from "framer-motion";

export function useInViewAnimation<T extends HTMLElement>(
  threshold = 0.25
) {
  const ref = useRef<T | null>(null);
  const controls = useAnimation();
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          controls.start("visible");
          hasAnimated.current = true;
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls, threshold]);

  return { ref, controls };
}
