'use client';

import Link from "next/link";
import React, { useEffect } from "react";
import useReveal from "@/hooks/useReveal";

const QuienesSomos = () => {
  // Animación de revelado del texto
    const reveal = useReveal({ selector: "[data-reveal]", threshold: 0.18 });
    const init = reveal?.init;
    
    useEffect(() => {
      const cleanup = init?.();
      return () => {
        // si init devuelve función de cleanup, ejecutarla
        if (typeof cleanup === "function") cleanup();
      };
    }, [init]);

  return (
    <section id="quienes-somos" className="relative lg:min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        <img
          src="/icons/DNA.svg"
          alt="DNA background"
          className="hidden lg:block absolute bottom-[8%] left-[8%] w-[28%] max-w-[450px] opacity-70 pointer-events-none transform rotate-12"
        />
        <img
          src="/icons/DNA.svg"
          alt="DNA background"
          className="hidden lg:block absolute top-[35%] right-[8%] w-[25%] max-w-[400px] opacity-25 pointer-events-none transform -rotate-12"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-quienes-somos">
          <div className="max-w-7xl mx-auto space-y-12 md:space-y-16 lg:space-y-20">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 xl:gap-16">
              
              <div className="lg:w-[35%] xl:w-[40%]">
                <h2 data-reveal className="reveal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight lg:leading-none">
                  ¿QUIÉNES<br />SOMOS?
                </h2>
              </div>

              <div className="lg:w-[65%] xl:w-[60%]">
                <p data-reveal className="reveal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed lg:leading-relaxed">
                  CAIINNO es una <span className="font-semibold">think tank</span> constituida por personas que viven en México después de terminar estudios de posgrado en el extranjero, buscando generar un <span className="font-semibold">cambio positivo en México</span>, aprovechando su experiencia, conocimiento y contactos obtenidos, principalmente como beneficiarios de la <span className="font-semibold">beca Fulbright</span>.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-8 md:space-y-10 lg:space-y-12 pt-8 md:pt-12 lg:pt-16">
              
              <div className="max-w-4xl mx-auto">
                <p data-reveal className="reveal text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
                  CAIINNO: Innovación que transforma México.
                </p>
              </div>
              
              <div className="pt-4">
                <Link
                  data-reveal
                  href="/quienes-somos"
                  className="reveal group inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 text-base sm:text-lg md:text-xl lg:text-2xl bg-quienes-somos-button text-white font-semibold rounded-xl hover:bg-blue-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-out"
                >
                  Saber más
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default QuienesSomos;