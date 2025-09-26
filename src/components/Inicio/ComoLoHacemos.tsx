import Image from "next/image";
import StepComponent from "../StepComponent";

let steps = [
  { label: "Identificación del problema, reto u oportunidad", image: "/como-lo-hacemos/1.png" },
  { label: "Análisis preliminar del problema, reto u oportunidad", image: "/como-lo-hacemos/1.png" },
  { label: "Identificación de posibles soluciones", image: "/como-lo-hacemos/1.png" },
  { label: "Desarrollo de plan de acción", image: "/como-lo-hacemos/1.png" },
  { label: "Desarrollo de propuesta, acción o solución", image: "/como-lo-hacemos/1.png" },
  { label: "Implementación", image: "/como-lo-hacemos/1.png" },
  { label: "Evaluación", image: "/como-lo-hacemos/1.png" },
] 

const ComoLoHacemos = () => {
  return (
    <section id="como-lo-hacemos" className="lg:min-h-screen pb-0 sm:pb-10 pt-10 sm:pt-16 md:pt-20" style={{ backgroundColor: "#A2E3F5" }}>
    <div className="container mx-auto px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-20">¿CÓMO LO HACEMOS?</h2>
      <div className="w-full flex justify-center flex-col">

          <StepComponent leftMargin={0} stepNumber={1} label="Identificación del problema, reto u oportunidad" />
          <StepComponent leftMargin={8} stepNumber={2} label="Análisis preliminar del problema, reto u oportunidad" />
          <StepComponent leftMargin={16} stepNumber={3} label="Identificación de posibles soluciones" />
          <StepComponent leftMargin={24} stepNumber={4} label="Desarrollo de plan de acción" />
          <StepComponent leftMargin={32} stepNumber={5} label="Desarrollo de propuesta, acción o solución" />
          <StepComponent leftMargin={40} stepNumber={6} label="Implementación" />
          <StepComponent leftMargin={48} stepNumber={7} label="Evaluación" />

      </div>
      <Image
        src="/como-lo-hacemos/1.webp"
        alt="¿Cómo lo hacemos?"
        width={700}   
        height={200}
        priority
        className="w-[450px] h-[500px] object-cover rounded-lg mx-auto"
      />
    </div>
    </section>
  );
};

export default ComoLoHacemos;