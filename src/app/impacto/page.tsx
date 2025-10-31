import LazyYouTube from '@/components/lazyYoutube'
import React from 'react'
import ImpactCards from '@/components/ImpactCards';
import EventCarousel from "@/components/Event";
import { impactos } from "@/data/impact";
import ImpactoSection from '@/components/Inicio/ImpactoSection';

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

      <ImpactoSection />

    
    </div>
  )
}