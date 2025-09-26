'use client'; 

import { FaBalanceScale } from "react-icons/fa";
import { TfiAgenda } from "react-icons/tfi";
import { GiPublicSpeaker } from "react-icons/gi";
import { LiaUniversitySolid } from "react-icons/lia";
import Image from "next/image";

const QuePretendemos = () => {
  return (
    <section id="que-pretendemos" className="lg:min-h-screen bg-white pb-6 sm:pb-10 pt-10 sm:pt-16 md:pt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-20 sm:mb-12 md:mb-16 lg:mb-20">
          ¿QUÉ PRETENDEMOS?
        </h2>
        <div className="lg:w-[65%] xl:w-[60%]">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed lg:leading-relaxed">
             Colaborar con la academia, gobierno e industria para genera y cumplir nuestro objetivo. Esto a través de la participación e impacto en 4 rubros:
          </p>
        </div>

        {/* Contenedor de la animación */}
        <div className="relative w-full h-[600px] flex items-center justify-center mt-10 md:mt-16 lg:mt-20">
          {/* Círculo principal */}
          <div className="absolute w-[600px] h-[600px] bg-[#3270B6] rounded-full circle-container">
            
            {/* Círculo 1: Política pública */}
            <div className="icon-wrapper absolute top-0 left-1/2 -translate-x-1/2 bg-[#A2E3F5] rounded-full w-50 h-50 flex flex-col items-center justify-center text-center">
              <div className="icon-content flex flex-col items-center justify-center">
                <GiPublicSpeaker className="text-6xl text-[#3270B6]" />
                <span className="text-sm text-[#3270B6] mt-2 font-bold">Política pública</span>
              </div>
            </div>
            
            {/* Círculo 2: Agenda de Gobierno */}
            <div className="icon-wrapper absolute top-1/2 left-full -translate-x-full -translate-y-1/2 bg-[#A2E3F5] rounded-full w-50 h-50 flex flex-col items-center justify-center text-center" tabIndex={0}>
              <div className="icon-content flex flex-col items-center justify-center">
                <FaBalanceScale className="text-6xl text-[#3270B6]" />
                <span className="text-sm text-[#3270B6] mt-2 font-bold leading-none">
                  <span className="whitespace-nowrap">Agenda de</span>
                  <br />
                  <span>Gobierno</span>
                </span>
              </div>
            </div>
            
            {/* Círculo 3: Leyes */}
            <div className="icon-wrapper absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#A2E3F5] rounded-full w-50 h-50 flex flex-col items-center justify-center text-center">
              <div className="icon-content flex flex-col items-center justify-center">
                <LiaUniversitySolid className="text-7xl text-[#3270B6]" />
                <span className="text-sm text-[#3270B6] mt-2 font-bold">Leyes</span>
              </div>
            </div>
            
            {/* Círculo 4: Agenda pública */}
            <div className="icon-wrapper absolute top-1/2 left-0 -translate-x-0 -translate-y-1/2 bg-[#A2E3F5] rounded-full w-50 h-50 flex flex-col items-center justify-center text-center">
              <div className="icon-content flex flex-col items-center justify-center">
                <TfiAgenda className="text-6xl text-[#3270B6]" />
                <span className="text-sm text-[#3270B6] mt-2 font-bold">Agenda pública</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center mt-10">
          <Image
            src="/QUEPRETENDEMOS_VS.png"
            alt="¿Qué pretendemos?"
            width={1400}
            height={250}
            priority
            className="w-full max-w-[1400px]"
          />
        </div>
      </div>

      <style jsx>{`
        .circle-container {
          animation: spin-container 20s linear infinite;
        }

        .icon-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.5s ease-in-out;
        }
        
        .icon-content {
          animation: reverse-spin 20s linear infinite;
        }

        @keyframes spin-container {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes reverse-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>
    </section>
  );
};

export default QuePretendemos;