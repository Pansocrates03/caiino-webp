"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const graficos = [
    {
        title: "Invenciones y Género",
        url: "https://app.powerbi.com/view?r=eyJrIjoiMDgzNWM2ZGYtYmE5OS00YjExLWE2OWItMDllZjYzNzc5ZTBmIiwidCI6IjQ2ODM5NThlLTBkMDgtNDZmNi04MjRlLTkzOGY0MjBlZWJlYSIsImMiOjR9",
    },
    {
        title: "Desglose por Estado",
        url: "https://app.powerbi.com/view?r=eyJrIjoiMDgzNWM2ZGYtYmE5OS00YjExLWE2OWItMDllZjYzNzc5ZTBmIiwidCI6IjQ2ODM5NThlLTBkMDgtNDZmNi04MjRlLTkzOGY0MjBlZWJlYSIsImMiOjR9",
    },
    {
        title: "Mujeres patentado",
        url: "https://app.powerbi.com/view?r=eyJrIjoiOTAxZWI1M2YtNzhjMS00ZTBlLTkxYWYtMjBkMGNjNTIyZDllIiwidCI6IjQ2ODM5NThlLTBkMDgtNDZmNi04MjRlLTkzOGY0MjBlZWJlYSIsImMiOjR9"
    },
    {
        title: "Proporción de patentes",
        url: "https://app.powerbi.com/view?r=eyJrIjoiNTI0NzllMzYtYjk4OC00YjNiLWI3ODYtMjU0N2Y3OWE3M2UxIiwidCI6IjQ2ODM5NThlLTBkMDgtNDZmNi04MjRlLTkzOGY0MjBlZWJlYSIsImMiOjR9",
    },
    {
        title: "Mapa de invenciones",
        url: "https://app.powerbi.com/view?r=eyJrIjoiZWFiNWY5MjgtZTBiYy00NDg5LTliN2MtNmM4ZDQ1ZDc1ZjhjIiwidCI6IjQ2ODM5NThlLTBkMDgtNDZmNi04MjRlLTkzOGY0MjBlZWJlYSIsImMiOjR9"
    }
].filter(grafico => !grafico.url.includes("twitter.com")); // Filtramos el iframe de Twitter

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Invenciones y Género en México
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