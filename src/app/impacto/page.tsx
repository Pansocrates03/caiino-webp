import LazyYouTube from '@/components/lazyYoutube'
import React from 'react'
import ImpactCards from '@/components/ImpactCards';
import EventCarousel from "@/components/Event";
import { impactos } from "@/data/impact";

export default function Impacto() {
  const sortedImpactos = impactos.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* YouTube Video Section */}
      <div className="w-full max-w-7xl px-4 pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200 dark:ring-gray-700">
          <LazyYouTube id="4YOGriHPf_4" />
        </div>
      </div>

      {/* Impact Content Section */}
      {/* <div className="w-full max-w-4xl px-4 mb-5">        
        <p className="text-lg md:text-2xl mb-8 leading-relaxed font-bold">
          Para CAIINNO es clave la generación de nuevo conocimiento que sirva de base para provocar cambios positivos, pero es igual de importante que esa información se materialice en cambios concretos. Esto puede ser a través de figuras como las siguientes (por favor selecciona una opción):
        </p>
        <ImpactCards/>
      </div> */}

      {/* Awards Section */}
      <section id="premios-reconocimientos" className="w-full max-w-7xl px-4 py-12 md:py-16 lg:py-20">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent via-blue-600 to-transparent rounded-full"></div>
              <svg 
                className="w-8 h-8 text-yellow-500"
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <div className="h-1 w-12 bg-gradient-to-r from-transparent via-blue-600 to-transparent rounded-full"></div>
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Premios y Reconocimientos
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Celebrando la excelencia y los logros destacados de nuestra comunidad
          </p>
        </div>

        {/* Events Grid */}
        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          {sortedImpactos.map((impacto, index) => (
            <div 
              key={impacto.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <EventCarousel item={impacto} />
              
              {/* Divider (except for last item) */}
              {index < sortedImpactos.length - 1 && (
                <div className="mt-16 md:mt-20 flex items-center justify-center">
                  <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {sortedImpactos.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <svg 
                className="w-12 h-12 text-gray-400"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              No hay premios disponibles
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Los reconocimientos aparecerán aquí próximamente
            </p>
          </div>
        )}
      </section>
    </div>
  )
}