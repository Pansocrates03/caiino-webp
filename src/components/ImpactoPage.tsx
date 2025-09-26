'use client';
import { useState } from 'react';
import Link from 'next/link';
import ImpactFilters from '@/components/ImpactFilters';
import { dataImpacto } from '@/data/informacionData';
import Image from "next/image";
import "./table.css";


export default function InformacionDeReferencia() {

  const [filtros, setFiltros] = useState<{
    año: string[];
    documento: string;
    tipoUsuario: string;
    tipoDoc: string;
  }>({
    año: [],
    documento: '',
    tipoUsuario: '',
    tipoDoc: ''
  });

  const resultados = dataImpacto.filter(item =>
    (filtros.año.length === 0 || filtros.año.includes(item.año.toString())) &&
    (filtros.documento === '' || item.documento === filtros.documento) &&
    (filtros.tipoUsuario === '' || item.tipoUsuario === filtros.tipoUsuario) &&
    (filtros.tipoDoc === '' || item.tipoDoc?.toString() === filtros.tipoDoc)
  );

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center leading-tight">
          Impacto
        </h1>
        <div className="prose max-w-none text-base sm:text-lg lg:prose-lg text-justify">

          <p className="mb-6 text-base sm:text-xl leading-relaxed">
            A continuación de muestra el impacto de CAIINNO por el tipo de usuario que ha utilizado nuestro trabajo como fuente o referencia.
          </p>

          <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8 rounded-lg  bg-white text-black">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0">
              <Image
                src="/LEGISLATIVO.png"
                alt="icono reformas de ley"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                LEGISLATIVO
              </h2>
              <p className="mb-6 text-base sm:text-xl leading-relaxed">
                Congresistas a nivel federal como local han utilizado los trabajos de CAIINNO como referencia para justificar reformas de ley o nuevas legislaciones.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8 rounded-lg  bg-white text-black">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0">
              <Image
                src="/GUBERNAMENTAL.png"
                alt="icono reformas de ley"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                GUBERNAMENTAL
              </h2>
              <p className="mb-6 text-base sm:text-xl leading-relaxed">
                Tanto el gobierno federal como gobiernos estatales han aprovechado los trabajos de CAIINNO como referencia para sus agendas públicas, políticas públicas, e incluso para sus planes estatales de desarrollo.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8 rounded-lg  bg-white text-black">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0">
              <Image
                src="/PRIVADOACADEMICO.png"
                alt="icono reformas de ley"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                PRIVADO/ACADÉMICO
              </h2>
              <p className="mb-6 text-base sm:text-xl leading-relaxed">
                El sector privado y otras ONGs han aprovechado el trabajo de CAIINNO como fuentes o referencias en sus proyectos e investigaciones.
              </p>
            </div>
          </div>



          <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8 rounded-lg  bg-white text-black">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0">
              <Image
                src="/INTERNACIONAL.png"
                alt="icono reformas de ley"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                INTERNACIONAL
              </h2>
              <p className="mb-6 text-base sm:text-xl leading-relaxed">
                Algunos organismos internacionales como la OCDE o el BID, han utilizado el trabajo de CAIINNO como referencia.
              </p>
            </div>
          </div>



          <ImpactFilters onChange={setFiltros} />
          
          <div className="table-wrapper">
              <table className="fl-table">
                  <thead>
                  <tr>
                      <th>#</th>
                      <th>Año</th>
                      <th>Usuario</th>
                      <th>Título</th>
                      <th>pdf</th>
                  </tr>
                  </thead>
                  <tbody>
                    {resultados.map((item, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.año}</td>
                        <td>{item.usuario}</td>
                        <td>{item.documento}</td>
                        <td>
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Ver PDF"
                              className="flex justify-center items-center"
                            >
                              {/* Icono PDF SVG */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-red-600 hover:text-red-800 transition-colors"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.828A2 2 0 0 0 19.414 7.414l-4.828-4.828A2 2 0 0 0 12.172 2H6zm6 1.414L18.586 10H13a1 1 0 0 1-1-1V3.414zM6 4h5v5a3 3 0 0 0 3 3h5v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4zm3 7a1 1 0 1 1 0 2h-.5v4a1 1 0 1 1-2 0v-4H6a1 1 0 1 1 0-2h3zm6 0a1 1 0 1 1 0 2h-1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0v1h1v-1zm-3 2v2h1v-2h-1z"/>
                              </svg>
                            </a>
                          )}
                        </td>
                      </tr>
                    ))}
                  
                  </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
  );
}
