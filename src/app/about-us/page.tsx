'use client';
import React, { useEffect } from "react";
import useReveal from "@/hooks/useReveal";
import RevealRightToLeft from "@/cuicui/other/text-animation/reveal-horizontal/RevealRightToLeft"
import TeamSection from "@/components/TeamSection";
import { Link } from "lucide-react";
import ComoLoHacemos from "@/components/Inicio/ComoLoHacemos";
import QuePretendemos from "@/components/Inicio/QuePretendemos";

import imagen from '/events/premioDatos/1.jpg'

const parragraphs = [
  "The Centro de Análisis para la Investigación en Innovación, A.C. (CAIINNO), is a Mexican think tank established by individuals who completed their studies abroad with the Fulbright scholarship and decided to return to Mexico to bring about positive change in the country.",

  "Their work has led them to receive national and international acclaim. For instance, they recently designed a project that was selected by the Inter-American Development Bank (IDB) during its call for 'proposals for Latin America's and the Caribbean's recovery from COVID-19'. Their proposal was the only one selected from Mexico and one of the ten chosen worldwide from among the nearly 300 received by the IDB.",

  "In 2020, the National Institute for Access to Information (INAI) honored them with the 'Award for Innovation and Best Practices in the Protection of Personal Data', on account of the development and implementation of an artificial intelligence. In 2023 the INAI honored them with a special mention in the Innovation Award.",

  "In addition, CAIINNO has carried out activities and collaborations with Mexican and international agencies, such as the International Union for the Protection of New Varieties of Plants, the U.S. Patent and Trademark Office, the Latin American Integration Association, and the United Nations Development Program, among others."
]


export default function AboutUs() {
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
    <>
      <div className="flex flex-col items-center bg-gradient-to-b from-blue-50 via-white to-white min-h-screen">

        {/* CONTENEDOR PRINCIPAL: Párrafos y la Imagen a la derecha */}
        <div className="container mx-auto px-4 max-w-12xl py-12 lg:py-20 lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          {/* Columna Izquierda: Párrafos (ocupa 7 de 12 columnas en pantallas grandes) */}
            <div className="lg:col-span-6">
              {/* Estilos para los párrafos, ajustando el tamaño del texto para el layout de 2 columnas */}
                <div className="prose max-w-none text-justify text-lg lg:text-xl">
                  <p className="mb-6">
                    <RevealRightToLeft
                      text={parragraphs[0]}
                      delay={0}
                      speed={10}
                      direction="ltr"
                    />
                  </p>

                  <p className="mb-6">
                    <RevealRightToLeft
                      text={parragraphs[1]}
                      delay={2000}
                      speed={10}
                      direction="ltr"
                    />
                  </p>
                  <p className="mb-6">
                    <RevealRightToLeft
                      text={parragraphs[2]}
                      delay={5500}
                      speed={10}
                      direction="ltr"
                    />
                  </p>
                  <p className="mb-6">
                    <RevealRightToLeft
                      text={parragraphs[3]}
                      delay={8500}
                      speed={10}
                      direction="ltr"
                    />
                  </p>
                </div>
            </div>

            {/* Columna Derecha: Imagen (ocupa 6 de 12 columnas en pantallas grandes) */}
            <div className="lg:col-span-6 mt-10 lg:mt-0 flex justify-center items-start">
                <img
                    // Asumiendo que 'imagen' es un objeto de importación de Next.js y tiene la propiedad 'src'
                    src="/events/premioDatos/1.jpg"
                    alt="Imagen representativa de la sección Nosotros"
                    // Estilos para mejorar la apariencia de la imagen y hacerla responsiva
                    className="w-full h-auto max-w-sm lg:max-w-full rounded-2xl shadow-xl border-4 border-white transform transition-all hover:scale-[1.02] duration-500 object-cover"
                />
            </div>
        </div>

        <div className="w-full relative mt-12">
          <QuePretendemos language="en" />
          <ComoLoHacemos language="en" />
        </div>

      </div>

      {/* Sección de publicaciones */}
      <div className="container mx-auto px-4 py-16 sm:py-20 max-w-5xl">
        <div data-reveal className="reveal bg-white/80 rounded-2xl shadow-lg p-8 sm:p-12 text-center border border-blue-100 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 text-blue-800">
            Explora nuestro trabajo
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Descubre nuestras investigaciones, estudios y publicaciones más recientes que contribuyen a la innovación y al desarrollo de políticas en México y América Latina.
          </p>
          <Link
            href="/publicaciones?lang=es"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Ver publicaciones
            <svg
              className="ml-3 w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Sección de equipo */}
      <div className="bg-gradient-to-t from-blue-50 via-white to-white py-12">
        <TeamSection language="english" />
      </div>
    </>
  )
}