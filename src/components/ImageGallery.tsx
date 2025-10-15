"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ImageGalleryProps {
  images: { url: string; alt?: string }[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export function ImageGallery({ images, isOpen, onClose, initialIndex = 0 }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [currentIndex]);

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const showPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrevious();
    if (e.key === "Escape") onClose();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-screen-xl w-full max-h-[90vh] p-0 bg-black/95 border-none">
        <DialogTitle asChild>
          <VisuallyHidden>Galería de imágenes</VisuallyHidden>
        </DialogTitle>

        <div className="relative w-full h-[calc(100vh-10rem)] flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src={images[currentIndex].url}
              alt={images[currentIndex].alt || `Imagen ${currentIndex + 1}`}
              fill
              className={`object-contain transition-opacity duration-300 ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoadingComplete={() => setIsLoading(false)}
              priority
            />
            
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </div>

          {images.length > 1 && (
            <>
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={showPrevious}
                  className="h-12 w-12 rounded-full bg-black/50 hover:bg-black/70 text-white pointer-events-auto"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={showNext}
                  className="h-12 w-12 rounded-full bg-black/50 hover:bg-black/70 text-white pointer-events-auto"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </div>

              <div className="absolute bottom-4 left-0 right-0">
                <div className="flex justify-center gap-2 px-4 overflow-x-auto pb-2 max-w-full">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden transition-all ${
                        currentIndex === index
                          ? "ring-2 ring-primary scale-110"
                          : "opacity-50 hover:opacity-75"
                      }`}
                    >
                      <Image
                        src={image.url}
                        alt={image.alt || `Miniatura ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </>
          )}

          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/50 hover:bg-black/70 text-white"
            aria-label="Cerrar galería"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}