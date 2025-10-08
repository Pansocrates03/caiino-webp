'use client';

import { FaBalanceScale } from "react-icons/fa";
import { TfiAgenda } from "react-icons/tfi";
import { GiPublicSpeaker } from "react-icons/gi";
import { LiaUniversitySolid } from "react-icons/lia";
import React, { useEffect, useState } from "react";
import useReveal from "@/hooks/useReveal";

const WhatWeWant = () => {
  const reveal = useReveal({ selector: "[data-reveal]", threshold: 0.18 });
  const init = reveal?.init;
  const [hoveredIcon, setHoveredIcon] = useState(null);

  useEffect(() => {
    const cleanup = init?.();
    return () => {
      if (typeof cleanup === "function") cleanup();
    };
  }, [init]);

  const iconData = [
    {
      id: 1,
      icon: GiPublicSpeaker,
      title: "Public Agenda",
      description: "We develop public policy proposals based on scientific evidence.",
      position: "top-0 left-1/2 -translate-x-1/2",
      delay: "140ms"
    },
    {
      id: 2,
      icon: FaBalanceScale,
      title: "Government Agenda",
      description: "We collaborate in the construction of effective government agendas.",
      position: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
      delay: "200ms"
    },
    {
      id: 3,
      icon: LiaUniversitySolid,
      title: "Laws",
      description: "We participate in the creation and analysis of regulatory frameworks.",
      position: "bottom-0 left-1/2 -translate-x-1/2",
      delay: "260ms"
    },
    {
      id: 4,
      icon: TfiAgenda,
      title: "Public Agenda",
      description: "We promote issues of public interest in the national debate.",
      position: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
      delay: "320ms"
    }
  ];

  return (
    <section id="que-pretendemos" className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-6 sm:py-8 md:py-10 overflow-hidden flex flex-col">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-blue-300/30 rounded-full blur-xl animate-bounce delay-500"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col justify-center flex-1 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-2 sm:mb-4 md:mb-6">
          <h2
            data-reveal
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 reveal bg-gradient-to-r from-blue-800 to-cyan-600 bg-clip-text text-transparent"
            style={{ transitionDelay: "0ms" }}
          >
            WHAT WE WANT
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4 sm:mb-6 rounded-full"></div>
        </div>

        {/* Descripción */}
        <div className="max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8">
          <p
            data-reveal
            className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 text-center reveal"
            style={{ transitionDelay: "80ms" }}
          >
            Collaborate with academia, government, and industry to generate and achieve our goal.
             This will be achieved through <span className="font-semibold text-blue-700">participation and impact</span> in four areas:
          </p>
        </div>

        {/* Contenedor de la animación - Más compacto */}
        <div className="relative w-full flex items-center justify-center my-4 sm:my-6">
          <div className="circle-animation-container">
            {/* Círculo principal con gradientes y efectos */}
            <div className="circle-container">
              {/* Círculo de fondo con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-300 rounded-full shadow-2xl"></div>
              
              {/* Círculo interno con efecto glass */}
              <div className="absolute inset-2 sm:inset-4 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-sm rounded-full border border-white/30"></div>
              
              {/* Círculos de los iconos */}
              {iconData.map((item) => (
                <div
                  key={item.id}
                  data-reveal
                  className={`icon-wrapper reveal absolute ${item.position} cursor-pointer group`}
                  style={{ transitionDelay: item.delay }}
                  onMouseEnter={() => setHoveredIcon(item.id)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  tabIndex={0}
                >
                  {/* Contenedor con contra-rotación para mantener todo mirando hacia abajo */}
                  <div className="counter-rotate">
                    {/* Círculo del icono con efectos mejorados */}
                    <div className="icon-circle">
                      {/* Efecto de brillo en hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-cyan-400/0 group-hover:from-blue-400/20 group-hover:to-cyan-400/20 rounded-full transition-all duration-300"></div>
                      
                      <div className="flex flex-col items-center justify-center relative z-10">
                        <item.icon className="icon-size text-blue-600 group-hover:text-blue-700 transition-colors duration-300 drop-shadow-sm" />
                      </div>

                      {/* Pulso animado */}
                      <div className="absolute inset-0 rounded-full border-2 border-blue-300 animate-ping opacity-20 group-hover:opacity-40"></div>
                    </div>

                    {/* Etiqueta del título */}
                    <div className="mt-2 text-center">
                      <span className="title-label">
                        {item.title}
                      </span>
                    </div>

                    {/* Tooltip con descripción */}
                    <div className={`tooltip ${hoveredIcon === item.id ? 'tooltip-visible' : ''}`}>
                      <div className="text-xs sm:text-sm text-gray-700 text-center leading-relaxed">
                        {item.description}
                      </div>
                      {/* Flecha del tooltip */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Líneas conectoras animadas */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:"#3b82f6", stopOpacity:"0.3"}} />
                    <stop offset="100%" style={{stopColor:"#06b6d4", stopOpacity:"0.3"}} />
                  </linearGradient>
                </defs>
                {/* Líneas que conectan los círculos */}
                <circle cx="50%" cy="50%" r="45%" fill="none" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="10,5" className="animate-pulse">
                  <animate attributeName="stroke-dashoffset" values="0;-15" dur="2s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>

            {/* Texto central */}
            <div 
              data-reveal
              className="absolute inset-0 flex items-center justify-center reveal pointer-events-none"
              style={{ transitionDelay: "400ms" }}
            >
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg border border-white/50">
                <p className="text-base sm:text-lg md:text-xl font-semibold text-blue-800 mb-1">Impact</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de estadísticas - Más compacta */}
        <div className="mt-4 sm:mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
          {[
            { number: "15+", label: "Active Projects" },
            { number: "50+", label: "Collaborators" },
            { number: "3", label: "Sectors" },
            { number: "10+", label: "Publications" }
          ].map((stat, index) => (
            <div 
              key={index}
              data-reveal
              className="text-center reveal bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
              style={{ transitionDelay: `${480 + index * 60}ms` }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700 mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Contenedor principal de la animación - Responsive */
        .circle-animation-container {
          position: relative;
          width: 280px;
          height: 280px;
        }

        @media (min-width: 480px) {
          .circle-animation-container {
            width: 350px;
            height: 350px;
          }
        }

        @media (min-width: 640px) {
          .circle-animation-container {
            width: 400px;
            height: 400px;
          }
        }

        @media (min-width: 768px) {
          .circle-animation-container {
            width: 450px;
            height: 450px;
          }
        }

        @media (min-width: 1024px) {
          .circle-animation-container {
            width: 500px;
            height: 500px;
          }
        }

        .circle-container {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          animation: spin-container 30s linear infinite;
        }

        .icon-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .counter-rotate {
          animation: reverse-spin 30s linear infinite;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Círculos de iconos - Responsive */
        .icon-circle {
          position: relative;
          width: 60px;
          height: 60px;
          background: linear-gradient(to bottom right, white, rgb(239 246 255));
          border-radius: 50%;
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
          border: 2px solid rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(4px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          transition: all 0.3s;
        }

        @media (min-width: 480px) {
          .icon-circle {
            width: 70px;
            height: 70px;
          }
        }

        @media (min-width: 640px) {
          .icon-circle {
            width: 80px;
            height: 80px;
          }
        }

        @media (min-width: 768px) {
          .icon-circle {
            width: 90px;
            height: 90px;
          }
        }

        @media (min-width: 1024px) {
          .icon-circle {
            width: 100px;
            height: 100px;
          }
        }

        .group:hover .icon-circle {
          transform: scale(1.1) translateY(-0.5rem);
          box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
        }

        /* Tamaños de iconos - Responsive */
        .icon-size {
          font-size: 2rem;
        }

        @media (min-width: 480px) {
          .icon-size {
            font-size: 2.25rem;
          }
        }

        @media (min-width: 640px) {
          .icon-size {
            font-size: 2.5rem;
          }
        }

        @media (min-width: 768px) {
          .icon-size {
            font-size: 2.75rem;
          }
        }

        @media (min-width: 1024px) {
          .icon-size {
            font-size: 3rem;
          }
        }

        /* Etiquetas de título - Responsive */
        .title-label {
          font-size: 0.75rem;
          color: rgb(30 64 175);
          font-weight: 600;
          background-color: rgba(255, 255, 255, 0.8);
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          white-space: nowrap;
        }

        @media (min-width: 640px) {
          .title-label {
            font-size: 0.875rem;
          }
        }

        @media (min-width: 768px) {
          .title-label {
            font-size: 1rem;
          }
        }

        /* Tooltips - Responsive */
        .tooltip {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(-1rem) scale(0.95);
          margin-top: 1rem;
          width: 200px;
          padding: 0.75rem;
          background-color: white;
          border-radius: 0.75rem;
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
          border: 1px solid rgb(229 231 235);
          transition: all 0.3s;
          opacity: 0;
          pointer-events: none;
        }

        @media (min-width: 640px) {
          .tooltip {
            width: 240px;
            padding: 1rem;
          }
        }

        @media (min-width: 768px) {
          .tooltip {
            width: 260px;
          }
        }

        .tooltip-visible {
          opacity: 1;
          transform: translateX(-50%) translateY(0) scale(1);
          pointer-events: auto;
        }

        @keyframes spin-container {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes reverse-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        /* Animación suave para los tooltips */
        .icon-wrapper:hover .absolute {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal { transition: none; transform: none; opacity: 1; }
          .circle-container, .counter-rotate, .animate-pulse, .animate-bounce, .animate-ping { 
            animation: none !important; 
          }
        }
      `}</style>
    </section>
  );
};

export default WhatWeWant;