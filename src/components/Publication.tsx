import { NewPublication, PublicationProps } from "@/models/Publication";
import Image from "next/image";
import PersuasiveYouTube from "@/components/lazyYoutube";

export default function Publication({
  publication,
  language,
}: { publication: NewPublication; language: 'es' | 'en' | 'pt' }) {

  const hasEnglishVersion = language === "es" && publication.languages["en"];
  const hasPortugueseVersion = language === "es" && publication.languages["pt"];

  const titleText: Record<string, string> = {
    es: "Descarga esta publicación",
    en: "Download this publication",
    pt: "Baixe esta publicação",
  };
  const descriptionText: Record<string, string> = {
    es: "Descarga la publicación en formato PDF para leerla sin conexión.",
    en: "Download the publication in PDF format to read it offline.",
    pt: "Baixe a publicação em formato PDF para ler offline.",
  };
  const downloadText: Record<string, string> = {
    es: "Descargar",
    en: "Download",
    pt: "Baixar",
  };

  return (
    <>
      <h1 className="text-2xl sm:text-2xl md:text-4xl font-bold mb-12 text-center">{publication.languages[language]?.title}</h1>

      {/* Media Section */}
      <div className="mb-12">
        <div className="relative aspect-[16/9] w-full mb-6">
          <Image
            src={publication.languages[language]?.image || ''}
            alt={publication.languages[language]?.title || ''}
            fill
            className="object-contain rounded-lg"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>

        {publication.languages[language]?.youtubeId && (
          <div className="mb-6">
            <PersuasiveYouTube id={publication.languages[language]!.youtubeId!} />
          </div>
        )}

      </div>

      {/* Content Section */}
      <div className="space-y-8 mb-12">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">{titleText[language]}</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4">{descriptionText[language]}</p>
          <a
            href={publication.languages[language]?.downloadLink}
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
          >
            {downloadText[language]} PDF
          </a>
        </div>

        {/* EN CASO DE QUE ESTEMOS EN ESPAÑOL Y HAYA VERISON EN INGLES, MOSTRAR LA PUBLICACION EN INGLES */}
        {hasEnglishVersion && (
          <div className="text-center mt-8">
            <a
              href={publication.languages["en"]?.downloadLink}
              className="inline-block px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300"
            >
              Download English Version
            </a>
          </div>
        )}

        {/* EN CASO DE QUE ESTEMOS EN ESPAÑOL Y HAYA VERISON EN PORTUGUES, MOSTRAR LA PUBLICACION EN PORTUGUES */}
        {hasPortugueseVersion && (
          <div className="text-center mt-8">
            <a
              href={publication.languages["pt"]?.downloadLink}
              className="inline-block px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300"
            >
              Baixar versão em português
            </a>
          </div>
        )}

        
        {publication.languages[language]?.otherLinks?.map((section, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg mt-4">
            <h3 className="text-lg font-semibold mb-2">{section.label}</h3>
            <a
              href={section.url}
              className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              {language === "es" ? "Ver documento" : "View document"}
            </a>
          </div>
        ))}
      </div>

      {/* Tags Section */}
      {publication.languages[language]?.tags && (
        <div className="mt-8 flex flex-wrap gap-2">
          {publication.languages[language]!.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 px-3 py-1 rounded-full text-sm sm:text-base"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </>
  );
}