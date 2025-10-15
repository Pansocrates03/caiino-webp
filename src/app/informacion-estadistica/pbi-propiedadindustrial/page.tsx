"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const graficos = [
    {
        title: "Evolución de la Propiedad Industrial",
        url: "https://app.powerbi.com/view?r=eyJrIjoiZDllYWFmMzgtODgwOC00NjA2LTljNDktNDIyZWQ3MjUxZDFkIiwidCI6IjQ2ODM5NThlLTBkMDgtNDZmNi04MjRlLTkzOGY0MjBlZWJlYSIsImMiOjR9"
    },
    {
        title: "Radiografía Estatal",
        url: "https://app.powerbi.com/view?r=eyJrIjoiMjU4ZWE4ODAtZTlmNC00MzRmLWIwN2YtMDQyN2YxMzQ4YjgxIiwidCI6IjQ2ODM5NThlLTBkMDgtNDZmNi04MjRlLTkzOGY0MjBlZWJlYSIsImMiOjR9"
    },
    {
        title: "Mapa Dinámico",
        url: "https://app.powerbi.com/view?r=eyJrIjoiMmY2OTI3M2MtN2Q5YS00NTA2LTg4N2EtZmZlM2Q3NmQ4NTFiIiwidCI6IjQ2ODM5NThlLTBkMDgtNDZmNi04MjRlLTkzOGY0MjBlZWJlYSIsImMiOjR9"
    },
    {
        title: "Evolución de la propiedad Industrial",
        url: "https://app.powerbi.com/view?r=eyJrIjoiNzk1ZDFkNTctZTNmZS00ODhjLWExMTAtMmY1ZDE0YjcwODNiIiwidCI6IjQ2ODM5NThlLTBkMDgtNDZmNi04MjRlLTkzOGY0MjBlZWJlYSIsImMiOjR9",
    },
    {
        title: "Variedades Vegetales en México",
        url: "https://app.powerbi.com/view?r=eyJrIjoiNmMxMmZhNjItNjg0YS00ODBiLTkwMjctZTc0MWUzNDhlZWYzIiwidCI6IjQ2ODM5NThlLTBkMDgtNDZmNi04MjRlLTkzOGY0MjBlZWJlYSIsImMiOjR9"
    },
    {
      title: "Variedades Protegidas Mediante Derecho de Obtentor",
      url: "https://app.powerbi.com/view?r=eyJrIjoiMzlhYWMwZWEtYjBmMC00ZTYzLTgwZTItYmM4MTdjNmNiNDk2IiwidCI6IjQ2ODM5NThlLTBkMDgtNDZmNi04MjRlLTkzOGY0MjBlZWJlYSIsImMiOjR9"
    }
].filter(grafico => !grafico.url.includes("twitter.com")); // Filtramos el iframe de Twitter

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Información estadística nacional sobre Propiedad Industrial
      </h1>

      {/* Navegación de tabs */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {graficos.map((grafico, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={cn(
              "px-4 py-2 rounded-lg transition-all",
              activeTab === index
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-gray-100 hover:bg-gray-200"
            )}
          >
            {grafico.title}
          </button>
        ))}
      </div>

      {/* Contenedor del iframe */}
      <div className="relative bg-white rounded-lg shadow-lg p-4 overflow-hidden">
        <iframe
          src={graficos[activeTab].url}
          width="100%"
          height="863"
          frameBorder="0"
          allowFullScreen={true}
          title={graficos[activeTab].title}
          className="transition-opacity duration-300"
        />
      </div>
    </div>
  );
}