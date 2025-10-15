"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

interface InfoCardProps {
  title: string;
  description: string;
  imagePath?: string;
  icon?: React.ReactNode;
  link?: string;
}

export function InfoCard({ title, description, imagePath, icon, link }: InfoCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center gap-4 mb-4">
        {icon && <div className="text-primary">{icon}</div>}
        {imagePath && (
          <div className="relative w-16 h-16">
            <Image
              src={imagePath}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        )}
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-[1000px]" : "max-h-20"}`}>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <Button
          variant="ghost"
          className="text-primary hover:text-primary/80"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              Ver menos
              <ChevronUp className="ml-2 h-4 w-4" />
            </>
          ) : (
            <>
              Ver más
              <ChevronDown className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
        
        {link && (
          <Button variant="link" className="text-primary" onClick={() => window.location.href = link}>
            Explorar →
          </Button>
        )}
      </div>
    </div>
  );
}