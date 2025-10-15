import { InfoCard } from "@/components/InfoCard";
import { BarChart3, Users } from "lucide-react";

export default function Page() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Información Estadística
      </h1>
      <div className="mb-8 text-center text-gray-600">
        La siguiente información estadística que presenta CAIINNO, representa el esfuerzo por
        concentrar en un sólo lugar la mayor cantidad de información estadística referente al
        papel de las inventoras dentro de la propiedad industrial en México. Confiamos en que
        les será de utilidad este esfuerzo, que representa parte de nuestra aportación para un
        cambio positivo en México.
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <InfoCard
          title="Información Estadística sobre Propiedad Industrial"
          description="Explore datos detallados y análisis sobre la propiedad industrial en México. Encuentre estadísticas actualizadas sobre patentes, marcas registradas, diseños industriales y más. Nuestra base de datos proporciona información valiosa sobre tendencias, sectores tecnológicos y distribución geográfica de la propiedad industrial en el país."
          icon={<BarChart3 className="h-8 w-8" />}
          //imagePath="/icons/statistics.svg"
          link="/informacion-estadistica/pbi-propiedadindustrial"
        />

        <InfoCard
          title="Banco de Invenciones y Género en México a Nivel Estatal"
          description="Descubra el panorama de la innovación en México desde una perspectiva de género. Este banco de datos único ofrece información detallada sobre la participación de mujeres y hombres en el campo de las invenciones a nivel estatal. Analice tendencias, identifique brechas y explore oportunidades para fomentar una mayor inclusión en el ecosistema de innovación mexicano."
          icon={<Users className="h-8 w-8" />}
          //imagePath="/icons/gender-innovation.svg"
          link="/informacion-estadistica/invenciones-y-genero"
        />
      </div>
    </div>
  );
}