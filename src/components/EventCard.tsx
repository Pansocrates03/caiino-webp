"use client";
import React, { useState, useEffect } from 'react';
import useReveal from "@/hooks/useReveal";
import { Event } from "@/models/Event";
import Image from "next/image";
import { ImageGallery } from "./ImageGallery";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar, Images } from "lucide-react";

interface EventCardProps {
  item: Event;
}

export function EventCard({ item }: EventCardProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const formattedDate = format(new Date(item.date), "dd 'de' MMMM yyyy", { locale: es });

  // Animación de revelado del texto
      const reveal = useReveal({ selector: "[data-reveal]", threshold: 0.5 });
      const init = reveal?.init;
      
      useEffect(() => {
        const cleanup = init?.();
        return () => {
          // si init devuelve función de cleanup, ejecutarla
          if (typeof cleanup === "function") cleanup();
        };
      }, [init]);

  return (
    <div data-reveal className="reveal bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Imagen principal */}
      <div className="relative aspect-[16/9] cursor-pointer group" onClick={() => setIsGalleryOpen(true)}>
        <Image
          src={item.images[0].url}
          alt={item.images[0].alt || item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-white/90 px-4 py-2 rounded-full flex items-center gap-2">
            <Images className="w-5 h-5" />
            <span className="font-medium">Ver galería</span>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h2>
        
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <Calendar className="w-4 h-4" />
          <time dateTime={item.date}>{formattedDate}</time>
        </div>

        {/* Miniaturas */}
        {item.images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-2">
            {item.images.slice(1, 5).map((image, index) => (
              <button
                key={index}
                onClick={() => setIsGalleryOpen(true)}
                className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden hover:opacity-80 transition-opacity"
              >
                <Image
                  src={image.url}
                  alt={image.alt || ""}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
            {item.images.length > 5 && (
              <button
                onClick={() => setIsGalleryOpen(true)}
                className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-black/60 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                +{item.images.length - 4}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Galería de imágenes */}
      {isGalleryOpen && (
        <ImageGallery
          images={item.images}
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
        />
      )}
    </div>
  );
}