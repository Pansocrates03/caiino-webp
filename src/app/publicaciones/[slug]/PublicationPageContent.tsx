// publications/[slug]/PublicationPageContent.tsx (Corregido)
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import Publication from '@/components/Publication';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { NewPublication } from '@/models/Publication';

type Language = 'es' | 'en' | 'pt';

// --- PASO 1: Quitar 'language' de los Props ---
type Props = {
  publication: NewPublication;
};

// --- PASO 2: Ya no se recibe 'initialLanguage' ---
export default function PublicationPageContent({ publication }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // --- PASO 3: Derivar el idioma DIRECTAMENTE de la URL ---
  // No necesitamos useState ni useEffect. useSearchParams es el estado.
  const langFromParams = searchParams.get('lang');
  const language: Language = (langFromParams === 'en' || langFromParams === 'es' || langFromParams == 'pt') ? langFromParams : 'es';
  const content = publication.languages[language] || publication.languages['es']!; // Fallback to 'es' if selected language not available

  return (
    <div className="min-h-screen bg-white py-20 relative">
      {/* 
      <div className="absolute top-6 right-15">
        <LanguageSwitcher 
          currentLanguage={language} // Usar el idioma derivado
          onLanguageChange={handleLanguageChange}
        />
      </div>
      */}
  
      <div className="container mx-auto px-4 max-w-4xl">
        <Publication 
          publication={publication}
          language={language} // Usar el idioma derivado
        />
      </div>
    </div>
  );
}