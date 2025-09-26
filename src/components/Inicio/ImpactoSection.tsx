import Image from "next/image";
import Link from "next/link";

const ImpactoSection = () => {
  return (
<section id="impacto" className="min-h-screen bg-white py-30 px-4">
        <div className="w-full flex justify-center items-center pb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-0 text-center">IMPACTO</h2>
        </div>
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row gap-10 md:gap-20">
            <div className="flex flex-col justify-between w-full md:w-1/2">
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4 text-center">PARA MEJORAR EL MUNDO</h2>
               <Image
                src="/ImpactoImg.png" 
                alt="¿Cómo lo hacemos?"
                width={700}
                height={300}
                priority
                className="w-[700px] object-cover rounded-lg mx-auto mt-20"
              />
              <div className="flex justify-center items-center mt-10 sm:mt-16 md:mt-20">
                <Link
                  href="impacto/informacion-de-referencia"
                  className="group inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 text-base sm:text-lg md:text-xl lg:text-2xl bg-quienes-somos-button text-white font-semibold rounded-xl hover:bg-blue-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-out"
                >
                  Saber más
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full md:w-1/2">
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4 text-center">PREMIOS</h2>
              <Image
                src="/Premios_Inicio.webp"
                alt="¿Cómo lo hacemos?"
                width={700}   
                height={200}
                priority
                className="w-[450px] h-[500px] object-cover rounded-lg mx-auto"
              />

              <div className="flex justify-center items-center mt-10 sm:mt-16 md:mt-20">
                <Link
                  href="impacto/#premios-reconocimientos"
                  className="group inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 text-base sm:text-lg md:text-xl lg:text-2xl bg-quienes-somos-button text-white font-semibold rounded-xl hover:bg-blue-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-out"
                >
                  Ver más
                </Link>
              </div>
            </div>
          </div>
        </div>

      </section>
  );
};

export default ImpactoSection;