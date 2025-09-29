'use client';

import { FaBalanceScale } from "react-icons/fa";
import { TfiAgenda } from "react-icons/tfi";
import { GiPublicSpeaker } from "react-icons/gi";
import { LiaUniversitySolid } from "react-icons/lia";
import React, { useEffect, useState } from "react";
import useReveal from "@/hooks/useReveal";

const QuePretendemos = () => {
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
      title: "Política pública",
      description: "Desarrollamos propuestas de políticas públicas basadas en evidencia científica",
      position: "top-0 left-1/2 -translate-x-1/2",
      delay: "140ms"
    },
    {
      id: 2,
      icon: FaBalanceScale,
      title: "Agenda de Gobierno",
      description: "Colaboramos en la construcción de agendas gubernamentales efectivas",
      position: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
      delay: "200ms"
    },
    {
      id: 3,
      icon: LiaUniversitySolid,
      title: "Leyes",
      description: "Participamos en la creación y análisis de marcos normativos",
      position: "bottom-0 left-1/2 -translate-x-1/2",
      delay: "260ms"
    },
    {
      id: 4,
      icon: TfiAgenda,
      title: "Agenda pública",
      description: "Impulsamos temas de interés público en el debate nacional",
      position: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
      delay: "320ms"
    }
  ];

  return (
    <section id="que-pretendemos" className="relative lg:min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pb-6 sm:pb-10 pt-10 sm:pt-16 md:pt-20 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-blue-300/30 rounded-full blur-xl animate-bounce delay-500"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2
            data-reveal
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 reveal bg-gradient-to-r from-blue-800 to-cyan-600 bg-clip-text text-transparent"
            style={{ transitionDelay: "0ms" }}
          >
            ¿QUÉ PRETENDEMOS?
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <p
            data-reveal
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed lg:leading-relaxed text-gray-700 text-center reveal"
            style={{ transitionDelay: "80ms" }}
          >
            Colaborar con la academia, gobierno e industria para generar y cumplir nuestro objetivo. 
            Esto a través de la <span className="font-semibold text-blue-700">participación e impacto</span> en 4 rubros:
          </p>
        </div>

        {/* Contenedor de la animación mejorado */}
        <div className="relative w-full h-[700px] flex items-center justify-center mt-5">
          {/* Círculo principal con gradientes y efectos */}
          <div className="absolute w-[400px] h-[400px] md:w-[450px] md:h-[450px] rounded-full circle-container">
            {/* Círculo de fondo con gradiente */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-300 rounded-full shadow-2xl"></div>
            
            {/* Círculo interno con efecto glass */}
            <div className="absolute inset-4 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-sm rounded-full border border-white/30"></div>
            
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
                {/* Círculo del icono con efectos mejorados */}
                <div className="relative w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-white to-blue-50 rounded-full shadow-xl border-2 border-white/50 backdrop-blur-sm flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:-translate-y-2">
                  
                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-cyan-400/0 group-hover:from-blue-400/20 group-hover:to-cyan-400/20 rounded-full transition-all duration-300"></div>
                  
                  <div className="icon-content flex flex-col items-center justify-center relative z-10">
                    <item.icon className="text-4xl md:text-5xl text-blue-600 group-hover:text-blue-700 transition-colors duration-300 drop-shadow-sm" />
                  </div>

                  {/* Pulso animado */}
                  <div className="absolute inset-0 rounded-full border-2 border-blue-300 animate-ping opacity-20 group-hover:opacity-40"></div>
                </div>

                {/* Etiqueta del título - NO rota con el círculo */}
                <div className="mt-3 text-center fixed-text">
                  <span className="text-sm md:text-base text-blue-800 font-semibold bg-white/80 px-3 py-1 rounded-full shadow-sm backdrop-blur-sm border border-white/50 whitespace-nowrap">
                    {item.title}
                  </span>
                </div>

                {/* Tooltip con descripción */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 p-4 bg-white rounded-xl shadow-xl border border-gray-200 transition-all duration-300 transform ${
                  hoveredIcon === item.id 
                    ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
                    : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
                }`}>
                  <div className="text-sm text-gray-700 text-center leading-relaxed">
                    {item.description}
                  </div>
                  {/* Flecha del tooltip */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>
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
              <circle cx="50%" cy="50%" r="180" fill="none" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="10,5" className="animate-pulse">
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
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-white/50">
              <p className="text-lg md:text-xl font-semibold text-blue-800 mb-1">Impacto</p>
              <p className="text-sm text-blue-600">Multisectorial</p>
            </div>
          </div>
        </div>

        {/* Sección adicional con estadísticas o métricas */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: "15+", label: "Proyectos activos" },
            { number: "50+", label: "Colaboradores" },
            { number: "3", label: "Sectores" },
            { number: "10+", label: "Publicaciones" }
          ].map((stat, index) => (
            <div 
              key={index}
              data-reveal
              className="text-center reveal bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
              style={{ transitionDelay: `${480 + index * 60}ms` }}
            >
              <div className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .circle-container {
          animation: spin-container 30s linear infinite;
        }

        .icon-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .icon-content {
          animation: reverse-spin 30s linear infinite;
        }

        .fixed-text {
          animation: reverse-spin 30s linear infinite;
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
          .circle-container, .icon-content, .animate-pulse, .animate-bounce, .animate-ping { 
            animation: none !important; 
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .circle-container {
            transform: scale(0.8);
          }
        }
      `}</style>
    </section>
  );
};

export default QuePretendemos;