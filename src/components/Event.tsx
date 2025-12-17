"use client";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay, { AutoplayType } from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useRef, useState, useCallback, useEffect } from "react";
import { Event } from "@/models/Event";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Maximize2, X } from "lucide-react";

interface EventProps {
  item: Event;
}

export default function EventCarousel({ item }: EventProps) {
  const autoplay = useRef<AutoplayType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaApi, setEmblaApi] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Initialize autoplay only if there are multiple images
  if (item.images.length > 1 && !autoplay.current) {
    autoplay.current = Autoplay({
      delay: 4000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    });
  }

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => {
      const updated = new Set(prev);
      updated.add(index);
      return updated;
    });

    // Verificar si todas las imágenes están cargadas
    if (loadedImages.size + 1 === item.images.length) {
      setIsLoading(false);
    }
  };

  const handleImageError = (index: number) => {
    console.error(`Error al cargar la imagen en el índice ${index}`);
    setLoadedImages((prev) => {
      const updated = new Set(prev);
      updated.add(index); // Marcar como "cargada" para evitar bloqueos
      return updated;
    });

    if (loadedImages.size + 1 === item.images.length) {
      setIsLoading(false);
    }
  };

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback((api: any) => {
    if (!api) return;
    setEmblaApi(api);
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-4">
      {/* Event Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        {item.title}
      </h2>
      
      {/* Carousel Container */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[750px] rounded-lg overflow-hidden shadow-lg bg-gray-100">
        <Carousel
          plugins={autoplay.current ? [autoplay.current] : []}
          opts={{ loop: item.images.length > 1 }}
          onMouseEnter={() => autoplay.current?.stop()}
          onMouseLeave={() => autoplay.current?.play()}
          className="h-full"
          setApi={onSelect}
        >
          <CarouselContent className="h-full">
            {item.images.map((image, index) => (
              <CarouselItem key={index} className="h-full flex items-center justify-center">
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[750px]">
                  {/* Loading skeleton */}
                  {!loadedImages.has(index) && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Skeleton className="w-full h-full" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                      </div>
                    </div>
                  )}
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <button className="group relative w-full h-full" onClick={openDialog}>
                        <Image
                          src={image.url}
                          alt={image.alt || item.title}
                          fill
                          className={cn(
                            "object-contain transition-opacity duration-300 group-hover:brightness-90",
                            loadedImages.has(index) ? "opacity-100" : "opacity-0"
                          )}
                          sizes="(max-width: 768px) 100vw, 80vw"
                          priority={index === 0}
                          onLoad={() => handleImageLoad(index)}
                          onError={() => handleImageError(index)}
                        />
                        <div className="absolute top-2 right-2 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                          <Maximize2 className="h-4 w-4 text-white" />
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="w-[95vw] h-[95vh] max-w-none p-2 bg-black/95 border-none">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={image.url}
                          alt={image.alt || item.title}
                          fill
                          className="object-contain"
                          sizes="95vw"
                          quality={100}
                        />
                        <button
                          onClick={closeDialog}
                          className="absolute top-2 right-2 z-50 p-2 bg-black/70 rounded-full hover:bg-black/90 transition-colors"
                        >
                          <X className="h-6 w-6 text-white" />
                        </button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Only show navigation arrows if there's more than one image */}
          {item.images.length > 1 && (
            <>
              <CarouselPrevious className="absolute -left-12 lg:left-4 z-10 bg-white/80 hover:bg-white/90 transition-colors" />
              <CarouselNext className="absolute -right-12 lg:right-4 z-10 bg-white/80 hover:bg-white/90 transition-colors" />
              {/* Progress indicators */}
              <div className="absolute bottom-4 left-0 right-0 z-20 px-4 flex flex-col gap-2">
                {/* Image counter */}
                <div className="flex justify-center">
                  <div className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {selectedIndex + 1} / {item.images.length}
                  </div>
                </div>
                {/* Dots navigation */}
                <div className="flex justify-center gap-2">
                  {item.images.map((_, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className={cn(
                        "w-2 h-2 rounded-full p-0 transition-all",
                        selectedIndex === index
                          ? "bg-primary scale-125"
                          : "bg-primary/50 hover:bg-primary/70"
                      )}
                      onClick={() => scrollTo(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                {/* Progress bar */}
                <div className="w-full bg-white/20 rounded-full h-1 overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-300 ease-out"
                    style={{
                      width: `${((selectedIndex + 1) / item.images.length) * 100}%`
                    }}
                  />
                </div>
              </div>
            </>
          )}
        </Carousel>
      </div>
    </div>
  );
}