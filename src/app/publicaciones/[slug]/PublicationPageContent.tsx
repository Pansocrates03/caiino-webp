// publications/[slug]/PublicationPageContent.tsx (Corregido)
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import Publication from '@/components/Publication';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Publication as PublicationType } from '@/models/Publication';

type Language = 'es' | 'en';

// --- PASO 1: Quitar 'language' de los Props ---
type Props = {
  publication: PublicationType;
};

// --- PASO 2: Ya no se recibe 'initialLanguage' ---
export default function PublicationPageContent({ publication }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // --- PASO 3: Derivar el idioma DIRECTAMENTE de la URL ---
  // No necesitamos useState ni useEffect. useSearchParams es el estado.
  const langFromParams = searchParams.get('lang');
  const language: Language = (langFromParams === 'en' || langFromParams === 'es') ? langFromParams : 'es';

  const handleLanguageChange = (newLanguage: Language) => {
    // Ya no se necesita setLanguage()
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', newLanguage);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const content = publication.multilingual[language];

  return (
    <div className="min-h-screen bg-white py-20 relative">
      <div className="absolute top-6 right-15">
        <LanguageSwitcher 
          currentLanguage={language} // Usar el idioma derivado
          onLanguageChange={handleLanguageChange}
        />
      </div>
  
      <div className="container mx-auto px-4 max-w-4xl">
        <Publication 
          title={content.title}
          date={publication.date}
          description={content.description}
          media={publication.media}
          content={content.content}
          downloadLink={publication.downloadLink}
          tags={content.tags}
          authors={content.authors}
          language={language} // Usar el idioma derivado
        />
      </div>
    </div>
  );
}