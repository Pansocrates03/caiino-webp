// publications/[slug]/page.tsx (ACTUALIZADO CON SUSPENSE)

import { publications } from '@/data/publications_test';
import { notFound } from 'next/navigation';
import PublicationPageContent from './PublicationPageContent';
import { Suspense } from 'react'; // <--- 1. IMPORTA SUSPENSE

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return publications.map((p) => ({
    slug: p.slug,
  }));
}

export default function PublicationPage({ params }: Props) {
  const publication = publications.find((p) => p.slug === params.slug);

  if (!publication) {
    notFound();
  }

  return (
    // --- 2. ENVUELVE EL COMPONENTE CLIENTE CON SUSPENSE ---
    <Suspense fallback={<div>Cargando...</div>}> 
      <PublicationPageContent publication={publication} />
    </Suspense>
  );
}