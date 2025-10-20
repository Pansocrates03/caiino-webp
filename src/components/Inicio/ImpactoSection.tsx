'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ImpactoSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="impacto" className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white py-16 sm:py-20 md:py-24 px-4 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-200/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Título principal */}
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            IMPACTO
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Grid de contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          
          {/* Card: Para Mejorar el Mundo */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full flex flex-col group">
              {/* Header de la card */}
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
                  PARA MEJORAR EL MUNDO
                </h3>
              </div>

              {/* Contenido de la card */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                {/* Imagen */}
                <div className="relative mb-6 overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Image
                    src="/portada-impacto.jpg" 
                    alt="Para mejorar el mundo"
                    width={700}
                    height={400}
                    priority
                    className="w-full h-[300px] sm:h-[350px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Descripción */}
                <div className="mb-6 flex-1">
                  <p className="text-gray-600 text-center text-sm sm:text-base leading-relaxed">
                    Descubre cómo nuestras iniciativas están generando un cambio positivo en la sociedad y el medio ambiente.
                  </p>
                </div>

                {/* Botón */}
                <div className="flex justify-center">
                  <Link
                    href="impacto/informacion-de-referencia"
                    className="group/btn relative inline-flex items-center gap-2 px-8 py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1"
                  >
                    <span className="relative z-10">Saber más</span>
                    <svg 
                      className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>


          {/* Card: Premios */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full flex flex-col group">
              {/* Header de la card */}
              <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center flex items-center justify-center gap-3">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  PREMIOS
                </h3>
              </div>

              {/* Contenido de la card */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                {/* Imagen */}
                <div className="relative mb-6 overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Image
                    src="/Premios_Inicio.webp"
                    alt="Premios y reconocimientos"
                    width={700}   
                    height={500}
                    priority
                    className="w-full h-[300px] sm:h-[350px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Badge decorativo */}
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-20">
                    🏆 Reconocidos
                  </div>
                </div>

                {/* Descripción */}
                <div className="mb-6 flex-1">
                  <p className="text-gray-600 text-center text-sm sm:text-base leading-relaxed">
                    Conoce los reconocimientos y premios que hemos recibido por nuestro trabajo e impacto en la comunidad.
                  </p>
                </div>

                {/* Botón */}
                <div className="flex justify-center">
                  <Link
                    href="impacto/#premios-reconocimientos"
                    className="group/btn relative inline-flex items-center gap-2 px-8 py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50 hover:-translate-y-1"
                  >
                    <span className="relative z-10">Ver más</span>
                    <svg 
                      className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-600 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

{/* Estadísticas o elementos adicionales (opcional)
        <div className={`mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { icon: "🌍", label: "Global", value: "Impact" },
            { icon: "👥", label: "Personas", value: "Impactadas" },
            { icon: "🏆", label: "Premios", value: "Recibidos" },
            { icon: "💡", label: "Proyectos", value: "Activos" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 text-center group hover:-translate-y-1"
            >
              <div className="text-3xl sm:text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mb-1">{stat.label}</div>
              <div className="text-sm sm:text-base font-semibold text-blue-700">{stat.value}</div>
            </div>
          ))}
        </div>
*/}
      </div>
    </section>
  );
};

export default ImpactoSection;