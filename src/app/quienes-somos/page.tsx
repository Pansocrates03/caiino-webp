import LazyYouTube from '@/components/lazyYoutube'
import TeamSection from '@/components/TeamSection'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function QuienesSomos() {
  return (
    <>
      <div className="flex flex-col items-center bg-gradient-to-b from-blue-50 via-white to-white min-h-screen">
        {/* YouTube Video */}
        <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg mt-8 animate-fade-in">
          <LazyYouTube id="0DRcerJtk_c" />
        </div>

        {/* Imagen 1 */}
        <div className="w-full flex justify-center px-2 md:px-0">
          <div className="aspect-[16/9] sm:aspect-[2/1] md:aspect-[21/9] relative mt-12 max-w-5xl w-full rounded-xl overflow-hidden shadow-md animate-fade-in-up">
            <Image
              src="/QUEPRETENDEMOS_VS.png"
              alt="Nuestro equipo trabajando"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Imagen 2 */}
        <div className="w-full flex justify-center">
          <div className="aspect-[16/9] sm:aspect-[2/1] md:aspect-[21/9] relative mt-12 max-w-5xl w-full rounded-xl overflow-hidden shadow-md animate-fade-in-up delay-100">
            <Image
              src="/COMOLOHACEMOS_VE.png"
              alt="Cómo lo hacemos"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Sección de publicaciones */}
      <div className="container mx-auto px-4 py-16 sm:py-20 max-w-5xl">
        <div className="bg-white/80 rounded-2xl shadow-lg p-8 sm:p-12 text-center border border-blue-100 animate-fade-in-up">
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
        <TeamSection language="spanish" />
      </div>

      {/* Animaciones Tailwind personalizadas */}

    </>
  )
}