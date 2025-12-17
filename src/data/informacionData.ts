/*
 Esta información se genera a partir de los datos en .csv
 Se puede buscar un convertidor csv -> json en linea
*/
interface tipoImpacto {
  referencia: string;
  autor: string;
  titulo: string;
  tipoUsuario: "Privado" | "Público" | "Gubernamental" | "Académico" | "Legislativo" | "Internacional";
  sector: "Privado" | "Público" | "Organismo Internacional";
  año: number;
  link: string;
} 

export const dataImpacto: tipoImpacto[] = [
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Nuestra Visión Noticias",
    "titulo": "Michoacán desciende 2 posiciones en Ciencia y Tecnología",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2015,
    "link": "https://www.nuestravision.com.mx/index.php/component/videoflow/latest/64331-michoacan-desciende-2-posiciones-en-ciencia-y-tecnologia?list=ups&start=1930"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Aguascalientes",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/157921/aguascalientes_2016_1024.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Baja California",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/157920/baja_california_2016_1024.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Baja California Sur",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/175892/baja_california_sur_2016_1116.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Campeche",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/157923/campeche_2016_1024.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Chiapas",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/157924/chiapas_2016_1024.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Chihuahua",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/175895/chihuahua_2016_1116.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Ciudad de México",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/145357/ciudad_de_mexico_2016_0923.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Coahuila",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/175897/coahuila_2016_1116.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Colima",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/145359/colima_2016_0923.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Durango",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/175899/durango_2016_1116.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Estado de México",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/166588/estado_de_mexico_2016_1116.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Guanajuato",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/166589/guanajuato_2016_1116.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Guerrero",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/175902/guerrero_2016_1116.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Hidalgo",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/166591/hidalgo_2016_1116.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Jalisco",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/175904/jalisco_2016_1116.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Michoacán",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/175905/michoacan_2016_1116.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Morelos",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/157484/morelos_2016_1013.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Nayarit",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/175907/nayarit_2016_1116.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Nuevo León",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/154408/nuevo_leon_2016_1013.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Oaxaca",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/175909/oaxaca_2016_1116.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Puebla",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/175910/puebla_2016_1116.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Querétaro",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/175911/queretaro_2016_1116.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Quintana Roo",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/152025/quintana_roo_2016_0923.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - San Luis Potosí",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/166601/san_luis_potosi_2016_1116.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Sinaloa",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/175914/sinaloa_2016_1116.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Sonora",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/175915/sonora_2016_1116.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Tabasco",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/175916/tabasco_2016_1116.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Tamaulipas",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/175917/tamaulipas_2016_1116.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Tlaxcala",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/175918/tlaxcala_2016_1116.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Veracruz",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/157949/veracruz_2016_1024.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Yucatán",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/166608/yucatan_2016_1116.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Economía",
    "titulo": "Información Económica Estatal - Zacatecas",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/175921/zacatecas_2016_1116.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Nelly Toche",
    "titulo": "En busca de un vínculo ?con la ciudadanía",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2016,
    "link": "https://www.eleconomista.com.mx/arteseideas/En-busca-de-un-vinculo-con-la-ciudadania-20160125-0031.html"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Universidad Autónoma “Benito Juárez” de Oaxaca Centro de Evaluación e Innovación Educativa:\nEscuela de Economía",
    "titulo": "Plan de estudios de la Maestría en Proyectos Productivos Sustentables",
    "tipoUsuario": "Académico",
    "sector": "Público",
    "año": 2016,
    "link": "https://transparencia.uabjo.mx/obligaciones/economia/articulo-75/fraccion-1/75-1-300-maestria-en-proyectos-productivos-sustentables-2017.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Secretaría de Educación Pública SEP",
    "titulo": "Estadística Educativa por Entidad Federativa 2015 - 2016 - Secretaría de Educación Pública SEP",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://observatorio-social-economico-mexico.blogspot.com/2016/11/estadistica-educativa-por-entidad.html"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Rubí Alejandra Medina Mijangos",
    "titulo": "Análisis comparativo del sector logístico entre la región de Yucatán, México y la Comunidad Autónoma de Aragón con referencia a la metodología de Estrategias de Investigación e Innovación para la Especialización Inteligente (RIS3)",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2016,
    "link": "https://upcommons.upc.edu/bitstream/handle/2117/96887/MEMORIA_RUBI_MEDINA.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Observatorio Social y Econóico de Yucatán",
    "titulo": "Minimonografía de Yucatán. Censos Económicos 2014 INEGI",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2016,
    "link": "https://observatorio-social-economico-yucatan.blogspot.com/2016/08/minimonografia-de-yucatan-censos.html"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "José Alejandro Montemayor Montemayor - Centro de Estudios de las Finanzas Públicas de la Cámara de Diputados",
    "titulo": "Factores que inciden en la productividad y competitividad en las entidades federativas de México",
    "tipoUsuario": "Académico",
    "sector": "Público",
    "año": 2017,
    "link": "https://cefp.gob.mx/transp/CEFP-CEFP-70-41-C-Estudio-PCF-041017.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Revista Cimexus",
    "titulo": "La innovación en el comercio exterior de San Luis Potosí",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2017,
    "link": "https://www.academia.edu/78537142/La_innovación_en_el_comercio_exterior_de_San_Luis_Potosí"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Jacobo Tolamatl Michcol, José Antonio Varela Loyola y David Gallardo García - Universidad Politécnica de Tlaxcala",
    "titulo": "La competitividad de la manufactura del sector autopartes en Tlaxcala: Modelo para el desarrollo",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2017,
    "link": "https://www.ecorfan.org/libros/BOOK_TX.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Mario López López y Edna Marpia Villarreal Peralta",
    "titulo": "Aproximaciones a la medición del sistema de innovación en México",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2017,
    "link": "https://www.uam.mx/altec2017/pdfs/ALTEC_2017_paper_109.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Universidad Autónoma del Estado de Hidalgo",
    "titulo": "Hidalgo: Desafíos del desarrollo",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2017,
    "link": "https://repository.uaeh.edu.mx/books/164/hd.pdf#page=14"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Liliana Aguilar Armendáriz y Martha Fabiola Rivera García",
    "titulo": "La innovación en el comercio exterior de\nSan Luis Potosí",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2017,
    "link": "https://dialnet.unirioja.es/descarga/articulo/6153679.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Fondo mixto CONACYT-Gobierno del estado de Nuevo León",
    "titulo": "Fortalecimiento de infraestructura para divulgación de la ciencia y la tecnología",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2017,
    "link": "https://secihti.mx/wp-content/uploads/convocatorias/fondos_mixtos/nuevo_leon/2017_02_FOMIX_Nuevo_Leon/FOMIX_NUEVO_LEON_DEMANDA_ESPECIFICA_2017-02.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "María Angélica Cerdán; Marco Antonio Moreno; Jorge Rafael Aguilar; Luis Alfonso Ramírez",
    "titulo": "Strategic Reference Framework to Promote ICT Industry Innovation at the State of Querétaro, México",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2017,
    "link": "https://ieeexplore.ieee.org/abstract/document/8337951/authors#authors"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Delegación Federal en el Estado de San Luis Potosí",
    "titulo": "Informe 2017 - 2018",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2017,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/397954/24_San_Luis_Potos__InformeActividades_2017_2018.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Elizabeth Hernández Mesa, Humberto Banda Ortiz, Martha July Mora Haro",
    "titulo": "Aproximación teórica de los indicadores que permitan evaluar el impacto social de la ciencia y la tecnología en el sector automotriz en Querétaro",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2017,
    "link": "https://www.riico.net/index.php/riico/article/download/1476/1137"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Gobierno del Estado de Zacatecas",
    "titulo": "Programa especial de ciencia, tecnología e innovación del estado de Zacatecas 2017-2021",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2017,
    "link": "https://pbr-sed.zacatecas.gob.mx/wp-content/uploads/2020/02/PECITI-2017-2021.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Manuel Iván Girón Pérez, Aline Viridiana Huerta Hernández y Beatriz Quintero Hernández",
    "titulo": "Ciencia en Nayarit, a 100 años de la creación del estado: antecedentes históricos, situación actual, retos y perspectivas",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2017,
    "link": "https://www.revistaciencia.amc.edu.mx/images/revista/68_3/PDF/actualidad.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Enrique Agustín Ruiz Flores",
    "titulo": "Deserción escolar en el plantel Celaya III del subsistema CECYTE Guanajuato",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2017,
    "link": "https://es.scribd.com/document/444165225/Investigacion-en-la-Educacion-Superior-Eje-de-Competencias-Tomo-12-2017-pdf#content=query:caiinno,pageNum:93,indexOnPage:0,bestMatch:false"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Diario de Debates de la Cámara de Diputados",
    "titulo": "Apéndice V: Continuación del Apéndice IV de la Sesión 35 del 14 de diciembre de 2017",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2017,
    "link": "https://cronica.diputados.gob.mx/PDF/63/2017/dic/171214-32.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "María Eloísa Talavera Hernández - Gaceta Parlamentaria de la Cámara de Diputados",
    "titulo": "Que adiciona el artículo 6o. de la Ley de la Propiedad Industrial, recibida de la diputada María Eloísa Talavera Hernández, del Grupo Parlamentario del PAN, en la sesión de la Comisión Permanente del miércoles 16 de mayo de 2018",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2018,
    "link": "https://gaceta.diputados.gob.mx/PDF/63/2018/may/20180521.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Sistema de Información Legislativa de la Secretaría de Gobernación (SIL)",
    "titulo": "Iniciativa con Proyecto de Decreto por el que se adiciona un inciso g) a la fracción XII del artículo 6o. de la\nLey de la Propiedad Industrial",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2018,
    "link": "https://sil.gobernacion.gob.mx/Archivos/Documentos/2018/05/asun_3713788_20180516_1525809885.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Teresita Elisa Ruiz Pantoja",
    "titulo": "La movilidad cotidiana dentro de la zona metropolitana del Valle de México: Cómo, a dónde y a qué hora",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2018,
    "link": "https://maroconsultoriaycapacitacion.wordpress.com/category/demografia/"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Elizabeth Hernández Mesa, Humberto Banda Ortiz y Martha July Mora Haro - Repositorio de la Red Internacional de Investigadores en Competitividad",
    "titulo": "Aproximación teórica de los indicadores que permitan evaluar el impacto social de la ciencia y la tecnología en el sector automotriz en Querétaro",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2018,
    "link": "https://www.riico.net/index.php/riico/article/view/1476/1137"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "María Eloísa Talavera Hernández - Comisión de Economía de la Cámara de Diputados",
    "titulo": "Iniciativa con Proyecto de Decreto por el que se adiciona un inciso g) a la fracción XII del artículo 6o. de la Ley de la Propiedad Industrial",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2018,
    "link": "https://www.senado.gob.mx/66/gaceta_del_senado/documento/80999"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Elia Martínez y Guillermo de la Torre Gea- International Journal of Trend in Scientific Research and Development (IJTSRD)",
    "titulo": "Analysis of the ICT user Profile for e-goverment through Bayesian Networks",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2018,
    "link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://zenodo.org/record/3572137/files/18%2520Analysis%2520of%2520the%2520ICT%2520User%2520Profile%2520for%2520eGoverment%2520through%2520Bayesian%2520Networks.pdf%3Fdownload%3D1&ved=2ahUKEwjC0_PR8sSOAxURI0QIHe3xCLI4UBAWegQIExAB&usg=AOvVaw0QJ32VpsJuuZsjXNSbsIxA"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Gobierno del Estado de Jalisco",
    "titulo": "Jalisco a futuro 2018-2030",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2018,
    "link": "https://www.researchgate.net/profile/Patricia-Vargas-Becerra/publication/389369669_Jalisco_a_futuro_2018-2030_Construyendo_el_porvenir_Vol_I_Diagnosticos/links/685975c193040b17338cb8de/Jalisco-a-futuro-2018-2030-Construyendo-el-porvenir-Vol-I-Diagnosticos.pdf#page=284"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Consejo Nacional de Ciencia y Tecnología (CONACYT)",
    "titulo": "Diagnóstico y Diseño del Programa Presupuestario S278, “Fomento Regional de las Capacidades Científicas, Tecnológicas y de Innovación”",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2018,
    "link": "https://secihti.mx/wp-content/uploads/planeacion_y_evaluacion/evaluacion_programas_conacyt/Diseno/2_Diagnstico_y_Diseo_del_Pp_S278__vprel_7mar18.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Gobierno del Estado de Colima",
    "titulo": "La Agenda Digital Colima “Impulsando la Inclusión y el Desarrollo de la Sociedad”",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2018,
    "link": "https://admiweb.col.gob.mx/archivos_prensa/banco_img/file_5bfecd1c03dbe_AgendaDigitalColima.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Juan Óscar Ollivier Fierro, Pedro Javier Martínez Ramos e Isidro Domínguez Alcaraz - Investigación Administrativa",
    "titulo": "Madurez tecnológica e innovación en empresas mexicanas",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2018,
    "link": "https://www.redalyc.org/articulo.oa?id=456067615009"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Consejo Nacional de Ciencia y Tecnología (CONACYT)",
    "titulo": "Diagnóstico y Diseño del Programa Presupuestario S278, “Fomento Regional de las Capacidades Científicas, Tecnológicas y de Innovación”",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2018,
    "link": "https://secihti.mx/wp-content/uploads/planeacion_y_evaluacion/evaluacion_programas_conacyt/Diseno/2_Diagnstico_y_Diseo_del_Pp_S278__vprel_7mar18.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Cynthia Alejandra Rueda Contreras, Karla Paola Jiménez Almaguer y Joel Mendoza Gómez - Revista de Estudios en Contaduría, Administración e Informática (RECAI)",
    "titulo": "Efecto del empowerment grupal en la proactividad. Un estudio empírico en equipos de I+D de Universidades Tamaulipecas",
    "tipoUsuario": "Académico",
    "sector": "Público",
    "año": 2018,
    "link": "https://www.redalyc.org/journal/6379/637968306001/637968306001.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "María Esther Olán Izquierdo - Tecnológico Nacional de México",
    "titulo": "Análisis de la productividad de las empresas dedicadas al manejo integral de residuos del municipio del centro del Estado de Tabasco para una propuesta de desarrollo",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2018,
    "link": "https://rinacional.tecnm.mx/bitstream/TecNM/3150/1/TESIS.%20MARIA%20ESTHER%20OLAN%20IZQUIERDO.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Carolina Olvera Castillo - Capítulo del libro Género, ciencia y tecnología en las políticas públicas mexicanas",
    "titulo": "San Luis Potosí: De los rebozos a la industria automotriz",
    "tipoUsuario": "Académico",
    "sector": "Público",
    "año": 2018,
    "link": "https://www.academia.edu/41900462/San_Luis_Potos%C3%AD_De_los_rebozos_a_la_industria_automotriz"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Milagros Cano Flores, Oscar González Muñoz y Verónica Velázquez Romero - Red Iberoamericana de Academias de Investigación (Red IBAI)",
    "titulo": "Reflexiones sobre desarrollo empresarial",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2018,
    "link": "https://redibai-myd.org/portal/wp-content/uploads/2019/03/reflexiones-sobre-desarrollo-empresarial-17-3.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Daniel Ulices Peralta, Jorge Marcial Rodríguez Saldaña y Cinthya Citlali Díaz Fuentes - Universidad Autónoma de Guerrero",
    "titulo": "La reforma político-electoral de 2014 y su vinculación con el derecho humano al acceso a la ciencia, tecnología e innovación en México",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2018,
    "link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://edulab.es/revSOCIAL/article/download/1985/1242/6902&ved=2ahUKEwiMpa731taOAxX9le4BHcagDss4ChAWegQIJRAB&usg=AOvVaw1VKN8RV-312LmsCQm2wH3o"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Instituto Nacional de Astrofísica, Óptica y Electrónica Puebla (IANOEP)",
    "titulo": "Agenda de prioridades en educación superior, ciencia, tecnología e innovación para el estado de Puebla",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2018,
    "link": "https://www.inaoep.mx/archivos/marconormativo/AgendaPrioridadesPuebla2018.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Daniel Eduardo Paz Perez - Instituto Tecnológico Superior de El Mante",
    "titulo": "Tamaulipas en la I+D+I, una experiencia regional",
    "tipoUsuario": "Académico",
    "sector": "Público",
    "año": 2018,
    "link": "https://www.academia.edu/40941942/Tamaulipas_en_la_I_D_i_una_experiencia_regional"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Facultad de Ingeniería Eléctrica y Electrónica - Universidad Veracruzana",
    "titulo": "Plan de Desarrollo de las Entidades Académicas PLADEA 2017-2021",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2018,
    "link": "https://www.uv.mx/planeacioninstitucional/files/2019/07/PLADEA_Fac_Ing-Elect_Elect_Ver-R.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Consejo Nacional de Ciencia y Tecnología (CONACYT), Fondos Mixtos (FOMIX) e Hidalgo crece contigo",
    "titulo": "Fortalecimiento de infraestructura científica y tecnológica en telecomunicaciones",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2018,
    "link": "https://secihti.mx/wp-content/uploads/convocatorias/fondos_mixtos/hidalgo/2018-03_fomix/FOMIX_HIDALGO_DEMANDA%20ESPECÍFICA_2018-03.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Facultad de medicina - Benemérita Universidad Autónoma de Puebla (BUAP)",
    "titulo": "Programa Académico de: Especialidad En Medicina Del Trabajo Y Ambiental",
    "tipoUsuario": "Académico",
    "sector": "Público",
    "año": 2019,
    "link": "https://mederi.buap.mx/portal/public/posgrado/Programas_academicos_especialidades/MEDICINA_DEL_TRABAJO_Y_AMBIENTAL_2019.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Gobierno del Estado de Veracruz",
    "titulo": "Plan Veracruzano de Desarrollo 2019 - 2024",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://www.segobver.gob.mx/siptransparencia/adjuntos/20190702151156-1128574316.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Gobierno del Estado de Veracruz",
    "titulo": "Plan Veracruzano de Desarrollo 2019 - 2024",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://es.scribd.com/document/413676005/PVD-2019-2024#content=query:caiinno,pageNum:274,indexOnPage:1,bestMatch:false"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Comisión de Selección del Comité de Participación Ciudadana del Sistema Estatal Anticorrupción\nPresente (Sonora)",
    "titulo": "Exposición de Motivos",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "http://intranet.congresoson.gob.mx:82/Publico/Documento/21369"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Eugenio Herrera Nuño - Lider Empresarial",
    "titulo": "¿Qué tanto están innovando en Aguascalientes? El apunte",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2019,
    "link": "https://www.liderempresarial.com/que-tanto-esta-innovando-aguascalientes-el-apunte/"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Olivia Leyva Muñoz, Juan Russo, Edilberto Gallardo Valente - EÓN Sociales",
    "titulo": "Los jóvenes, ¿un mundo aparte?\nEducación, desempleo\ny violencia en el México\ncontemporáneo",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2019,
    "link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.academia.edu/40692979/LOS_J%25C3%2593VENES_UN_MUNDO_APARTE&ved=2ahUKEwjjqOnP9OeOAxWUnGoFHVUfEJM4ChAWegQIHRAB&usg=AOvVaw1Ur9VJ9JadxntXE37KiTWO"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Gobierno del Estado de Tabasco",
    "titulo": "Plan estatal de Desarrollo 2019 - 2024",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://tabasco.gob.mx/sites/default/files/users/userspftabasco/PLED-2019-2024-Decreto-101-2019.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "InterNaciones",
    "titulo": "InterNaciones Año 6 Número 17",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2019,
    "link": "DOI: 10.32870/in.v0i17"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Gobierno del de Morelos",
    "titulo": "Plan Estatal de Desarrollo 2019 - 2024.",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://periodico.morelos.gob.mx/periodicos/2019/5697_2A.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Gobierno del de Morelos",
    "titulo": "Plan Estatal de Desarrollo 2019 - 2024.",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://transparenciamorelos.mx/sites/default/files/plan_estatal_de_desarrollo_2019-2024_opt_0.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Gobierno del estado de Colima",
    "titulo": "La Agenda Digital Colima “Impulsando la Inclusión y el Desarrollo de la Sociedad”",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://periodicooficial.col.gob.mx/p/02112019/sup06/619110201.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Gobiereno del Estado de Tabasco",
    "titulo": "Informe de la Gestión Gubernamental 2019: Consideraciones Previas",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://publicacionperiodico.tabasco.gob.mx/documento/1369/firmado_qr.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Estefany Daniela Rodríguez",
    "titulo": "La cooperación tecnológica entre start-ups de Israel y Jalisco para el fortalecimiento de la innovación y el desarrollo local del estado",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2019,
    "link": "https://internaciones.cucsh.udg.mx/index.php/inter/article/view/7124"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Consejo Estatal de Ciencia y\nTecnología de Jalisco",
    "titulo": "Reglas de Operación del Programa\nApoyo a la Ciencia, Tecnología e\nInnovación 2019",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://www.coecytjal.org.mx/Plataforma/ArchivosApoyo/ROP%20-%20COECYTJAL_2019%20CON%20ANEXOS.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Gobierno del Estado de Jalisco",
    "titulo": "Plan Estatal de Gobernanza y Desarrollo de Jalisco 2018 - 2024",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://uniondetula.gob.mx/filetransparencia/Articulo_8/Fraccion_III/c/Plan%20Estatal%20de%20Gobernanza%20y%20Desarrollo%20de%20Jalisco%20-%202018-2024%20Anexo%202.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Gobierno del Estado de Jalisco",
    "titulo": "Plan Estatal de Gobernanza y Desarrollo de Jalisco 2018 - 2024",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://plan.jalisco.gob.mx/wp-content/uploads/2022/08/Diagnostico.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Gobierno del Estado de Jalisco",
    "titulo": "Plan Estatal de Gobernanza y Desarrollo de Jalisco 2018 - 2024",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://transparencia.info.jalisco.gob.mx/sites/default/files/PEGyD_0.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Gobierno del Estado de Morelos",
    "titulo": "Plan estatal de Desarrollo 2019 - 2024",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://transparenciamorelos.mx/sites/default/files/plan_estatal_de_desarrollo_2019-2024_0.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Gobierno del Estado de Zacatecas",
    "titulo": "Plan Municipal de Desarrollo 2019-2021",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://gaceta.capitaldezacatecas.gob.mx/wp-content/uploads/2019/01/PMD-2019-2021.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Adrián Augusto López Hernández",
    "titulo": "Proyecto Rescatemos Tabasco 2019 - 2024 Juntos Haremos Historia",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://uiet.edu.mx/docs/pdi/2019/MaterialPI/DiversasConsultas/3ProyectoGobierno2019_2024Cam.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Consejo Estatal de Ciencia y Tecnología de Jalisco",
    "titulo": "Reglas de Operación del Programa Apoyo a la Ciencia, Tecnología e Innovación 2019",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://www.coecytjal.org.mx/Plataforma/ArchivosApoyo/ROP%20-%20COECYTJAL_2019%20CON%20ANEXOS.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "María Teresa Prieto Quezada, Tanya Méndez Luévano y Esperanza Bosch Fiol",
    "titulo": "Violencia de género de lo social a espacios universitarios",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2020,
    "link": "https://www.researchgate.net/profile/Tanya-Mendez-Luevano-2/publication/344304443_Violencia_de_genero-2/links/5f6506ec458515b7cf3eb972/Violencia-de-genero-2.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Gobierno del Estado de Veracruz",
    "titulo": "Agenda 2030 Veracruz: Ruta de Implementación",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2020,
    "link": "https://repositorio.veracruz.gob.mx/wp-content/uploads/sites/4/files/agenda2030/A2030_RUTA_DE_IMPLEMENTACION_FINAL.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Juan Óscar Ollivier Fierro, Pedro Javier Martínez Ramos e Isidro Domínguez Alcaraz",
    "titulo": "Madurez tecnológica e innovación en empresas mexicanas",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2020,
    "link": "https://www.scielo.org.mx/pdf/ia/v50n128/2448-7678-ia-50-128-00009.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Antonio de Jesús Madriz Estrada",
    "titulo": "Iniciativa que Reforma el Artículo 4 de la Ley de Ciencia, Tecnología e Innovación del Estado de Michoacán",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2020,
    "link": "http://congresomich.gob.mx/file/INICIATIVA-CON-PROYECTO-DE-DECRETO-DIP.-ANTONIO-DE-JESÚS-MADRIZ.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Honorable Congreso del\nEstado Libre y Soberano de\nMichoacán de Ocampo",
    "titulo": "Iniciativa con Proyecto de Decreto\nmediante el cual se reforma el\nartículo 4° de la Ley de Ciencia,\nTecnología e Innovación del\nEstado de Michoacán de Ocampo,\npresentada por el diputado Antonio\nde Jesús Madriz Estrada, integrante\ndel Grupo Parlamentario del\nPartido Morena",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2020,
    "link": "http://congresomich.gob.mx/file/Sesión-092-III-C-01-07-2020.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Juan Pablo Durand Villalobos, Karla Valencia González Romero, José Raúl Rodríguez Jiménez",
    "titulo": "La internacionalización de la Universidad de Sonora",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2021,
    "link": "https://www.academia.edu/118654801/La_internacionalizacio_n_de_la_Universidad_de_Sonora"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "María de Lourdes Ampudia Rueda, Julieta Flores Amador, Myrna Limas Hernández y Javier Martínez Romero - Universidad Autónoma de Ciudad Juárez",
    "titulo": "Políticas públicas de innovación tecnológica, impactos y retos para el\ndesarrollo local dentro del contexto de los sistemas de innovación\nregional: Estudio de caso Ciudad Juárez, México",
    "tipoUsuario": "Académico",
    "sector": "Público",
    "año": 2021,
    "link": "https://cathi.uacj.mx/bitstream/handle/20.500.11961/21904/Reporte%20Tecnico_Final%20%20SIRED%20AMPUDIA-FLORES-LIMAS-MARTINEZ%20%2024-11-2021.pdf?sequence=1&isAllowed=y"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Juan Pablo Durand Villalobos, Karla Valencia González Romero, José Raúl Rodríguez Jiménez",
    "titulo": "La internacionalización de la Universidad de Sonora",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2021,
    "link": "https://www.publicacionesupec.org/index.php/carchi/catalog/download/39/38/164?inline=1"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Salvador Bautista Maldonado, Gina del Pilar Pacheco Balam, Zenaida Rodríguez Córdova y Rosa Adriana May Meléndez",
    "titulo": "Capítulo 4. Estado del conocimiento de las investigaciones sobre la enseñanza y el aprendizaje de lenguas extranjeras en Campeche (2012-2021)",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2021,
    "link": "https://d1wqtxts1xzle7.cloudfront.net/98581820/Ramirez_Romero_et_al_2022_Investigaciones_EA_LE_en_Mx_2012_2021-libre.pdf?1676238184=&response-content-disposition=inline%3B+filename%3DLas_investigaciones_sobre_la_ensenanza_y.pdf&Expires=1754436631&Signature=LvIBsAgjAxyoc5wOicOGq78k-FLwEnEbgXzVOP2mWP-3jdCtagXfFTi59HOphW8RUA25~ZT-c5Qxxxt65vtHPsEni798C~8ejxNDvJr5gZR7wDf44PlwvVeKpuv8VcUTVU6EZyG89ACXLH~vlTFCz6vq1bM3NMvV4posNgqD7qGzud0SGEno2TyP088jY1KLXVHWD4TcOAfvn5KGhLdpVfmVSDZ98MNkSmXnRbq-ZEc3Y4GE4ZFiCfqbkmzd7t9qfqbVUOwm6Wy23pdHyyua5qhko7zLC02p~z~y7JOnw0A12X6m~cjwWLZisf5OGj4M7CM8lgni2Srqqxg56JXxig__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA#page=87"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Salvador Bautista Maldonado, Gina del Pilar Pacheco Balam, Zenaida Rodríguez Córdova y Rosa Adriana May Meléndez",
    "titulo": "Capítulo 4. Estado del conocimiento de las investigaciones sobre la enseñanza y el aprendizaje de lenguas extranjeras en Campeche (2012-2021)",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2021,
    "link": "https://comunicacion-cientifica.com/wp-content/uploads/2023/01/073.-PDF09-Las-investigaciones-sobre-la-nseñanza.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Juan Óscar Ollivier Fierro, Pedro Javier Martínez Ramos, Isidro Domínguez Alcaraz",
    "titulo": "Madurez tecnológica e innovación en empresas mexicanas",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2021,
    "link": "https://www.semanticscholar.org/paper/Madurez-tecnológica-e-innovación-en-empresas-Fierro-Ramos/dbb4fbb014ab8f3c50214cd1d5d2f5f4e0442a95#cited-papers"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Tecnológico Nacional de México; Instituto Tecnológico de San Juan Río",
    "titulo": "Plan de Desarrollo del Departamento de Sistemas y Computación 2021 - 2024",
    "tipoUsuario": "Gubernamental",
    "sector": "Privado",
    "año": 2021,
    "link": "https://es.scribd.com/document/743597890/Plan-de-Desarrollo-ISC-ITIC-2021-2024-1"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Universidad Autónoma del Estado de Morelos (UAEM)",
    "titulo": "Plan de Estudios Maestría en Biotecnología",
    "tipoUsuario": "Académico",
    "sector": "Público",
    "año": 2022,
    "link": "https://www.uaem.mx/sites/default/files/pe-maestri-a-en-biotecnologi-a-aprobado-sellado-scu-24062022-1pdfUOTdW6E0Fe.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Diana Concepción Álvarez, Luz María Hernández Cruz, Heribé Felipe Uribe Santiago y Martina Díaz Rosado",
    "titulo": "Estructura organizacional de las empresas desarrolladoras de software radicadas en\nla Ciudad de San Francisco de Campeche",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2022,
    "link": "https://doi.org/10.35429/jct.2022.17.6.1.10"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Josué Vergara Alarcón",
    "titulo": "CityOS: Un ecosistema digital interconectado",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2022,
    "link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://ru.dgb.unam.mx/jspui/bitstream/20.500.14330/TES01000832218/3/0832218.pdf&ved=2ahUKEwjJktb709aOAxW1mWoFHXZLDII4ChAWegQIHhAB&usg=AOvVaw0U3FEJv0yKoSC843GiXFoT"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Universidad Autónoma de Baja California",
    "titulo": "Propuesta de creación que presenta la Facultad de\nPedagogía e Innovación Educativa, Mexicali",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2022,
    "link": "https://sriagral.uabc.mx/secretaria_general/consejo/202112/07.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Gobierno Municipal Benito Juárez, Veracruz",
    "titulo": "Plan Municipal de Desarrollo 2022 - 2025",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2022,
    "link": "https://www.benitojuarez.gob.mx/images/TRANSPARENCIA2225/NORMATIVIDADMUNICIPAL/PMD2022.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Diana Concepción Mex-Álvarez, Luz María Hernández Cruz, Heribé Felipe Uribe Santiago y. Martina Díaz Rosado - Journal Computer Technology",
    "titulo": "Organizational structure of software development companies located in the city of\nSan Francisco de Campeche",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2022,
    "link": "https://www.ecorfan.org/spain/researchjournals/Tecnologia_Informatica/vol6num17/Journal_Computer_Technology_V6_N17.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Diana Concepción Mex-Álvarez, Luz María Hernández Cruz, Heribé Felipe Uribe Santiago y. Martina Díaz Rosado - Journal Computer Technology",
    "titulo": "Organizational structure of software development companies located in the city of\nSan Francisco de Campeche",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2022,
    "link": "https://scispace.com/pdf/organizational-structure-of-software-development-companies-1fuwn5ok.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Nallely Alonso Gómez",
    "titulo": "Desarrollo de la investigación de alto nivel en académicos e investigadores del SNI del área VIII-Ingenierías y desarrollo tecnológico en Chiapas: condiciones y perspectivas desde lo regional",
    "tipoUsuario": "Académico",
    "sector": "Público",
    "año": 2022,
    "link": "https://riuma.uma.es/xmlui/bitstream/handle/10630/26467/TD_ALONSO_GOMEZ_Nallely.pdf?sequence=1&isAllowed=y"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Carlos Vázquez-Cid de León y Salvador Montesinos González",
    "titulo": "DESARROLLO DE UN PLAN ESTRATÉGICO PARA LOS CUERPOS ACADÉMICOS DE LA UNIVERSIDAD TECNOLÓGICA DE LA MIXTECA",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2022,
    "link": "https://www.researchgate.net/publication/358352811_DESARROLLO_DE_UN_PLAN_ESTRATEGICO_PARA_LOS_CUERPOS_ACADEMICOS_DE_LA_UNIVERSIDAD_TECNOLOGICA_DE_LA_MIXTECA"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Perla Jazmín González Cruz y Concepción Reyes de la Cruz",
    "titulo": "Ciencia, Tecnología e Innovación en Tabasco 2012-2022",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2022,
    "link": "https://ru.iiec.unam.mx/5858/1/2.%20107-González-Reyes.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "Emiliano Hernández Valdés, Carolina Martínez Santiago, Juan Pablo Suárez Moreno, Roberto Carlos Torres Velasco y Francisco Guerra Martínez",
    "titulo": "La población rural en la península de Yucatán: proporción, actividades y\nprocesos transformadores del espacio geográfico",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2023,
    "link": "https://www.paginaspersonales.unam.mx/app/webroot/files/6471/2023-09-30-071515_Articulo_Poblacion_r.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2015",
    "autor": "María del Camen Gutiérrez-Diez y José Gerardo Reyes López",
    "titulo": "Sustainability and Development at Northwestern Municipalities in Mexico: Chihuahua Region",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2023,
    "link": "https://link.springer.com/rwe/10.1007/978-3-031-16017-2_19"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Instituto Morelense de Procesos Electorales y Participación ciudadana (IMPEPAC)",
    "titulo": "Plataforma Electoral Morelos 2018-2024",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2018,
    "link": "https://impepac.mx/wp-content/uploads/2018/05/Plataforma-Morelos-PAN-perspectiva-de-género.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno del estado de Yucatán",
    "titulo": "PROGRAMA ESPECIAL: Innovación, conocimiento y tecnología",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2018,
    "link": "https://www.yucatan.gob.mx/docs/transparencia/ped/PMP/2018-2024/6._PMP_Innovacon.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Notitodo",
    "titulo": "Inauguran Gobierno Municipal y Clúster de Tecnologías el “Living Lab”, 1er laboratorio de innovación ciudadana",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2018,
    "link": "https://notitodo.com.mx/wp/inauguran-gobierno-municipal-y-cluster-de-tecnologias-el-living-lab-1er-laboratorio-de-innovacion-ciudadana/"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Delegación Federal en el Estado de San Luis Potosí",
    "titulo": "Informe de Actividades 2017 - 2018",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2018,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/397954/24_San_Luis_Potos__InformeActividades_2017_2018.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno del Estado de Tabasco",
    "titulo": "Plan Estatal de desarrollo 2019 - 2024 Tabasco",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://tabasco.gob.mx/sites/default/files/users/planeacion_spf/PLED%202019-2024.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno del Estado de Tabasco",
    "titulo": "Plan Estatal de desarrollo 2019 - 2024 Tabasco",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://informe.tabasco.gob.mx/pdf/ped_tabasco.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno del Estado de Tabasco",
    "titulo": "Plan Estatal de desarrollo 2019 - 2024 Tabasco",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://congresotabasco.gob.mx/wp/wp-content/uploads/2019/07/CORREOS-MINERVA-SANTOS-CON-OFICIOS_2.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Consejo Estatal de Ciencia y Tecnología de Jalisco",
    "titulo": "Reglas de Operación del Programa Apoyo a la Ciencia, Tecnología e Innovación 2019",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://www.coecytjal.org.mx/Plataforma/ArchivosApoyo/ROP%20-%20COECYTJAL_2019%20CON%20ANEXOS.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Red de Conocimiento Consejo Nuevo León - Publicación Anual 2019",
    "titulo": "Hacia una visión policéntrica para la zona metropolitana de Monterrey",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://d1wqtxts1xzle7.cloudfront.net/76578908/publicacion_2019-libre.pdf?1639702138=&response-content-disposition=inline%3B+filename%3D4_Promocion_de_la_ciudadania_a_traves_de.pdf&Expires=1754452883&Signature=DeQk9WKKRpURWxzPxJiIdfQxv6yFYoAGIguXglot5ufU8DSqfiFkENK3kbvE0hAQo-GcTnS7UsUuCemDCE~3RW6fVt6AFg28yHakfgmQwVJosEJmfR6DcPq6XJEEOrY005bhEuwBHocy1aHiF6tT5s4v1CiWqvoIDYa3o8k7IdLaloY~ae~glX3mL7CPNoQygfXV4lD50M0BjGhC0TN9LagGwJz1ZIjq1Ys0TadBOifzJrgwDaGLztOPuQv0~rhuy~p0kCeqeWrjhtZqzIHFwO4K7NwU9LD2cGRJ~PS9UFcu5SgkzkKYpespheBJxcepAReBmDEMtgNla4KTVPTaYg__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA#page=87"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno del Estado de Jalisco",
    "titulo": "Plan Estatal de Gobernanza y Desarrollo de Jalisco 2018 - 2024",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://uniondetula.gob.mx/filetransparencia/Articulo_8/Fraccion_III/c/Plan%20Estatal%20de%20Gobernanza%20y%20Desarrollo%20de%20Jalisco%20-%202018-2024%20Anexo%202.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno del Estado de Jalisco",
    "titulo": "Plan Estatal de Gobernanza y Desarrollo de Jalisco 2018 - 2024",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://transparencia.info.jalisco.gob.mx/sites/default/files/PEGyD_0.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno del Estado de Jalisco",
    "titulo": "Plan Estatal de Gobernanza y Desarrollo de Jalisco 2018 - 2024",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://plan.jalisco.gob.mx/wp-content/uploads/2022/08/Diagnostico.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno del estado de Morelos",
    "titulo": "Plan Estatal de desarrollo 2019 - 2024 Morelos Actualizado",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://www.ssm.gob.mx/portal/descargables/evaluacion/Plan_Estatal_de_Desarrollo_2019-2024-2.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno del estado de Morelos",
    "titulo": "Plan Estatal de desarrollo 2019 - 2024 Morelos Actualizado",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://www.hacienda.morelos.gob.mx/images/docu_planeacion/planea_estrategica/ped/Plan_Estatal_de_Desarrollo_2019-2024-2.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno del estado de Morelos",
    "titulo": "Plan Estatal de desarrollo 2019 - 2024 Morelos",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://transparenciamorelos.mx/sites/default/files/plan_estatal_de_desarrollo_2019-2024_opt_0.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Agenda Hidalguense",
    "titulo": "Ley para introducir  la perspectiva de género en la política estatal en materia de ciencia, tecnología e innovación: Julio Valera",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2019,
    "link": "https://agendahidalguense.com/2019/06/ley-para-introducir-la-perspectiva-de-genero-en-la-politica-estatal-en-materia-de-ciencia-tecnologia-e-innovacion-julio-valera/"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno del estado de Yucatán",
    "titulo": "Plan Estatal de Desarrollo de Yucatán 2018 - 2024",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://dif.yucatan.gob.mx/Archivos/NORMATIVO/128.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno del estado de Chiapas",
    "titulo": "Programa institucional del Instituto de Ciencia, Tecnología e Innovación 2019-2024",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://icti.chiapas.gob.mx/media/marco-juridico/2022/programa institucional icti.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Consejo Estatal de Ciencia y Tecnología de Jalisco",
    "titulo": "Reglas de Operación del Programa Apoyo a la Ciencia, Tecnología e Innovación 2019",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://www.coecytjal.org.mx/Plataforma/ArchivosApoyo/ROP%20-%20COECYTJAL_2019%20CON%20ANEXOS.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Quadratin Hidalgo",
    "titulo": "Presentan Ley para introducir perspectiva de género en política estatal",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2019,
    "link": "https://hidalgo.quadratin.com.mx/politica/presentan-ley-para-introducir-perspectiva-de-genero-en-politica-estatal/"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Consejo de Ciencia y Tecnología del Estado de Morelos (CCYTEM)",
    "titulo": "Programa especial de ciencia y tecnología del estado de Morelos 2019-2024",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://mir.morelos.gob.mx/records/7C6F482C23784D9AA7544C176763D14D.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Héctor Rodríguez Ramírez, Mónica Guadalupe Chávez Elorza y Jesús Rubio Campos - Consejo Nuevo León",
    "titulo": "Prevención de la violencia social entre la juventud en Monterrey desde su propia óptica",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2019,
    "link": "https://www.ciespi.org.br/media/files/fcea049a8ec4d511ecbe6e5141d3afd01c/f0dae083bcf5911ed976d71393b4c16ff/promocion-de-la-ciudadania-a-traves-de-la-participacion-infantil.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno del Estado de Puebla",
    "titulo": "Plan Estatal de Desarrollo Puebla, Estabilidad con Rumbo",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://ojp.puebla.gob.mx/media/k2/attachments/Plan_Estatal_de_Desarrollo_Puebla_Estabilidad_con_Rumbo_24042019.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno del Estado de Jalisco",
    "titulo": "Plan Sectorial de Desarrollo Económico de Jalisco",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://plan.jalisco.gob.mx/wp-content/uploads/2022/09/Desarrollo-economico-plan-sectorial.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Consejo de Ciencia y Tecnología del Estado de Morelos (CCYTEM)",
    "titulo": "Actualización del Programa Especial de Ciencia y Tecnología del Estado de Morelos 2019–2024",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://mir.morelos.gob.mx/records/7C6F482C23784D9AA7544C176763D14D.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Poder Legislativo del Estado de Campeche",
    "titulo": "Octava Sesión, Gaceta Parlamentaria Número 099",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2019,
    "link": "https://www.congresocam.gob.mx/wp-content/uploads/adjuntos_sitio/SG/LXIII/GACETAS/SEGUNDO_ANO_LEGISLATIVO/001_PRIMER_PERIODO_ORDINARIO/099_GACETA_29OCTUBRE2019.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Eugenio Herrera Nuño - La Jornada Aguascalientes",
    "titulo": "Prioridades para Aguascalientes en materia de innovación (CAIINNO 2018)",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2019,
    "link": "https://www.lja.mx/2019/04/prioridades-para-aguascalientes-en-materia-de-innovacion-caiinno-2018-el-apunte/"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Jorge Hernandez Rios",
    "titulo": "Zacatecas, en el lugar 28 a nivel nacional en Ciencia, Tecnología e Innovación",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2019,
    "link": "https://www.clubensayos.com/Tecnología/Zacatecas-en-el-lugar-28-a-nivel-nacional/4635973.html"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gina Andrade Baena - Movimiento STEM",
    "titulo": "Mapa de Indicadores de STEM en México",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2019,
    "link": "https://www.movimientostem.org/wp-content/uploads/2023/01/Mapa-Indicadores-STEM-Mexico_EtapaAnalisis_2022.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno de Campeche",
    "titulo": "Cuarto Informe de Gobierno",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://transparenciafiscal.campeche.gob.mx/images/Documentos/Bloque%204/Informes%20de%20Gobierno/4informe-gobierno(1).pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno del Estado de Jalisco",
    "titulo": "PlanEstatal de Gobernanza y Desarrollo de Jalisco",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://elsalto.gob.mx/portal-api/public/transparencia/docs/1616098132699.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Consejo Nacional de Ciencia y Tecnología (CONACYT), Rednacecyt y Foro Consultivo Cientícifo y Tecnológico, AC",
    "titulo": "Foros Estatales de Consulta 2019       Humanidades, Ciencia y Tecnología: Presente y Futuro",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://foroconsultivo.org.mx/FCCyT/documentos/Foros_Estatales_2019_Vol1.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Eugenio Herrera Nuño - Lider Empresarial",
    "titulo": "¿Qué tanto están innovando en Aguascalientes? El apunte",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2019,
    "link": "https://www.liderempresarial.com/que-tanto-esta-innovando-aguascalientes-el-apunte/"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobiereno del Estado de Tabasco",
    "titulo": "Informe de la Gestión Gubernamental 2019",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://publicacionperiodico.tabasco.gob.mx/documento/1369/firmado_qr.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno del estado de Chiapas",
    "titulo": "Plan Estatal de Desarrollo Chiapas 2019 - 2024",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://www.haciendachiapas.gob.mx/planeacion/Informacion/PED/PED-2019.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno del Estado de Jalisco",
    "titulo": "Plan Institucional de Secretaría de Innovación, Ciencia y Tecnología",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://apiperiodico.jalisco.gob.mx/api/sites/periodicooficial.jalisco.gob.mx/files/10-19-19-v.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Ayuntamiento Constitucional del Municipio de Aguascalientes",
    "titulo": "Plan de Desarrollo Municipal 2019 - 2021 Aguascalientes",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://www.evaluando.gob.mx/assets/pdm2019-2021.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Ayuntamiento Constitucional del Municipio de Aguascalientes",
    "titulo": "Plan de Desarrollo Municipal 2019 - 2021 Aguascalientes",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://eservicios2.aguascalientes.gob.mx/NormatecaAdministrador/archivos/MUN-12-22.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Ayuntamiento Constitucional del Municipio de Aguascalientes",
    "titulo": "Plan de Desarrollo Municipal 2019 - 2021 Aguascalientes",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://www.implanags.gob.mx/maqueta_ags_implan/files/programas/PMDUOT/2024/PMDUOT%202045%20EV1_PERIODICO%20OFICIAL.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno del estado de Chiapas",
    "titulo": "Evaluación del Plan Estatal de Desarrollo Chiapas 2019 - 2024 y programas sectoriales",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2020,
    "link": "https://saludchiapas.gob.mx/storage/app/uploads/public/613/aa1/551/613aa155197df415451735.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Congreso del Estado de Tamaulipas",
    "titulo": "Visión Estenográfica de la sesión pública orfinaria, celebrada el día 15 de diciembre del 2020",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2020,
    "link": "https://www.congresotamaulipas.gob.mx/Parlamentario/Archivos/VersionesEstenograficas/71%20SESION%20PUBLICA%20ORDINARIA%2015%20DICIEMBRE%202020%20FINAL-.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno del Estado de Tamaulipas",
    "titulo": "Iniciativa con proyecto de decreto por el que se reforman y adicionan diversas disposiciones de la Ley de Fomento a la Investigación Cienctífica y Tecnológica en el Estado de Tamaulipas",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2020,
    "link": "https://www.congresotamaulipas.gob.mx/Parlamentario/Archivos/Iniciativas/Iniciativa%201%2015-12-2020.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Eduardo Ramos Martínez - Universidad Michoacana de San Nicolás de Hidalgo",
    "titulo": "Museo Interactivo de Ciencia y Tecnología de la U.M.S.N.H",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2020,
    "link": "http://bibliotecavirtual.dgb.umich.mx:8083/xmlui/bitstream/handle/DGB_UMICH/11394/FA-L-2020-1279%20VR.pdf?sequence=1&isAllowed=y"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Bay Area Council Economic Institute",
    "titulo": "The Baja California and Nuevo León Industry, Innovation, and Talent Clusters: Growing the California Mexico Binational Economy",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2020,
    "link": "https://www.bayareaeconomy.org/files/pdf/BajaCalifandNuevoLeon-InnovationClusters-2020July.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Antonio de Jesús Madriz Estrada",
    "titulo": "Iniciativa que reforma el artículo 4\nde la Ley de Ciencia, Tecnología e Innovación del Estado de Michoacán",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2020,
    "link": "http://congresomich.gob.mx/file/INICIATIVA-CON-PROYECTO-DE-DECRETO-DIP.-ANTONIO-DE-JESÚS-MADRIZ.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Consejo Estatal de Ciencia y Tecnología de Jalisco",
    "titulo": "Reglas de Operación 2020 del Programa de Innovación en Jalisco (PROINNJAL 2020)",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2020,
    "link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://misprogramas.jalisco.gob.mx/programas/fichaPrograma/descargarMatrizArchivoDiagnostico/1819&ved=2ahUKEwiDq4vfhviOAxVV4ckDHRc7BUg4KBAWegQIJBAB&usg=AOvVaw322ONI1zuNMt5EEgd6RxmG"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "eQROnomía",
    "titulo": "Abre “EY” Centro de Ciber-Seguridad Avanzada",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2020,
    "link": "https://eqronomia.com/abre-ey-centro-de-ciber-seguridad-avanzada/"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Paulo Monsiváis - El Sol de Tampico",
    "titulo": "Cambiarán políticas para fortalecer la investigación y la ciencia en Tamaulipas",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2020,
    "link": "https://oem.com.mx/elsoldetampico/local/cambiaran-politicas-para-fortalecer-la-investigacion-y-la-ciencia-en-tamaulipas-23907472"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Graciela Rojas y Laura Segura",
    "titulo": "Mexico’s Movimiento STEM and Related Developments in the State of Querétaro",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2020,
    "link": "https://link.springer.com/chapter/10.1007/978-3-030-39851-4_12"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Noticias de Tampico",
    "titulo": "Presentan Diputados Panistas iniciativa para fortalecer el Plan Estatal de Ciencia y Tecnología",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2020,
    "link": "https://noticiasdetampico.mx/presentan-diputados-panistas-iniciativa-para-fortalecer-el-plan-estatal-de-ciencia-y-tecnologia/"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Universidad Tecnológica de Jalisco",
    "titulo": "Plan Institucional de Desarrollo 2020 - 2025 Visión 2030",
    "tipoUsuario": "Académico",
    "sector": "Público",
    "año": 2020,
    "link": "https://transparencia.info.jalisco.gob.mx/sites/default/files/PIDE%20UTJ%202020-2025.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Juanita del Ángel - En línea Directa",
    "titulo": "Legisladores panistas presentan iniciativa para fortalecer el Plan Estatal de Ciencia y Tecnología",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2020,
    "link": "https://enlineadirecta.info/2020/12/15/legisladores-panistas-presentan-iniciativa-para-fortalecer-el-plan-estatal-de-ciencia-y-tecnologia/"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Colegio de Economistas del Estado de Veracruz",
    "titulo": "Plan Estratégico 2020-2021",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2020,
    "link": "https://www.colecover.org/archivos/2020/11/PlanEstrategico.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Universidad Politécnica de Puebla",
    "titulo": "Programa Sectorial de Desarrollo 2020 - 2022",
    "tipoUsuario": "Académico",
    "sector": "Público",
    "año": 2020,
    "link": "https://www.upp.edu.mx/normatividad/files/externa/estatal/programas/Programa_Sectorial_de_Educacion_y_Cultura.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Nallely Alonso Gómez y José Ignacio Rivas",
    "titulo": "La ciencia en Chiapas: un reto para los investigadores de las Ingenierías",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2020,
    "link": "https://www.researchgate.net/publication/346471856_La_ciencia_en_Chiapas_un_reto_para_los_investigadores_de_las_Ingenierias"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Isidro Ruiz - El Sol Morelia",
    "titulo": "Pandemia reta a sistema educativo",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2020,
    "link": "https://oem.com.mx/elsoldemorelia/local/pandemia-reta-a-sistema-educativo-18906454?token=-1328669238"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Jennifer Daza Cantillo, Tatiana Martínez Téllez, Laura Camila Castañeda Liévano - Universidad de La Salle",
    "titulo": "Plan de internacionalización para la empresa de joyería colombiana Eurojoyas",
    "tipoUsuario": "Internacional",
    "sector": "Privado",
    "año": 2020,
    "link": "https://ciencia.lasalle.edu.co/server/api/core/bitstreams/60eeb22a-a5a9-4e62-a2c7-906cb334c9a2/content"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Fundación Ideay Bay Area Council Economic Institute",
    "titulo": "Southern Connection: Innovation Clusters in Mexico\nand the Bridge to Silicon Valley",
    "tipoUsuario": "Internacional",
    "sector": "Privado",
    "año": 2021,
    "link": "https://www.fundacionidea.org.mx/storage/IDEA/files/SouthernConnectionMexicoBayAreaJune2021.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "María de Lourdes Ampudia Rueda, Myrna Limas Hernández, Javier Martínez Romero, Julieta Flores Amador",
    "titulo": "Políticas públicas de innovación tecnológica, impactos y retos para el desarrollo local dentro del contexto de los sistemas de innovación regional: estudio de caso Ciudad Juárez, México",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2021,
    "link": "https://cathi.uacj.mx/bitstream/handle/20.500.11961/18421/2do%20REPORTE%20TECNICO%20PARCIAL%20%20PY%20INNOVACION-%20AMPUDIA-LIMAS-%20FLORES%20-MARTINEZ%2012-2020.pdf?sequence=1&isAllowed=y"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Martín Catalán Lerma - La Jornada Zacatecas",
    "titulo": "Plan Estatal de Desarrollo se enfocará en atender estancamiento económico e industrialización incipiente",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2021,
    "link": "https://ljz.mx/17/11/2021/el-plan-estatal-de-desarrollo-se-enfocara-en-atender-estancamiento-economico-e-industrializacion-incipiente/"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Marlene Gras Marín, Carolina Alí Fojaco y Laura Segura Guzmán - Movimiento STEM",
    "titulo": "Estrategia Educación STEM para México",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2021,
    "link": "https://movimientostem.org/wp-content/uploads/2021/09/Vision-Exito-Intersectorial-_-Cuatro-Ejes-Estrategicos-STEM.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno municipal de Aguascalientes",
    "titulo": "Programa municipal de desarrollo urbano y ordenamiento territorial, Aguascalientes 2045",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2021,
    "link": "https://eservicios2.aguascalientes.gob.mx/NormatecaAdministrador/archivos/MUN-23-98.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno municipal de Aguascalientes",
    "titulo": "Programa municipal de desarrollo urbano y ordenamiento territorial, Aguascalientes 2045",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2021,
    "link": "https://issuu.com/stratomarketing/docs/tj-pdm19-21-202001151000_issuu"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Jocelyn Paullette Chalán Martínez, Jocelyn Alexandra Vásquez Arias, Iddar Iván Jaya Pineda y Bill Jonathan Serrano Orellana - 593 Digital Publisher",
    "titulo": "Relación del nivel de formación académica de las mujeres sobre su capacidad emprendedora para la creación de emprendimientos Machala 2021",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2021,
    "link": "https://www.593dp.com/index.php/593_Digital_Publisher/article/view/719"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Secretaría de Economía Estado de Zacatecas",
    "titulo": "Plan Estatal de Desarrollo 2022 - 2027",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2021,
    "link": "https://see.zacatecas.gob.mx/assets/doc/ped/PED%202022-2027%20CXXXI_SUPL_1_AL_103%20AA.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Secretaría de Economía Estado de Zacatecas",
    "titulo": "Plan Estatal de Desarrollo 2022 - 2027",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2021,
    "link": "https://www.zacatecas.gob.mx/archivos/PED_2022-2027.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Victoriano Gabriel Covarrubias Salvatori, Erik Tapia Mejía,\nJavier Rivera Márquez - Consejo de Ciencia y Tecnología del Estado de Puebla",
    "titulo": "Retos y oportunidades del emprendimiento sustentable en México",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2021,
    "link": "https://cdhpuebla.org.mx/pdf/2021/PRE/Libros/111121_Libro_Retos%20y%20Oportunidades%20del%20Emprendimiento%20Sustentable%20en%20México_Final.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Eugenio Guzmán Soria, María Teresa de la Garza Carranza, Samuel Rebollar Rebollar, Juvencio Hernández Martínez",
    "titulo": "Proyección de crecimiento económico para el Estado de Guanajuato 2020-2030 ante el SARS COV-2",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2021,
    "link": "https://debateeconomico.org/wp-content/uploads/2023/03/debate-30-3-gto.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Eduardo Rodríguez Juárez, Kevin Enrique Solis Batalla, Elías Gaona Rivera - Revista Panorama Económico",
    "titulo": "Impacto de la escolaridad de los trabajadores del sector manufacturero en el desarrollo científico y tecnológico de las entidades federativas de México",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2021,
    "link": "https://www.revistapanoramaeconomico.mx/index.php/PE/article/view/88"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno del Estado de Tlaxcala",
    "titulo": "Plan Estatal de Desarrollo 2021-2027",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2021,
    "link": "https://si.tlaxcala.gob.mx/images/Plan%20Estatal%20de%20Desarrollo%202021-2027.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno del Estado de Tlaxcala",
    "titulo": "Plan Estatal de Desarrollo 2021 - 2027",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2021,
    "link": "https://www.saludtlax.gob.mx/documentos/ITGSEF2016/2022/Plan_Estatal_de_Desarrollo_2021-2027.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Organización para la Cooperación y el Desarrollo Económicos (OECD )",
    "titulo": "OECD Skills Strategy Tlaxcala (Mexico)",
    "tipoUsuario": "Internacional",
    "sector": "Organismo Internacional",
    "año": 2021,
    "link": "https://www.oecd.org/content/dam/oecd/en/publications/reports/2021/06/oecd-skills-strategy-tlaxcala-mexico_448f6854/13925818-en.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Poder Legislativo del Estado de Zacatecas",
    "titulo": "Iniciativa con proyecto mediante la cual se reforman diversas disposiciones legales de la ley orgánica del poder legislativo del Estado de Zacatecas, en materia de comunicación social",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2022,
    "link": "https://www.congresozac.gob.mx/coz/images/uploads/20221116115807.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Geovani Cecilia Campos Vázquez",
    "titulo": "Acuerdo SECIHTI/ 202X por el que se emiten las Reglas de Operación del Programa de\nsubsidios o ayudas denominado Fortalecimiento de la Ciencia, Tecnología e Innovación",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2022,
    "link": "https://www.yucatan.gob.mx/docs/air/AIR_1966_2.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Mesa Directiva\ndel Honorable Congreso del Estado\nde Michoacán de Ocampo",
    "titulo": "Propuesta de acuerdo por el que se exhorta al titular del Poder Ejecutivo del Estado a que, en el próximo proyecto del presupuesto de egresos 2023, se destine y especifique lo mandatado por la ley a las actividades de investigación científica, desarrollo tecnológico e innovación en nuestra entidad, presentada por la diputada Fanny Lyssette Arreola Pichardo, integrante de la Representación Parlamentaria",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2022,
    "link": "http://congresomich.gob.mx/file/Gaceta-061-XXVIII-A-bis-16-11-2022-Propuesta-Acuerdo-Exhorta-al-TitulardelPoderEjecutivo-se-Destine-y-Especifique-por-la-Ley-a-la-Actividades-d.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Jorge Benjamín Tello Medina y Lucio Flores Payans",
    "titulo": "La innovación pública en México desde sus\nsubsistemas de generación de conocimiento",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2022,
    "link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://revistatransregiones.com/web/index.php/tr/article/download/24/21/70&ved=2ahUKEwiEnOqh6eeOAxUKnCYFHarBMqk4KBAWegQIFhAB&usg=AOvVaw2OCOaU8p1nBACRkSbPKQv5"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Adriana Morales Ramírez",
    "titulo": "Migración calificada. Dualidad en el mercado de trabajo calificado y la geografía de la industria automotriz en la región Bajío. México, 2010-2020",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2022,
    "link": "http://dgsa.uaeh.edu.mx:8080/jspui/bitstream/231104/3045/3/AT26176.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "El Colegio de la Frontera Sur",
    "titulo": "Programa institucional entidades sectorizadas derivado del Plan Nacional de Desarrollo 2019-2024",
    "tipoUsuario": "Privado",
    "sector": "Público",
    "año": 2022,
    "link": "https://www.dof.gob.mx/nota_detalle_popup.php?codigo=5652604"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno del Estado de Sinaloa",
    "titulo": "Plan Estatal de Desarrollo 2022 - 2027",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2022,
    "link": "https://ped.sinaloa.gob.mx/wp-content/uploads/2022/04/PED27-compressed.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno Municipal Ixtlahuaca",
    "titulo": "Plan de Desarrollo Municipal 2022 - 2024 Ixtlahuaca",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2022,
    "link": "https://copladem.edomex.gob.mx/sites/copladem.edomex.gob.mx/files/files/pdf/Planes%20y%20programas/Mpales-2022-2024/Ixtlahuaca_PDM_2022_2024.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Consejo de Ciencia y Tecnología del Estado de Morelos (CCyTEM)- Periódico Oficial del Estado de Morelos",
    "titulo": "Actualización del Programa especial de ciencia y\ntecnología del estado de Morelos 2019-2024",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2022,
    "link": "https://periodico.morelos.gob.mx/obtenerPDF/2022/6143.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Coordinación General para el Fomento a la Investigación Científica e Innovación del Estado de Sinaloa",
    "titulo": "Programa Especial de Ciencia y Tecnología del Estado de Sinaloa 2022-2027",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2022,
    "link": "https://media.transparencia.sinaloa.gob.mx/uploads/files/1/1.PROGRAMA%20ESPECIAL%20DE%20CIENCIA%202022-2027.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Ayuntamiento Constitucional Ixtlahuaca",
    "titulo": "Acuerdo de Cabildo Quinta Sesión Extraordinaria: Plan de Desarrollo Municipal 2022 - 2024",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2022,
    "link": "https://ixtlahuaca.gob.mx/docs/gacetas/2022/mar/gm_005.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Asesoría Superior del Estado de Yucatán H Congreso del Estado de Yucatán",
    "titulo": "Informes Individuales: Cuenta Pública 2022",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2022,
    "link": "https://www.congresoyucatan.gob.mx/vistas/comisionVigilancia/cuenta2022/tercera/INFORMES%20INDIVIDUALES/ENTIDADES/TOMO%20IV%20ENTIDADES.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Ayuntamiento de Chapultepec, Estado de México",
    "titulo": "Plan de Desarrollo Municipal 2022 - 2024 Chapultepec",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2022,
    "link": "https://chapultepec.gob.mx/assets/docs/normatividad/Plan-de-Desarrollo-Municipal-2022-2024-Chapultepec.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Pablo Wong González y Ryszard Rózga Luter - Escenarios territoriales ante la reconfiguración del orden mundial",
    "titulo": "Estudios aplicados al análisis global y aprovechamientos\ndel territorio para la innovación productiva",
    "tipoUsuario": "Privado",
    "sector": "Público",
    "año": 2022,
    "link": "https://core.ac.uk/download/548239881.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Congreso del Estado Libre y Soberano de Tlaxcala",
    "titulo": "Plan Estatal de Desarrollo 2021-2027",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2022,
    "link": "https://tlaxcala.gob.mx/images/PDFGOB/plan_estatal_desarrollo_21_27.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "José Luis Ramírez - abc Noticias de Tlaxcala",
    "titulo": "SE DEBE REDEFINIR LA POLÍTICA CIENTÍFICA Y TECNOLÓGICA EN EL ESTADO",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2022,
    "link": "https://abctlax.com/se-debe-redefinir-la-politica-cientifica-y-tecnologica-en-el-estado/"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "El Estado de Jalisco Periódico Oficial",
    "titulo": "REGLAS DE OPERACIÓN. “GESTIÓN DE FONDOS Y PROGRAMAS DE APOYO DE CIENCIA, TECNOLOGÍA E INNOVACIÓN.”",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2022,
    "link": "https://l.coecytjal.org.mx/storage/rop/2022/Reglas%20de%20Operación%20Gestión%20de%20Fondos%20y%20Programas%20CTI%202022.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Congreso del Estado Libre y Soberano de Michoacán de Ocampo",
    "titulo": "Versión Estenográfica Sesión Número 061 (Extraordinaria)",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2022,
    "link": "http://congresomich.gob.mx/file/Sesión-061-I-16-11-2022.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Perla Jazmín González Cruz y Concepción Reyes de la Cruz",
    "titulo": "Ciencia, Tecnología e Innovación en Tabasco 2012-2022",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2022,
    "link": "https://ru.iiec.unam.mx/5858/1/2.%20107-González-Reyes.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Instituto de Ciencia, Tecnología e Innovación del Estado de Chiapas",
    "titulo": "Programa Institucional Instituto de Ciencia, Tecnología e Innovación 2019-2024",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2022,
    "link": "https://icti.chiapas.gob.mx/media/marco-juridico/2022/programa%20institucional%20icti.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Universidad Autónoma de Zacatecas",
    "titulo": "PLAN DE ESTUDIOS ACTUALIZADO A  IMPLEMENTARSE\nPARA LA VII GENERACIÓN DE ESTUDIANTES\nEN ENERO DE 2023",
    "tipoUsuario": "Académico",
    "sector": "Público",
    "año": 2023,
    "link": "https://cienciapolitica.uaz.edu.mx/wp-content/uploads/2021/04/PLAN-DE-ESTUDIOS-DCP.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Organización Internacional del Trabajo (OIT); Fondo de las Naciones Unidas para la Infancia (UNICEF); Gina Andrade Baena",
    "titulo": "Informe sobre la brecha de género en STEM en la Formación Técnico Profesional (EFTP) en México",
    "tipoUsuario": "Internacional",
    "sector": "Organismo Internacional",
    "año": 2023,
    "link": "https://www.unicef.org/mexico/media/7826/file/Informe%20sobre%20la%20brecha%20de%20g%C3%A9nero%20en%20STEM%20en%20M%C3%A9xico.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Monclova",
    "titulo": "Avanza Chiapas en Ciencia, Tecnología e Innovación en el país",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2023,
    "link": "https://monclova.com/nacional/avanza-chiapas-en-ciencia-tecnologia-e-innovacion-en-el-pais"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Hacienda Chiapas",
    "titulo": "Evaluación del nivel de cumplimiento 2023 del plan estatal de desarrollo Chiapas 2019-2024 y programas sectoriales",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2023,
    "link": "https://www.haciendachiapas.gob.mx/PED/Evaluacion.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno del Estado de Durango",
    "titulo": "Plan Estatal de Desarrollo 2023 - 2028",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2023,
    "link": "https://www.cocyted.mx/DesarrolloInstitucional/PED_2023-2028.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno del Estado de Durango",
    "titulo": "Plan Estatal de Desarrollo 2023 - 2028",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2023,
    "link": "https://www.durango.gob.mx/ped.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Sistema Estatal de Evaluación Zacatecas",
    "titulo": "Programa presupuestario 117 Becas y Apoyos COZCyT para el desarrollo de Capital Humano Especializado ejercicio fiscal 2023",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2023,
    "link": "https://see.zacatecas.gob.mx/assets/doc/evaluacion/evaluaciones/2023-EID_BecasCozcyt.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Instituto Municipal de Planificación y Evaluación de Aguascalientes",
    "titulo": "Programa Municipal de Desarrollo Urbano y Ordenamiento Territorial de Aguascalientes 2045 (PMDUOT 2045)",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2024,
    "link": "https://www.implanags.gob.mx/maqueta_ags_implan/files/programas/PMDUOT/2024/pmduot-2045_ev1_entregable_.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Instituto Municipal de Planificación y Evaluación de Aguascalientes",
    "titulo": "PMDUOT 2045",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2024,
    "link": "https://www.implanags.gob.mx/files/programas/PMDUOT/PROGRAMA_MUNICIPAL_DE_DESARROLLO_URBANO_Y_ORDENAMIENTO_TERRITORIAL_2045_(PMDUOT%202045).pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Ayuntamiento de Atlixco",
    "titulo": "Ficha Técnica del Programa de Presupuesto",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2024,
    "link": "https://atlixco.gob.mx/Documentos/PBRSED/PP/PP_2024/Programas_Modificados/PP_3.1.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Omar David Jiménez Ojeda y Oswaldo Chacón Rojas - Universidad Autónoma de Chiapas",
    "titulo": "Evolución, cultura cívica e investigación social: Aproximación al escenario de la educación superior en México",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2024,
    "link": "https://www.dgip.unach.mx/publicaciones-cientificas/images/documentos/13_Evolución_cultura_cívica_e_investigación_social.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno del municipio de Aguascalientes y Secretaría de Medio Ambiente y Desarrollo Sustentable",
    "titulo": "Actualización: Programa de orden ecológico local del municipio de Aguascalientes",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2024,
    "link": "https://webgma.ags.gob.mx/SEMADESU/POEL/2024/Etapas%20del%20POEL/1ER%20ETAPA%20DOCTO.%20CARACTERIZACIÓN.pdf"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Jorge Inés León Balderrama, Juan Martín Preciado Rodríguez, Cuitláhuac Valdez Lafarga",
    "titulo": "Las capacidades de innovación de los Estados Mexicanos",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2024,
    "link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://rgsa.openaccesspublications.org/rgsa/article/download/7484/3043/25096&ved=2ahUKEwiKxMPmhfiOAxUz4skDHS29HLY4ChAWegQIIhAB&usg=AOvVaw2W4lLnFZqnMuG9rMBKCN4g"
  },
  {
    "referencia": "Índice nacional de ciencia, tecnología e innovación 2018",
    "autor": "Gobierno del Estado de Aguascalientes",
    "titulo": "Programa municipal de desarrollo urbano y ordenamiento territorial Aguascalientes 2045 EV 1 y su sistema de información geográfica",
    "tipoUsuario": "Privado",
    "sector": "Público",
    "año": 2024,
    "link": "https://geaappsweb.aguascalientes.gob.mx/seplade/REOTPU/pdf/ProgMun/AGS/PM_AG1-POE.pdf"
  },
  {
    "referencia": "Ramo 38",
    "autor": "Nelly Toche - El Economista",
    "titulo": "Proyecto ciudadano explica de qué trata el Ramo 38",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2015,
    "link": "https://www.eleconomista.com.mx/arteseideas/Proyecto-ciudadano-explica-de-que-trata-el-Ramo-38-20151117-0056.html"
  },
  {
    "referencia": "Ramo 38",
    "autor": "Cámara de Diputados del Congreso de la Nación",
    "titulo": "Diario de los Debates",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://cronica.diputados.gob.mx/pdf/63/2016/abr/160412-4.pdf"
  },
  {
    "referencia": "Ramo 38",
    "autor": "Cámara de Diputados del Congreso de la Nación - Diario de los Debates de la Cámara de Diputados",
    "titulo": "Armonizar su legislación conforme a lo establecido en la Ley General de Instituciones y Procedimientos Electorales, en Materia de Multas Electorales",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://gaceta.diputados.gob.mx/Gaceta/63/2016/abr/20160412-VIII.html"
  },
  {
    "referencia": "Ramo 38",
    "autor": "María Eloísa Talavera Hernández - Cámara de Diputados",
    "titulo": "Con punto de acuerdo por el que se exhorta a los congresos locales a armonizar su legislación con la Ley General de Instituciones y Procedimientos Electorales, en materia de Multas Electorales, a cargo de la diputada María Eloísa Talavera Hernández, del grupo parlamentario del PAN",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2016,
    "link": "https://sil.gobernacion.gob.mx/Archivos/Documentos/2016/04/asun_3359460_20160412_1460475987.pdf"
  },
  {
    "referencia": "Ramo 38",
    "autor": "Cámara de Diputados del Congreso de la Nación - Diario de los Debates de la Cámara de Diputados",
    "titulo": "Armonizar su legislación conforme a lo establecido en la Ley General de Instituciones y Procedimientos Electorales, en Materia de Multas Electorales",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://cronica.diputados.gob.mx/Debates/63/1er/2P/Ord/abr/01L63A1P222-I.html"
  },
  {
    "referencia": "Ramo 38",
    "autor": "Suzzete Alcántara - El Universal",
    "titulo": "Trece estados, sin legislar multas electorales para la ciencia",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2016,
    "link": "https://www.eluniversal.com.mx/articulo/nacion/politica/2016/05/2/trece-estados-sin-legislar-multas-electorales-para-la-ciencia/"
  },
  {
    "referencia": "Ramo 38",
    "autor": "Instituto Estatal Electoral Baja California",
    "titulo": "Instituto Estatal Electoral Baja California",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "https://ieebc.mx/archivos/comunicacion/sintesis/2016/mayo/03052016.pdf"
  },
  {
    "referencia": "Ramo 38",
    "autor": "Edna María Villarreal Peralta, Esteban Santamaría Hernández, Everardo Diaz Gomez y María Dolores Ballesteros Páez, Stephen Birtwistle, Carlos E. Rodríguez, Wilfrido Urueta Rico - British Council",
    "titulo": "Habilidades para la Innovación. Resumen Ejecutivo",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2016,
    "link": "https://www.researchgate.net/publication/309910268_Habilidades_para_la_Innovacion_Resumen_Ejecutivo"
  },
  {
    "referencia": "Ramo 38",
    "autor": "Redacción El Universal",
    "titulo": "Recursos de multas, a ciencia, pide diputada",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2016,
    "link": "https://www.eluniversal.com.mx/articulo/nacion/politica/2016/05/3/recursos-de-multas-ciencia-pide-diputada/?outputType=amp"
  },
  {
    "referencia": "Ramo 38",
    "autor": "Cámara de Diputados del Congreso de la Nación",
    "titulo": "Trece entidades no han armonizado su legislación para destinar multas electorales a la ciencia",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2016,
    "link": "http://www5.diputados.gob.mx/index.php/esl/Comunicacion/Boletines/2016/Mayo/01/1502-Trece-entidades-no-han-armonizado-su-legislacion-para-destinar-multas-electorales-a-la-ciencia"
  },
  {
    "referencia": "Ramo 38",
    "autor": "Andrea Gómez Beltrán - Universidad Latina, S.C",
    "titulo": "Incremento de Recursos Públicos para el Sector Científico y Tecnológico a través de la Reforma del Artículo Sexto de la Contitución Política de los Estados Unidos Mexicanos",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2017,
    "link": "https://ru.dgb.unam.mx/bitstream/20.500.14330/TES01000756399/3/0756399.pdf"
  },
  {
    "referencia": "Ramo 38",
    "autor": "María Eloísa Talavera Hernández - Cámara de Diputados",
    "titulo": "Iniciativa con proyecto de decreto que reforma y adicional el Artículo 458 de la Ley General de Instituciones y Procedimientos Electorales, a cargo de la diputada María Eloísa Talavera Hernández, del grupo parlamentario del PAN",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2017,
    "link": "https://sil.gobernacion.gob.mx/Archivos/Documentos/2017/12/asun_3649308_20171214_1516049955.pdf"
  },
  {
    "referencia": "Ramo 38",
    "autor": "Martha Romero - Diario Revolución",
    "titulo": "Se deben destinar a la ciencia, cultura, deporte y salud, recursos que provengan de sanciones electorales: Barberena",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2022,
    "link": "https://www.diarioevolucion.com.mx/se-deben-destinar-a-la-ciencia-tecnologia-innovacion-cultura-deporte-y-salud-recursos-que-provengan-de-sanciones-electorales-barberena/"
  },
  {
    "referencia": "Ramo 38",
    "autor": "María Eloísa Talavera Hernández - Cámara de Diputados",
    "titulo": "Que reforma y adiciona el artículo 458 de la Ley General de Instituciones y Procedimientos Electorales, a cargo de la diputada María Eloísa Talavera Hernández, del Grupo Parlamentario del PAN",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2017,
    "link": "https://gaceta.diputados.gob.mx/Gaceta/63/2017/nov/20171121-V.html"
  },
  {
    "referencia": "Ramo 38",
    "autor": "María Eloísa Talavera Hernández - Cámara de Diputados",
    "titulo": "Que reforma y adiciona el artículo 458 de la Ley General de Instituciones y Procedimientos Electorales, a cargo de la diputada María Eloísa Talavera Hernández, del Grupo Parlamentario del PAN",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2017,
    "link": "https://gaceta.diputados.gob.mx/PDF/63/2017/nov/20171121-V.pdf"
  },
  {
    "referencia": "Ramo 38",
    "autor": "Daniel Ulices Peralta Jorge",
    "titulo": "La Reforma Político-Electoral de 2014 y su vinculación con el Derecho Humano al accesso de la ciencia, tecnología e innovación en México",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2018,
    "link": "http://ri.uagro.mx/bitstream/handle/uagro/1701/TM_09163375_18.pdf?sequence=1&isAllowed=y"
  },
  {
    "referencia": "Ramo 38",
    "autor": "Comisión de Selección del Comité de Participación Ciudadana del Sistema Estatal Anticorrupción",
    "titulo": "Exposición de motivos que sustentan la presente solicitud para formar parte del Comité de Participación Ciudadana del Sistema Estatal Antocorrupción",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "http://intranet.congresoson.gob.mx:82/Publico/Documento/21369"
  },
  {
    "referencia": "Ramo 38",
    "autor": "Instituto de Evaluación de Políticas Públicas del Estado de Durango (INEVAP)",
    "titulo": "Evaluación Específica                           Programa Apoyos Institucionales",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://cocyted.gob.mx/DesarrolloInstitucional/Evaluaciones/Evaluacion_COCYTED_2019.pdf"
  },
  {
    "referencia": "Ramo 38",
    "autor": "Julieta Villapando Riquelme - Cámara de Diputados",
    "titulo": "Iniciativa con proyecto de Decreto por el que se reforma\nel último párrafo del artículo 473 del Código Electoral del Estado de México",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2020,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/834322/L_Ley_de_Archivos_Administracion_de_Documentos_del_Estado_de_Mexico_y_Municipios.pdf"
  },
  {
    "referencia": "Ramo 38",
    "autor": "Julieta Villapando Riquelme - Cámara de Diputados",
    "titulo": "Iniciativa con proyecto de Decreto por el que se reforma\nel último párrafo del artículo 473 del Código Electoral del Estado de México",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2020,
    "link": "https://legislacion.edomex.gob.mx/sites/legislacion.edomex.gob.mx/files/files/pdf/gct/2020/nov261.pdf"
  },
  {
    "referencia": "Ramo 38",
    "autor": "Silvia Barberena\nMaldonado -  Cámara de Diputados",
    "titulo": "Iniciativa con proyecto de decreto por el que se reforma el último párrafo del artículo 473 del Código Electoral del Estado de México",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2022,
    "link": "https://www.secretariadeasuntosparlamentarios.gob.mx/mainstream/Actividad/Diario/LXI/TOMO%20XIII/57-12may22.pdf"
  },
  {
    "referencia": "Ramo 38",
    "autor": "Instituto Electoral del Estado de México",
    "titulo": "Recursos de sanciones electorales que se destinen a la ciencia: Barberena",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2022,
    "link": "https://medioteca.ieem.org.mx/images/notas_relevantes/13-05-22/04.pdf"
  },
  {
    "referencia": "mujeres-inventoras-patentando-en-mexico",
    "autor": "Domingo Sifontes, Rosa Morales - Female Patenting Activity in Mexico: Understanding the Gap",
    "titulo": "La actividad patentadora de las mujeres en México: una aproximación a la brecha de género",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2022,
    "link": "https://revistas.pucp.edu.pe/index.php/360gestion/article/view/25841/24365"
  },
  {
    "referencia": "mujeres-inventoras-patentando-en-mexico",
    "autor": "Gina Andrea Cruz Blackledge - Senado de la República",
    "titulo": "Iniciativa con proyecto de decreto por el que se adiciona la fracción XXXV al artículo 5 de la ley federal de protección a la propiedad industrial",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2022,
    "link": "https://infosen.senado.gob.mx/sgsp/gaceta/65/2/2022-11-09-1/assets/documentos/Inic_PAN_Sen_Blackledge_art_5_LFPPI.pdf"
  },
  {
    "referencia": "mujeres-inventoras-patentando-en-mexico",
    "autor": "Margarita Tecpoyotl Torres - XXVII Reunión General de Directores: Formación de ingenieros para la innovación",
    "titulo": "La perspectiva de género en la agenda de la educación superior en las áreas de STEM",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2022,
    "link": "https://www.anfei.mx/site/wp-content/uploads/2022/11/C4_MTT.pdf"
  },
  {
    "referencia": "Mujeres inventoras: Patentando en México ¿Cómo vamos?",
    "autor": "Itziar Gómez Jiménez - El Heraldo",
    "titulo": "Se buscan mujeres inventoras",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2021,
    "link": "https://heraldodemexico.com.mx/opinion/2021/4/16/se-buscan-mujeres-inventoras-284724.html"
  },
  {
    "referencia": "Mujeres inventoras: Patentando en México ¿Cómo vamos?",
    "autor": "Itziar Gómez Jiménez - El Heraldo",
    "titulo": "Se buscan mujeres inventoras",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2021,
    "link": "https://www.linkedin.com/pulse/se-buscan-mujeres-inventoras-itziar-gómez-/"
  },
  {
    "referencia": "Mujeres inventoras: Patentando en México ¿Cómo vamos?",
    "autor": "Domingo Sifontes, Rosa Morales - Female Patenting Activity in Mexico: Understanding the Gap",
    "titulo": "La actividad patentadora de las mujeres en México: una aproximación a la brecha de género",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2022,
    "link": "https://revistas.pucp.edu.pe/index.php/360gestion/article/view/25841/24365"
  },
  {
    "referencia": "Mujeres inventoras: Patentando en México ¿Cómo vamos?",
    "autor": "Domingo Sifontes, Rosa Morales - Female Patenting Activity in Mexico: Understanding the Gap",
    "titulo": "La actividad patentadora de las mujeres en México: una aproximación a la brecha de género",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2022,
    "link": "https://revistas.pucp.edu.pe/index.php/360gestion/article/download/25841/24973?inline=1"
  },
  {
    "referencia": "Mujeres inventoras: Patentando en México ¿Cómo vamos?",
    "autor": "Global Intellectual Property Alliance (GLIPA) - Marca Sur",
    "titulo": "GLIPA presenta estudio con cifras sobre mujeres inventoras en Brasil, Chile, Colombia y México",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2023,
    "link": "https://marcasur.com/noticia/glipa-presenta-estudio-con-cifras-sobre-mujeres-inventoras-en-brasil-chile-colombia-y-mexico"
  },
  {
    "referencia": "Mujeres inventoras: Patentando en México ¿Cómo vamos?",
    "autor": "Itziar Gómez Jiménez - El Heraldo",
    "titulo": "Se buscan mujeres inventoras",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2021,
    "link": "https://heraldodemexico.com.mx/opinion/2021/4/16/se-buscan-mujeres-inventoras-284724.html"
  },
  {
    "referencia": "Mujeres inventoras: Patentando en México ¿Cómo vamos?",
    "autor": "Itziar Gómez Jiménez - El Heraldo",
    "titulo": "Se buscan mujeres inventoras",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2021,
    "link": "https://www.linkedin.com/pulse/se-buscan-mujeres-inventoras-itziar-gómez-/"
  },
  {
    "referencia": "Mujeres inventoras: Patentando en México ¿Cómo vamos?",
    "autor": "Domingo Sifontes, Rosa Morales - Female Patenting Activity in Mexico: Understanding the Gap",
    "titulo": "La actividad patentadora de las mujeres en México: una aproximación a la brecha de género",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2022,
    "link": "https://revistas.pucp.edu.pe/index.php/360gestion/article/view/25841/24365"
  },
  {
    "referencia": "Mujeres inventoras: Patentando en México ¿Cómo vamos?",
    "autor": "Domingo Sifontes, Rosa Morales - Female Patenting Activity in Mexico: Understanding the Gap",
    "titulo": "La actividad patentadora de las mujeres en México: una aproximación a la brecha de género",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2022,
    "link": "https://revistas.pucp.edu.pe/index.php/360gestion/article/download/25841/24973?inline=1"
  },
  {
    "referencia": "Mujeres inventoras: Patentando en México ¿Cómo vamos?",
    "autor": "Global Intellectual Property Alliance (GLIPA) - Marca Sur",
    "titulo": "GLIPA presenta estudio con cifras sobre mujeres inventoras en Brasil, Chile, Colombia y México",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2023,
    "link": "https://marcasur.com/noticia/glipa-presenta-estudio-con-cifras-sobre-mujeres-inventoras-en-brasil-chile-colombia-y-mexico"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Acosta V. Silvia; Pedraza A. Elba M.; Sánchez S. Yazmín A.",
    "titulo": "Emprendimiento social femenino: una estrategia para el desarrollo",
    "tipoUsuario": "Académico",
    "sector": "Público",
    "año": 2017,
    "link": "https://repository.uaeh.edu.mx/revistas/index.php/investigium/article/download/2952/2974?inline=1"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Briseño Aguirre Nadia de la Luz; Riveros Rosas Angélica; Velázquez Rojas, K.G.",
    "titulo": "Mentoring para mujeres emprendedoras",
    "tipoUsuario": "Académico",
    "sector": "Público",
    "año": 2018,
    "link": "https://repositorios.fca.unam.mx/investigacion/memorias/2018/10.05.pdf"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Manuel Ernesto Becerra Bizarrón, Luz Amparo Delgado Díaz, Georgina Dolores Sandoval Ballesteros",
    "titulo": "La permanencia empresarial de los emprendimientos sociales desde la perspectiva de los administradores",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2018,
    "link": "https://iaidres.org.mx/assets/desarrollo-y-posicionamiento-de-las-empresas-mexicanas-2019-capitulo-1.pdf"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Mujeres del Pacífico",
    "titulo": "Programas de apoyo alemprendimiento femenino en la Alianza del Pacífico",
    "tipoUsuario": "Internacional",
    "sector": "Organismo Internacional",
    "año": 2018,
    "link": "https://asem.mx/wp-content/uploads/2021/06/5b96f4d0a1270_1er-Informe-MdP-ASELA-OAP.pdf"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Silvia Acosta, Elba Pedraza y Yazmín Sánchez",
    "titulo": "Emprendimiento social femenino: una estrategia para el desarrollo",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2018,
    "link": "https://repository.uaeh.edu.mx/revistas/index.php/investigium/article/view/2952/2974"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "María Cecilia Arriola Solís, Rocío Rosas Vargas, Marilú León Andrade y Alejandro Ortega Hernández",
    "titulo": "La situación de las mujeres empresarias en el sur del Estado de Guanajuato: El caso de tarimoro",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2018,
    "link": "https://www.jovenesenlaciencia.ugto.mx/index.php/jovenesenlaciencia/article/view/2539"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Gustavo Vicente Huerta Rincón, Nancy Hernández Ambris y María Dolores Martínez García",
    "titulo": "Motivos y obstáculos en el proceso de emprendimiento: Caso de una mujer emprendedora en la ciudad de Pachuca de Soto, Hidalgo",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2018,
    "link": "https://revistas.uazuay.edu.ec/index.php/memorias/article/view/183/173"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Nancy Hernández Ambris",
    "titulo": "Mujeres emprendedoras: Un estudio multi-caso en la ciudad de Pachuca de Soto",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2018,
    "link": "http://dgsa.uaeh.edu.mx:8080/jspui/bitstream/231104/2391/1/Mujeres%20emprendedoras%20un%20estudio%20multi-caso%20en%20la%20ciudad%20de%20Pachuca..pdf"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Ilse Gabriela Munguía Esparza",
    "titulo": "Plan de mejoramiento organizacional para la asociación Tlanemani Mujeres con Liderazgo A.C.",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2019,
    "link": "http://bdigital.dgse.uaa.mx:8080/xmlui/bitstream/handle/11317/1729/437048.pdf?sequence=1&isAllowed=y"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Manuel Ernesto Becerra Bizarrón, Luz Amparo Delgado Díaz, Georgina Dolores Sandoval Ballesteros",
    "titulo": "Artículo 2. Factores de permanencia empresarial, como punto de partida para el fortalecimiento de los emprendiemientos sociales",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2020,
    "link": "https://iquatroeditores.org/revista/index.php/relayn/article/view/2/97"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Javier Damián Simón",
    "titulo": "Mujeres emprendedoras y situación de sus unidades económicas en la zona de Tuxtepec, Oaxaca, México",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2020,
    "link": "https://dialnet.unirioja.es/servlet/articulo?codigo=7863445"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Nancy Guadalupe Aguilar Hernández, Guadalupe de Monserrat Sánchez Domínguez, Krystell Paola González Gutiérrez, Elizabeth Carmona Díaz y Alejandra Rosaldo Rocha",
    "titulo": "Mujeres Universitarias: Experiencia en Emprendimiento",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2020,
    "link": "https://static1.squarespace.com/static/55564587e4b0d1d3fb1eda6b/t/5f73a1a4c489d610c40478f9/1601413561306/Tomo+01+-+Diseminación+de+resultados+de+investigación+universitaria+-+Tabasco+2020.pdf"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Joselyn Paullette Chalán Martínez, Jocelyn Alexandra Vásquez Arias, Iddar Iván Jaya Pineda y Bill Jonathan Serrano Orellana",
    "titulo": "Relación del nivel de formación académica de las\nmujeres sobre su capacidad emprendedora para la\ncreación de emprendimientos Machala 2021",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2021,
    "link": "https://dialnet.unirioja.es/servlet/articulo?codigo=8149606"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Joselyn Paullette Chalán Martínez, Jocelyn Alexandra Vásquez Arias, Iddar Iván Jaya Pineda y Bill Jonathan Serrano Orellana",
    "titulo": "Relación del nivel de formación académica de las\nmujeres sobre su capacidad emprendedora para la\ncreación de emprendimientos Machala 2021",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2021,
    "link": "https://d1wqtxts1xzle7.cloudfront.net/106755570/819-libre.pdf?1697723715=&response-content-disposition=inline%3B+filename%3DRelacion_del_nivel_de_formacion_academic.pdf&Expires=1754451210&Signature=WCsW23gTTeG18Ten2XYOUba-wUVaVAcwoBaT-eXi3LqCUXnINmCBXSg5aRan-hWek50GbihZqOYZ4MLB8zxPCb1CwsR4AIwNjzqNYQUfojZiS3xvoXIe08-1rO3qPZl5eodIOFN0sZmsT3U63qbNMhbYcrGTU6-QN5KXNzEQ9EyOHK4PqFLI5QJElkqsEuPqEQbgGjExtbP0ikKeSP5i~TudDXrkY9waDkM2YNxCa7dTvkFofNkSPgI5BEjFaZV3OG~1ZiBaCLVCv6EH0dHfbyRRmFrPpdueotesPg7OPm3hHedCGucT75IecPKDtKe9oM5Pk9KVyuXmXeu-N8N9ag__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Viridiana Giselle López Sánchez, Elvia Espinosa Infante, Nancy Fabiola Martínez Cervantes - Gestión y análisis de los fenómenos en las organizaciones",
    "titulo": "lia: emprendimiento de mujeres\nen una startup",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2021,
    "link": "https://zaloamati.azc.uam.mx/server/api/core/bitstreams/a0264679-9341-4eef-8436-9c8a76b7f8bb/content"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Viridiana Giselle López Sánchez, Elvia Espinosa Infante, Nancy Fabiola Martínez Cervantes - Gestión y análisis de los fenómenos en las organizaciones",
    "titulo": "lia: emprendimiento de mujeres\nen una startup",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2021,
    "link": "https://core.ac.uk/download/518070941.pdf"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Elizabeth Mora Moreno",
    "titulo": "“Escenarios socioculturales para las mujeres en el\nemprendimiento como trabajo decente: el caso del Tianguis\nOrgánico Artesanal de Mexicali”",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2022,
    "link": "https://repositorioinstitucional.uabc.mx/server/api/core/bitstreams/ba6e6fb4-9e26-41f9-b5ce-82b923bebd4b/content"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Mercedes Castro Westendarp - Habitar la vivienda y la ciudad: Perspectivas para la inclusión entre pasado, presente y futuro",
    "titulo": "La necesidad de replantear\nel espacio doméstico y el\nespacio productivo en el\ndiseño de vivienda desde una\nperspectiva de género",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2022,
    "link": "https://www.researchgate.net/profile/Zonia-Rojas-Pulido-2/publication/392594864_Estudios_sobre_el_espacio_publico_y_la_violencia_en_contra_de_las_mujeres_Estado_del_arte_2016_a_2020/links/6849ecc643aad60b4c165fab/Estudios-sobre-el-espacio-publico-y-la-violencia-en-contra-de-las-mujeres-Estado-del-arte-2016-a-2020.pdf#page=86"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Elizabeth Mora Moreno y Alejandro José Peimbert Duarte - Revista Reflexiones",
    "titulo": "Trabajo decente: mujeres microempresarias, sostenibilidad económica y laboral en Mexicali, México",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2023,
    "link": "https://www.scielo.sa.cr/scielo.php?pid=S1659-28592023000100091&script=sci_arttext&tlng=en"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Rosa Rojas Paredes; Alejandro Campos Sánchez; Elia Marúm Espinosa",
    "titulo": "Género y emprendimiento social: Perspectivas en el contexto de la innovación",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2023,
    "link": "https://simehbucket.s3.amazonaws.com/miscfiles/gacnero-y-emprendimiento-social-ebook_uop74nwe.pdf"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Rosa Rojas Paredes, Alejandro Campos Sánchez, Elia Marúm Espinosa",
    "titulo": "Género y emprendimiento social.\nPerspectivas en el contexto de la innovación",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2023,
    "link": "https://repositori.uvic-ucc.cat/bitstream/handle/10854/180190/artconlli_a2023_perez_anna_perfil_sociodemografico.pdf?sequence=1&isAllowed=y#page=124"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Universidad Autónoma Metropolitana",
    "titulo": "Economía social, cooperativismo y políticas públicas Potencialidades de organizaciones alternativas",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2023,
    "link": "https://www.researchgate.net/profile/Julieta-Martinez-Cuero/publication/390372754_Economia_social_cooperativismo_y_politicas_publicas/links/67ec150549e91c0fead34689/Economia-social-cooperativismo-y-politicas-publicas.pdf"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Luz Amparo Delgado Diaz, Georgina Dolores Sandoval Ballesteros, Miriam del Carmen Vargas Aceves, Indira Rosalia Montes Zambrano",
    "titulo": "Los obstáculos que tienen las estudiantes universitarias que dirigen una micro o pequeña empresa durante su formación académica",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2023,
    "link": "https://d1wqtxts1xzle7.cloudfront.net/121004157/iquatro.2023.09.4-libre.pdf?1737775517=&response-content-disposition=inline%3B+filename%3DCapitulo_22_Los_Obstaculos_que_tienen_la.pdf&Expires=1754438369&Signature=C8dba3KpJ5C1idphPpoqmH1ebzWsAp6wTaLTAksUSkdvytVKDEl2U7o5Fwwu7~Gk4j1QMkqFh4f6uxLAORZIKN~Dgkx5fcJroqWLTVuIUuA8WYrUBINEABMY6Hjw4f2e8~sgUsNTjSn6npyfTU2tiDrKW~kaTfyCOVOUmS4CAor4X6UBYCu6IyDHIgj1QR1ijbKAsfIYcXATJhGFQMuYMYYSgWIYA04wfIJrZauP-T3jclzlmwHi4pGpKycS7sbIAinq80SgITuWCsm3~UQxVhSMkiU5QPIEDVvrlxLPA3EurIHgR1l3tsWbbYgTR8z-g4KkRTsy7SdowUwMVYYoTA__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Luz Amparo Delgado Diaz, Georgina Dolores Sandoval Ballesteros, Miriam del Carmen Vargas Aceves, Indira Rosalia Montes Zambrano",
    "titulo": "Los obstáculos que tienen las estudiantes universitarias que dirigen una micro o pequeña empresa durante su formación académica",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2023,
    "link": "https://www.academia.edu/127241491/Capítulo_22_Los_Obstaculos_que_tienen_las_estudiantes_universitarias_que_dirigen_una_micro_o_pequeña_empresa_durante_su_formación_académica"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Karen Gisel Velázquez Rojas y Nadia de la Luz Briseño Aguirre",
    "titulo": "Desarrollo del capital humano para el empoderamiento de las empresarias de la CDMX",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2023,
    "link": "https://doi.org/10.30554/lumina.v24.n1.4915.2023"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Arlen Cerón Islas, Ruth Josefina Alcántara Hernández, Norma Arely Zuñiga Espinosa, Irma Hernández Aranda",
    "titulo": "La caracterización de las nenis en Hidalgo: un análisis cualitativo",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2023,
    "link": "https://iquatroeditores.org/revista/index.php/relayn/article/view/1134/649"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Paola Francelia Noriega Velazco",
    "titulo": "El tipo penal en materia electoral y su eficiencia en el Sistema de Justicia del Estado Mexicano",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2024,
    "link": "http://dgsa.uaeh.edu.mx:8080/jspui/bitstream/231104/6078/1/ATD659.pdf"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Heidi Margarita Chalé Chan, José Daniel Poot Chay, Ingrid Abril Segovia Patrón, Leandro Ismael Tun Sulub, Ingrid Ishell Valdez Uitzil",
    "titulo": "Mujeres emprendedoras en TIMUCUY: Transformadoras de la comunidad",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2024,
    "link": "https://ojelt.utmetropolitana.edu.mx/index.php/ojelt/article/view/34"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "Nadia de la Luz Briseño Aguirre, Karen Gisel Velázquez Rojas",
    "titulo": "Emprendedoras y comercio digital: Una respuesta ante la crisis",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2024,
    "link": "https://repositorios.fca.unam.mx/alafec/docs/publicaciones/ebook/gestion_empresas_v2.pdf"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "María Mayela Terán-Cázares, Ivon Abigail González-Garza y Laura Leticia Gaona-Tamez",
    "titulo": "Generación de proyectos sociales de emprendimiento en una universidad del norte\nde México a través de la misión organizacional",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2024,
    "link": "https://vinculategica.uanl.mx/index.php/v/article/download/1079/1110"
  },
  {
    "referencia": "Emprendimiento y género en México",
    "autor": "María Mayela Terán Cázares, Ivon Abigail González Garza, Blanca Nelly Rodríguez Garza - Innovación y emprendimiento para el desarrollo sostenible",
    "titulo": "La Misión Organizacional como Factor de Influencia en la Generación de Proyectos Sociales de Emprendimiento Universitario: Un Estudio del alumno Universitario en la Zona Norte de Nuevo León",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2024,
    "link": "https://www.researchgate.net/profile/Elia-Marum-Espinosa-2/publication/384970936_Innovacion_y_Emprendimiento_para_el_Desarrollo_Sostenible/links/67be3af9645ef274a494b1a1/Innovacion-y-Emprendimiento-para-el-Desarrollo-Sostenible.pdf"
  },
  {
    "referencia": "Propiedad Intelectual, Creatividad e Innovación para el Desarrollo de México",
    "autor": "María Eloísa Talavera Hernández",
    "titulo": "Iniciativa con Proyecto de Decreto por el que se reforman y adicionan diversas disposiciones de la Ley\nGeneral de Cultura y Derechos Culturales",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2018,
    "link": "https://infosen.senado.gob.mx/sgsp/gaceta/63/3/2018-07-25-1/assets/documentos/Inic_PAN_Cultura.pdf"
  },
  {
    "referencia": "Propiedad Intelectual, Creatividad e Innovación para el Desarrollo de México",
    "autor": "Daniel Gabriel Ávila Ruiz - Cámara de Diputados",
    "titulo": "Que reforma y adiciona diversas disposiciones de la Ley General de Cultura y Derechos Culturales, presentada por el senador Daniel Gabriel Ávila Ruiz, en nombre de la diputada María Eloísa Talavera Hernández, del Grupo Parlamentario del PAN, en la sesión de la Comisión Permanente del miércoles 25 de julio de 2018",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2018,
    "link": "https://gaceta.diputados.gob.mx/Gaceta/63/2018/jul/20180727.html"
  },
  {
    "referencia": "Propiedad Intelectual, Creatividad e Innovación para el Desarrollo de México",
    "autor": "José Antonio García García - Cámara de diputados",
    "titulo": "Iniciativa con Proyecto de Decreto por el que se adiciona la fracción VIII Bis al artículo 38 de la Ley Orgánica de la Administración Pública del Estado de México, en materia de Industrias Creativas",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2019,
    "link": "https://www.secretariadeasuntosparlamentarios.gob.mx/mainstream/Actividad/Gaceta/LX/GP-32%20(30-ABR-19).pdf"
  },
  {
    "referencia": "Propiedad Intelectual, Creatividad e Innovación para el Desarrollo de México",
    "autor": "Esteban Santamaría Hernández",
    "titulo": "DERECHOS DE PROPIEDAD INTELECTUAL Y POLÍTICAS PÚBLICAS PARA LA ECONOMÍA CREATIVA\nRecomendaciones para América Latina y el Caribe",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2022,
    "link": "https://economiacreativa.deboraarango.edu.co/Documentos/Derechos-de-propiedad-intelectual-y-politicas-publicas-para-la-Economía del conocimiento y economía creativa como herramientas para salir de la crisis generada por el COVID-19 en América Latina y el Caribe: un enfoque hacía la Alianza del Pacífico-recomendaciones-para-America-Latina-y-el-Caribe.pdf"
  },
  {
    "referencia": "Propiedad Intelectual, Creatividad e Innovación para el Desarrollo de México",
    "autor": "José Antonio García García - Cámara de diputados",
    "titulo": "Iniciativa con Proyecto de Decreto por el que se adiciona la fracción XXVII y se recorre la subsecuente del artículo 41 Bis de la Ley Orgánica de la Administración Pública Federal",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2022,
    "link": "https://sil.gobernacion.gob.mx/Archivos/Documentos/2022/06/asun_4371431_20220622_1655913513.pdf"
  },
  {
    "referencia": "Propiedad Intelectual, Creatividad e Innovación para el Desarrollo de México",
    "autor": "Senado de la República",
    "titulo": "Avala comisión dictamen para promover participación de mujeres en proyectos de innovación",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2023,
    "link": "https://comunicacionsocial.senado.gob.mx/informacion/comunicados/6652-avalan-comisiones-dictamen-para-promover-participacion-de-mujeres-en-proyectos-de-innovacion"
  },
  {
    "referencia": "Propiedad Intelectual, Creatividad e Innovación para el Desarrollo de México",
    "autor": "Lizbeth Lorely Guerrero González, Brenda Guadalupe Burciaga Sánchez, Myrna Isela García Bencomo, Jesús Robles Villa, José Gerardo Reyes López",
    "titulo": "Deficiencias en la innovación y registro del producto en la empresa Bimbo en la ciudad de Chihuahua",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2023,
    "link": "https://ojs.brazilianjournals.com.br/ojs/index.php/BRJD/article/view/61777"
  },
  {
    "referencia": "Probabilidad y efecto del COVID-19 en la automatización de empleos en la economía creativa de México",
    "autor": "United Nations Conference on trade and development",
    "titulo": "Creative Economy Outlook 2024",
    "tipoUsuario": "Internacional",
    "sector": "Organismo Internacional",
    "año": 2024,
    "link": "https://unctad.org/system/files/official-document/ditctsce2024d2_en.pdf"
  },
  {
    "referencia": "Patentes verdes en el país",
    "autor": "Gina Andrea Cruz Blackledge - Senado de la República",
    "titulo": "Iniciativa con proyecto de decreto por el que se adicionan la fracción IX al Artículo 2, la fracción XXI al artículo 12, y la fracción IX al artículo 13, de la Ley de Ciencia y Tecnología",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2022,
    "link": "https://infosen.senado.gob.mx/sgsp/gaceta/65/2/2022-11-09-1/assets/documentos/Inic_PAN_Sen_Blackledge_art_2_12_13_LCyT.pdf"
  },
  {
    "referencia": "Panorama General de la Educación en México",
    "autor": "Edna María Villarreal Peralta",
    "titulo": "Endogeneidad de los rendimientos educativos en México",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2015,
    "link": "https://perfilesla.flacso.edu.mx/index.php/perfilesla/article/view/595"
  },
  {
    "referencia": "Panorama General de la Educación en México",
    "autor": "Edna María Villarreal PEralta",
    "titulo": "Endogeneidad de los rendimientos educativos en México",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2018,
    "link": "https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0188-76532018000100265"
  },
  {
    "referencia": "Panorama del Emprendimiento en México",
    "autor": "Jhoana Karen Santos Prudente,  Marcela Martínez García, Antonio Alfonso Rodríguez Rosales y Claudia Bertha Zavala Bus",
    "titulo": "Estándares para el proceso de evaluación de metodologías de emprendimiento en Guerrero",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2024,
    "link": "https://federacionglobal.com/FEGLININ/No30/sep2024.html#p=4"
  },
  {
    "referencia": "Knowledge Economy and Creative Economy as Tools to Overcome the COVID-19 Crisis in Latin America and the Caribbean: A Focus on the Pacific Alliance",
    "autor": "Álvaro Antón Sancho, Pablo Fernández Arias and Diego Vergara",
    "titulo": "Higher Education in the Pacific Alliance: Descriptive and Exploratory Analysis of the Didactic Potential of Virtual Reality",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2023,
    "link": "https://www.mdpi.com/2414-4088/7/3/30"
  },
  {
    "referencia": "Knowledge Economy and Creative Economy as Tools to Overcome the COVID-19 Crisis in Latin America and the Caribbean: A Focus on the Pacific Alliance",
    "autor": "Álvaro Antón Sancho, Pablo Fernández Arias and Diego Vergara",
    "titulo": "Higher Education in the Pacific Alliance: Descriptive and Exploratory Analysis of the Didactic Potential of Virtual Reality",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2023,
    "link": "https://ouci.dntb.gov.ua/en/works/7PrBQ3xl/"
  },
  {
    "referencia": "Información estadística nacional sobre educación superior y posgrado: https://www.caiinno.org/pbi- educacionsuperioryposgrado/",
    "autor": "Miguel Ángel González Rubio, Nora Del Carmen Osuna Millán, María del Consuelo Salado Soto, Josué Miguel Flores Parra",
    "titulo": "La simulación computacional como propuesta para el apoyo en la toma de decisiones contra la deserción escolar en Tijuana Baja California",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2021,
    "link": "https://www.proquest.com/openview/a238935c1f71f9b7280f426a1602866f/1?pq-origsite=gscholar&cbl=1006393"
  },
  {
    "referencia": "Información estadística nacional sobre educación superior y posgrado: https://www.caiinno.org/pbi- educacionsuperioryposgrado/",
    "autor": "Miguel Ángel González Rubio, Nora Del Carmen Osuna Millán, María del Consuelo Salado Soto, Josué Miguel Flores Parra",
    "titulo": "La simulación computacional como propuesta para\nel apoyo en la toma de decisiones contra la deserción\nescolar en Tijuana Baja California",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2021,
    "link": "https://www.proquest.com/docview/2648272143?fromopenview=true&pq-origsite=gscholar&sourcetype=Scholarly%20Journals"
  },
  {
    "referencia": "Habilidades para la Innovación",
    "autor": "Sistema de Información Legislativa",
    "titulo": "Iniciativa que reforma a los artículos 2 y 12 de la ley de ciencia y tecnología, a cargo de la diputada María Eloísa Talavera Hernández, del Grupo Parlamentario del PAN",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2018,
    "link": "https://sil.gobernacion.gob.mx/Archivos/Documentos/2018/04/asun_3695597_20180411_1521059640.pdf"
  },
  {
    "referencia": "Habilidades para la Innovación",
    "autor": "Sistema de Información Legislativa",
    "titulo": "Iniciativa que reforma a los artículos 2 y 12 de la ley de ciencia y tecnología, a cargo de la diputada María Eloísa Talavera Hernández, del Grupo Parlamentario del PAN",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2019,
    "link": "https://gaceta.diputados.gob.mx/PDF/63/2018/mar/20180313-V.pdf"
  },
  {
    "referencia": "Generalidades de la Reforma Político Electoral 2014",
    "autor": "Ana Judith figueroa Hernández",
    "titulo": "La Reforma Político - Electoral, un trabajo de acompañamiento",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2021,
    "link": "https://www.panslp.org/storage/news/vuwMhFhesbKpeCE2YBgwItD6nZGjxNDoyDFGTjM5.pdf"
  },
  {
    "referencia": "Generalidades de la Reforma Político Electoral 2014",
    "autor": "Unidad de Política Migratoria, Registro e Identidad de Personas",
    "titulo": "Estadística de los eventos de presentación de personas migrantes ante la autoridad migratoria mexicana en el periodo 2012-2019",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2021,
    "link": "http://www.politicamigratoria.gob.mx/work/models/PoliticaMigratoria/CEM/Publicaciones/Revistas/movilidades/7/MOVILIDADES_7.pdf"
  },
  {
    "referencia": "Panorama de la propiedad intelectual en México: otra perspectiva",
    "autor": "María Eloísa Talavera Hernández - Comisión de Economía de la Cámara de Diputados",
    "titulo": "Iniciativa con Proyecto de Decreto por el que se adiciona un inciso g) a la fracción XII del artículo 6o. de la Ley de la Propiedad Industrial",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2018,
    "link": "https://www.senado.gob.mx/66/gaceta_del_senado/documento/80999"
  },
  {
    "referencia": "Panorama de la propiedad intelectual en México: otra perspectiva",
    "autor": "María Eloísa Talavera Hernández",
    "titulo": "Que adiciona el artículo 6o. de la Ley de la Propiedad Industrial, recibida de la diputada María Eloísa Talavera Hernández, del Grupo Parlamentario del PAN, en la sesión de la Comisión Permanente del miércoles 16 de mayo de 2018",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2018,
    "link": "https://gaceta.diputados.gob.mx/PDF/63/2018/may/20180521.pdf"
  },
  {
    "referencia": "Panorama de la propiedad intelectual en México: otra perspectiva",
    "autor": "Plenilunia Salud",
    "titulo": "Se presenta iniciativa para incrementar participación de mujeres en la creación de inventos",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2018,
    "link": "https://plenilunia.com/tecnologia/se-presenta-iniciativa-para-incrementar-participacion-de-mujeres-en-la-creacion-de-inventos/53907/"
  },
  {
    "referencia": "Panorama de la propiedad intelectual en México: otra perspectiva",
    "autor": "Cámara de Diputados del Congreso de la Nación",
    "titulo": "Talavera Hernández impulsa iniciativa con ese fin; la representación femenina sólo es de 36 por ciento en el Sistema Nacional de Investigadores",
    "tipoUsuario": "Legislativo",
    "sector": "Público",
    "año": 2018,
    "link": "http://www5.diputados.gob.mx/index.php/esl/Comunicacion/Boletines/2018/Mayo/26/5490-Piden-politicas-publicas-para-participacion-de-mujeres-en-la-creacion-de-inventos"
  },
  {
    "referencia": "ENLACE Primaria - https://www.caiinno.org/enlace-primaria/",
    "autor": "Comisión Nacional Bancaria y de Valores (CNBV)",
    "titulo": "Estudios Económicos CNBV, Volumen 5",
    "tipoUsuario": "Gubernamental",
    "sector": "Privado",
    "año": 2023,
    "link": "https://www.gob.mx/cms/uploads/attachment/file/846226/Estudios_Econ_micos_CNBV_-_Vol._5__2023.pdf"
  },
  {
    "referencia": "Economía del conocimiento y economía creativa como herramientas para salir de la crisis generada por el COVID-19 en América Latina y el Caribe: un enfoque hacía la Alianza del Pacífico",
    "autor": "Esteban Santamaría Hernández",
    "titulo": "DERECHOS DE PROPIEDAD INTELECTUAL Y POLÍTICAS PÚBLICAS PARA LA ECONOMÍA CREATIVA\nRecomendaciones para América Latina y el Caribe",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2022,
    "link": "https://economiacreativa.deboraarango.edu.co/Documentos/Derechos-de-propiedad-intelectual-y-politicas-publicas-para-la-Economía del conocimiento y economía creativa como herramientas para salir de la crisis generada por el COVID-19 en América Latina y el Caribe: un enfoque hacía la Alianza del Pacífico-recomendaciones-para-America-Latina-y-el-Caribe.pdf"
  },
  {
    "referencia": "Economía del conocimiento y economía creativa como herramientas para salir de la crisis generada por el COVID-19 en América Latina y el Caribe: un enfoque hacía la Alianza del Pacífico",
    "autor": "Díaz Macías, Tania Maritza, García Ruíz, Jaime Gabriel, García Pedraza, Lienny - Revista de Ciencias Sociales",
    "titulo": "Producción del Sombrero de Paja\nToquilla en el contexto del desarrollo local\ncomunitario",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2023,
    "link": "https://produccioncientificaluz.org/index.php/rcs/article/view/40962"
  },
  {
    "referencia": "Economía del conocimiento y economía creativa como herramientas para salir de la crisis generada por el COVID-19 en América Latina y el Caribe: un enfoque hacía la Alianza del Pacífico",
    "autor": "Díaz Macías, Tania Maritza, García Ruíz, Jaime Gabriel, García Pedraza, Lienny - Revista de Ciencias Sociales",
    "titulo": "Producción del Sombrero de Paja\nToquilla en el contexto del desarrollo local\ncomunitario",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2023,
    "link": "rg/index.php/rcs/article/download/40962/47005?inline=1"
  },
  {
    "referencia": "Economía del conocimiento y economía creativa como herramientas para salir de la crisis generada por el COVID-19 en América Latina y el Caribe: un enfoque hacía la Alianza del Pacífico",
    "autor": "Juan Antonio Color Vázquez, Jorge Víctor Alcaraz Vera, Rubén Chávez Rivera - Revista CIMEXUS",
    "titulo": "La economía creativa en el municipio de Morelia, Michoacán, México: un análisis desde el desarrollo económico local",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2025,
    "link": "https://cimexus.umich.mx/index.php/cimexus/article/view/578/533"
  },
  {
    "referencia": "Creative Economy in Mexico and its impact on the national economy",
    "autor": "Economic Development Department (New Mexico)",
    "titulo": "New Mexico Creative Industries Division Study",
    "tipoUsuario": "Internacional",
    "sector": "Público",
    "año": 2024,
    "link": "https://edd.newmexico.gov/wp-content/uploads/2024/07/NM_CID_Report_2024UPDATED1.pdf"
  },
  {
    "referencia": "Banco de Invenciones por género en México a nivel estatal",
    "autor": "Silvia Palomino Hernández",
    "titulo": "El género de las patentes ¿qué tanto patentamos las mujeres?",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2021,
    "link": "https://amppi.org.mx/wp-content/uploads/2021/04/43Blg_10aArtComDiveIncSilviaP.pdf"
  },
  {
    "referencia": "Banco de información estadística de invenciones por género",
    "autor": "Diputados PAN",
    "titulo": "Boletín: Impulsaremos actividad inventiva de la mujer en todo el país: Dip. Eloísa Talavera",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2018,
    "link": "http://diputadospan.mx/DiputadosPAN/layouts/Noticia.aspx?tipo=2&idnoticia=5330&id=5330"
  },
  {
    "referencia": "Banco de información estadística de invenciones por género",
    "autor": "MVS Noticias",
    "titulo": "Piden reforma al IMPI para ampliar reconocimiento a creaciones de mexicanas",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2018,
    "link": "http://www5.diputados.gob.mx/index.php/camara/Comunicacion/Monitoreo-de-Medios/2018/04-Abril/28/28-abril-2018-14-41-00"
  },
  {
    "referencia": "Banco de información estadística de invenciones por género",
    "autor": "MVS Noticias",
    "titulo": "Piden reforma al IMPI para ampliar reconocimiento a creaciones de mexicanas",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2018,
    "link": "https://mvsnoticias.com/nacional/2018/4/28/piden-reforma-al-impi-para-ampliar-reconocimiento-creaciones-de-mexicanas-371964.html"
  },
  {
    "referencia": "¿Por qué te importa?",
    "autor": "Andrea Gómez Beltrán - Universidad Latina, S.C.",
    "titulo": "Incremento de Recursos Públicos para el Sector Científico y Tecnológico a través de la Reforma del Artículo Sexto de la Contitución Política de los Estados Unidos Mexicanos",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2017,
    "link": "https://ru.dgb.unam.mx/bitstream/20.500.14330/TES01000756399/3/0756399.pdf"
  },
  {
    "referencia": "Reforma Político Electoral",
    "autor": "Andrea Gómez Beltrán - Universidad Latina, S.C.",
    "titulo": "Incremento de Recursos Públicos para el Sector Científico y Tecnológico a través de la Reforma del Artículo Sexto de la Contitución Política de los Estados Unidos Mexicanos",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2017,
    "link": "https://ru.dgb.unam.mx/bitstream/20.500.14330/TES01000756399/3/0756399.pdf"
  },
  {
    "referencia": "Comparo voto",
    "autor": "Roberto Duque - El Financiero",
    "titulo": "Roberto Duque en el Financiero",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2018,
    "link": "https://www.facebook.com/watch/?v=2183881024961516"
  },
  {
    "referencia": "Comparo voto",
    "autor": "Patricia Ramírez",
    "titulo": "Aconseja IECM informarse para emitir voto razonado",
    "tipoUsuario": "Privado",
    "sector": "Privado",
    "año": 2018,
    "link": "https://www.iecm.mx/www/ut/ucs/INFORMA/2018/mayo18m/INFOM120518/A2.pdf"
  },
  {
    "referencia": "Comparo voto",
    "autor": "Gaceta de Iztapalapa",
    "titulo": "Se presentó la plataforma digital Comparo Voto para contribuir al sufragio informado",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2018,
    "link": "https://gacetadeiztapalapa.com.mx/se-presento-la-plataforma-digital-comparo-voto-para-contribuir-al-sufragio-informado/"
  },
  {
    "referencia": "Comparo voto",
    "autor": "Iván Serrano Jáuregui - Gaceta Oficial",
    "titulo": "Una plataforma por un voto informado",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2018,
    "link": "https://www.gaceta.udg.mx/wp-content/uploads/2020/02/968.pdf"
  },
  {
    "referencia": "Comparo voto",
    "autor": "Instituto Electoral Ciudad de México",
    "titulo": "Informe Anual de Evaluación de Factores Internos y Externos 2018",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2019,
    "link": "https://www.iecm.mx/www/taip/cg/inf/2019/INF-035-19.pdf"
  },
  {
    "referencia": "Banco de datos de industrias culturales y creativas",
    "autor": "Ana Francia Ortís Quijada y Gibrán Valencia Murrieta",
    "titulo": "Medir la cultura para mejorarla",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2019,
    "link": "https://arteentreparentesis.unison.mx/index.php/AEP/article/view/13"
  },
  {
    "referencia": "Banco de datos de industrias culturales y creativas",
    "autor": "Marius Roeterdink",
    "titulo": "Understanding the place-specific formation processes of sustainable urban experiments A mixed method comparative case study of Formula E",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2021,
    "link": "https://studenttheses.uu.nl/bitstream/handle/20.500.12932/41084/Master%27s%20thesis%20Marius%20Roeterdink%20%5bPDF%5d.pdf?sequence=1&isAllowed=y"
  },
  {
    "referencia": "Banco de datos de industrias culturales y creativas",
    "autor": "Consejo Nuevo León",
    "titulo": "Plan Estretégico Nuevo León 2040",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2023,
    "link": "https://planestrategico.conl.mx/documentos/bibliografia"
  },
  {
    "referencia": "Artificial intelligence and co-creativity: A general copyright perspective from Latin America",
    "autor": "Esteban Santamaría Hernández",
    "titulo": "DERECHOS DE PROPIEDAD INTELECTUAL Y POLÍTICAS PÚBLICAS PARA LA ECONOMÍA CREATIVA Recomendaciones para América Latina y el Caribe",
    "tipoUsuario": "Académico",
    "sector": "Privado",
    "año": 2022,
    "link": "https://economiacreativa.deboraarango.edu.co/Documentos/Derechos-de-propiedad-intelectual-y-politicas-publicas-para-la-Economía del conocimiento y economía creativa como herramientas para salir de la crisis generada por el COVID-19 en América Latina y el Caribe: un enfoque hacía la Alianza del Pacífico-recomendaciones-para-America-Latina-y-el-Caribe.pdf"
  },
  {
    "referencia": "Artificial intelligence and co-creativity: A general copyright perspective from Latin America",
    "autor": "United Nations Conference on trade and development",
    "titulo": "Creative Economy Outlook 2024",
    "tipoUsuario": "Internacional",
    "sector": "Organismo Internacional",
    "año": 2024,
    "link": "https://unctad.org/system/files/official-document/ditctsce2024d2_en.pdf"
  },
  {
    "referencia": "OTROS",
    "autor": "Gobierno de México",
    "titulo": "Estado General de las Variedades Vegetales en México",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2017,
    "link": "https://www.gob.mx/snics/videos/estado-general-de-las-variedades-vegetales-en-mexico"
  },
  {
    "referencia": "OTROS",
    "autor": "Plan de Tecnologías del Lenguaje - Gobierno de España",
    "titulo": "Análisis del sector de tecnologías del lenguaje en México",
    "tipoUsuario": "Gubernamental",
    "sector": "Público",
    "año": 2018,
    "link": "https://plantl.digital.gob.es/tecnologias-lenguaje/actividades/Estudios%20del%20sector/Sector%20de%20tecnologías%20del%20lenguaje%20en%20Iberoamérica/Informe-TL-Mexico.pdf"
  },
  {
    "referencia": "OTROS",
    "autor": "La Casa Blanca",
    "titulo": "Annual Intellectual Property Report to Congress",
    "tipoUsuario": "Internacional",
    "sector": "Público",
    "año": 2024,
    "link": "https://bidenwhitehouse.archives.gov/wp-content/uploads/2024/04/IPEC-FY-23-Annual-Report_Final.pdf"
  },
  {
    "referencia": "OTROS",
    "autor": "United States Patent and Trademark Office",
    "titulo": "2024 2024 Women Women in Intellectual in Intellectual\nWomen in IP:\nProperty (IP) Symposium",
    "tipoUsuario": "Internacional",
    "sector": "Público",
    "año": 2024,
    "link": "https://www.uspto.gov/sites/default/files/documents/2024WomenInIPSymposiumEbinderFINAL.pdf"
  }
]