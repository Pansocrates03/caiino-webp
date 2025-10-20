'use client';
import React, { useEffect } from "react";
import useReveal from "@/hooks/useReveal";
import RevealRightToLeft from "@/cuicui/other/text-animation/reveal-horizontal/RevealRightToLeft"

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
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">About Us</h1>

        <div className="prose max-w-none text-justify text-lg lg:text-2xl">

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

      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="text-center">
          <h2 data-reveal className="reveal text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
            Explore Our Work
          </h2>
          <p data-reveal className="reveal text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Discover our latest research, studies, and publications that contribute to innovation 
            and policy development in Mexico and Latin America.
          </p>
          <a
            data-reveal
            href="/publicaciones?lang=en"
            className="reveal inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold text-base sm:text-lg rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-xl"
          >
            View Our Publications
            <svg
              className="ml-2 w-5 h-5"
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
          </a>
        </div>
      </div>
    </>
  );
}