"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/cuicui/utils/cn";

interface RevealRightToLeftProps {
  text: string;
  delay?: number; // Delay antes de iniciar la animación
  speed?: number; // Velocidad de revelación por PALABRA (ms)
  className?: string;
  onComplete?: () => void;
  direction?: "ltr" | "rtl"; // Dirección de revelación
}

const RevealRightToLeft = ({
  text,
  delay = 0,
  speed = 30, // Esta 'speed' ahora controla la velocidad por palabra
  className,
  onComplete,
  direction = "ltr",
}: RevealRightToLeftProps) => {
  // CAMBIO: El estado ahora rastrea los índices de los tokens (palabras) visibles
  const [visibleTokens, setVisibleTokens] = useState<Set<number>>(new Set());
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Dividimos el texto en tokens (palabras y espacios)
  const tokens = text.split(/(\s+)/);

  useEffect(() => {
    if (hasStarted) return;

    const startTimer = setTimeout(() => {
      setHasStarted(true);
      
      // CAMBIO: Obtenemos los índices de los tokens que NO son espacios en blanco
      const wordIndices = tokens
        .map((token, index) => ({ token, index }))
        .filter(t => !/^\s+$/.test(t.token)) // Filtramos solo palabras
        .map(t => t.index); // Obtenemos el índice original del token

      // Aplicamos la dirección a los índices de las palabras
      const animationIndices = direction === "rtl" 
        ? [...wordIndices].reverse() 
        : wordIndices;

      let currentIndex = 0;
      
      const interval = setInterval(() => {
        if (currentIndex < animationIndices.length) {
          // Obtenemos el índice del token (palabra) a revelar
          const tokenIndex = animationIndices[currentIndex];
          // CAMBIO: Añadimos el índice del token al estado
          setVisibleTokens((prev) => new Set([...prev, tokenIndex]));
          currentIndex++;
        } else {
          clearInterval(interval);
          if (onComplete) onComplete();
        }
      }, speed); // La velocidad ahora se aplica por palabra

      return () => clearInterval(interval);
    }, delay);

    // Añadimos 'direction' y 'text' (que genera 'tokens') a las dependencias
    return () => clearTimeout(startTimer);
  }, [text, delay, speed, hasStarted, onComplete, direction]); 

  // CAMBIO: La lógica de renderizado ahora aplica la animación por token
  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {tokens.map((token, tIdx) => {
          // Si es un espacio, lo renderizamos tal cual
          if (/^\s+$/.test(token)) {
            return (
              <span key={`space-${tIdx}`}>
                {token}
              </span>
            );
          }

          // Si es una palabra, aplicamos la lógica de visibilidad
          const isVisible = visibleTokens.has(tIdx);
          const hiddenClass = direction === "rtl" ? "opacity-0 translate-x-2" : "opacity-0 -translate-x-2";

          return (
            <span
              key={`word-${tIdx}`}
              className={cn(
                "inline-block whitespace-nowrap transition-all duration-300",
                isVisible ? "opacity-100 translate-x-0" : hiddenClass
              )}
            >
              {/* Renderizamos la palabra completa */}
              {token}
            </span>
          );
        })}
    </span>
  );
};

export default RevealRightToLeft;