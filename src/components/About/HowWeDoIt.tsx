'use client';
import React, { useState, useEffect } from 'react';
import { 
  Search, 
  BarChart3, 
  Lightbulb, 
  FileText, 
  Wrench, 
  Play, 
  CheckCircle,
  ArrowDown,
  Target,
  Zap
} from 'lucide-react';

// Iconos para cada paso
const stepIcons = [
  { icon: Search, color: "text-red-600", bgColor: "bg-red-100" },
  { icon: BarChart3, color: "text-orange-600", bgColor: "bg-orange-100" },
  { icon: Lightbulb, color: "text-yellow-600", bgColor: "bg-yellow-100" },
  { icon: FileText, color: "text-green-600", bgColor: "bg-green-100" },
  { icon: Wrench, color: "text-blue-600", bgColor: "bg-blue-100" },
  { icon: Play, color: "text-purple-600", bgColor: "bg-purple-100" },
  { icon: CheckCircle, color: "text-emerald-600", bgColor: "bg-emerald-100" },
];

const steps = [
    {
        label: "Identification of the problem, challenge, or opportunity",
        description: "We detect and clearly define the challenge to be addressed through research and context analysis",
        image: "/how-we-do-it/1.png"
    },
    {
        label: "Preliminary analysis of the problem, challenge, or opportunity",
        description: "We conduct an in-depth study to understand the causes, effects, and dimensions of the identified problem",
        image: "/how-we-do-it/1.png"
    },
    {
        label: "Identification of possible solutions",
        description: "We generate multiple alternative solutions based on evidence and best practices",
        image: "/how-we-do-it/1.png"
    },
    {
        label: "Development of an action plan",
        description: "We create a detailed strategy with specific objectives, resources, and timeline",
        image: "/how-we-do-it/1.png"
    },
    {
        label: "Proposal, action, or solution development",
        description: "We develop the final solution by integrating all the elements of the action plan",
        image: "/how-we-do-it/1.png"
    },
    {
        label: "Implementation",
        description: "We execute the proposed solution with continuous monitoring and necessary adjustments",
        image: "/how-we-do-it/1.png"
    },
    {
        label: "Evaluation",
        description: "We measure results, impact, and effectiveness to generate learning and future improvements",
        image: "/how-we-do-it/1.png"
    },
];

const StepComponent = ({ step, index, isActive, onHover, onLeave }) => {
  const IconComponent = stepIcons[index].icon;
  const delay = index * 100;

  return (
    <div
      className={`group relative transition-all duration-500 transform ${
        isActive ? 'scale-105 z-20' : 'scale-100 z-10'
      }`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
      onFocus={() => onHover(index)}
      onBlur={onLeave}
      tabIndex={0}
    >
      {/* Línea vertical conectora (excepto en el último) */}
      {index < steps.length - 1 && (
        <div className="absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-blue-400 to-cyan-400 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-top"></div>
        </div>
      )}

      <div className="flex items-start space-x-6 p-6">
        {/* Círculo del paso con icono */}
        <div className="relative flex-shrink-0">
          {/* Círculo de fondo animado */}
          <div className={`absolute inset-0 ${stepIcons[index].bgColor} rounded-full transition-all duration-300 ${
            isActive ? 'scale-125 opacity-30' : 'scale-100 opacity-20'
          }`}></div>
          
          {/* Círculo principal */}
          <div className={`relative w-16 h-16 bg-white border-3 border-blue-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
            isActive ? 'border-blue-600 shadow-2xl' : 'group-hover:border-blue-600 group-hover:shadow-xl'
          }`}>
            {/* Número del paso */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
              {index + 1}
            </div>
            
            {/* Icono */}
            <IconComponent className={`w-7 h-7 ${stepIcons[index].color} transition-colors duration-300`} />
          </div>

          {/* Pulso animado */}
          <div className={`absolute inset-0 border-2 border-blue-400 rounded-full transition-all duration-1000 ${
            isActive ? 'animate-ping opacity-20' : 'opacity-0'
          }`}></div>
        </div>

        {/* Contenido del paso */}
        <div className={`flex-1 transition-all duration-300 ${
          isActive ? 'translate-x-2' : 'translate-x-0'
        }`}>
          {/* Título */}
          <h3 className={`text-lg md:text-xl font-bold mb-3 transition-colors duration-300 ${
            isActive ? 'text-blue-800' : 'text-gray-800 group-hover:text-blue-700'
          }`}>
            {step.label}
          </h3>

          {/* Barra de progreso decorativa */}
          <div className="w-full h-1 bg-gray-200 rounded-full mb-4 overflow-hidden">
            <div className={`h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500 ${
              isActive ? 'w-full' : 'w-0 group-hover:w-3/4'
            }`}></div>
          </div>

          {/* Descripción */}
          <p className={`text-gray-600 leading-relaxed transition-all duration-300 ${
            isActive ? 'text-gray-700 opacity-100' : 'opacity-80 group-hover:opacity-100'
          }`}>
            {step.description}
          </p>

          
        </div>
      </div>

      {/* Efecto de hover de fondo */}
      <div className={`absolute inset-0 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 rounded-2xl transition-all duration-300 -z-10 ${
        isActive ? 'opacity-100 shadow-xl' : 'opacity-0 group-hover:opacity-70'
      }`}></div>
    </div>
  );
};

const HowWeDoIt = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // removed auto-cycle interval: steps only activate on hover/focus
  }, []);

  return (
    <section 
      id="como-lo-hacemos" 
      className="relative lg:min-h-screen pb-10 pt-10 sm:pt-16 md:pt-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl animate-bounce delay-500"></div>
        
        {/* Patrón geométrico sutil */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              HOW WE DO IT
            </h2>
            
            {/* Separador decorativo */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-blue-500"></div>
              <Zap className="w-6 h-6 text-blue-600" />
              <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-cyan-500"></div>
            </div>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our systematic approach ensures effective results through
                <span className="font-semibold text-blue-700">7 key stages</span> of collaborative work
            </p>
          </div>
        </div>


        {/* Steps Container */}
        <div className="max-w-4xl mx-auto">
          <div className={`space-y-2 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {steps.map((step, index) => (
              <StepComponent
                key={index}
                step={step}
                index={index}
                isActive={activeStep === index}
                onHover={setActiveStep}
                onLeave={() => setActiveStep(null)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowWeDoIt;