"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/cuicui/utils/cn";

interface RevealRightToLeftProps {
  text: string;
  delay?: number; // Delay antes de iniciar la animación
  speed?: number; // Velocidad de revelación por letra (ms)
  className?: string;
  onComplete?: () => void;
  direction?: "ltr" | "rtl"; // Dirección de revelación
}

const RevealRightToLeft = ({
  text,
  delay = 0,
  speed = 30,
  className,
  onComplete,
  direction = "ltr",
}: RevealRightToLeftProps) => {
  const [visibleChars, setVisibleChars] = useState<Set<number>>(new Set());
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (hasStarted) return;

    const startTimer = setTimeout(() => {
      setHasStarted(true);
      
      // Crear array de índices en orden inverso (de derecha a izquierda)
      const charIndices: number[] = [];
      if (direction === "rtl") {
        for (let i = text.length - 1; i >= 0; i--) {
          charIndices.push(i);
        }
      } else {
        for (let i = 0; i < text.length; i++) {
          charIndices.push(i);
        }
      }

      let currentIndex = 0;
      
      const interval = setInterval(() => {
        if (currentIndex < charIndices.length) {
          const charIndex = charIndices[currentIndex];
          setVisibleChars((prev) => new Set([...prev, charIndex]));
          currentIndex++;
        } else {
          clearInterval(interval);
          if (onComplete) onComplete();
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [text, delay, speed, hasStarted, onComplete]);

  // Split text into tokens keeping whitespace so we can avoid breaking words
  const tokens = text.split(/(\s+)/);
  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {(() => {
        let globalIndex = 0;
        return tokens.map((token, tIdx) => {
          if (/^\s+$/.test(token)) {
            // Render whitespace as-is (allows line breaks between words)
            return (
              <span key={`space-${tIdx}`}>
                {token}
              </span>
            );
          }

          // Non-space token (word or punctuation). Keep it together with nowrap.
          const chars = token.split("");
          return (
            <span key={`word-${tIdx}`} className="inline-block whitespace-nowrap">
              {chars.map((char) => {
                const charIndex = globalIndex++;
                const hiddenClass = direction === "rtl" ? "opacity-0 translate-x-2" : "opacity-0 -translate-x-2";
                return (
                  <span
                    key={`${tIdx}-${charIndex}-${char}`}
                    className={cn(
                      "inline-block transition-all duration-300",
                      visibleChars.has(charIndex) ? "opacity-100 translate-x-0" : hiddenClass
                    )}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          );
        });
      })()}
    </span>
  );
};

export default RevealRightToLeft;