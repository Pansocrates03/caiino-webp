"use client";
import React, { useEffect, useRef, useState } from "react";
import useReveal from "@/hooks/useReveal";

type WordRiseProps = {
  text: string;
  delay?: number; // ms between words
  duration?: number; // ms duration of each word animation
  playOnMount?: boolean;
  playOnVisible?: boolean;
  className?: string;
};

export default function WordRise({
  text,
  delay = 50,
  duration = 420,
  playOnMount = false,
  playOnVisible = true,
  className = "",
}: WordRiseProps) {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const words = text.split(/\s+/).filter(Boolean);

  // If playOnMount, start visible immediately
  useEffect(() => {
    if (playOnMount) setVisible(true);
  }, [playOnMount]);

  // If playOnVisible, use IntersectionObserver via useReveal OR a lightweight observer here
  useEffect(() => {
    if (!playOnVisible) return;
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [playOnVisible]);

  return (
    <span
      ref={containerRef}
      className={`word-rise-container ${className}`}
      aria-live="polite"
    >
      {words.map((w, i) => {
        const d = i * delay;
        return (
          <span
            key={`${w}-${i}`}
            className={`word-rise-word ${visible ? "word-rise-visible" : ""}`}
            style={{
              transitionDelay: `${d}ms`,
              transitionDuration: `${duration}ms`,
              display: "inline-block",
              marginRight: "0.25rem",
            }}
          >
            {w}
          </span>
        );
      })}

      <style jsx>{`
        .word-rise-word {
          opacity: 0;
          transform: translateY(18px) scale(0.99);
          transition-property: transform, opacity;
          transition-timing-function: cubic-bezier(.2,.9,.3,1);
        }
        .word-rise-visible {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .word-rise-word { transition: none !important; transform: none !important; opacity: 1 !important; }
        }
      `}</style>
    </span>
  );
}
