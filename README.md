# Proyecto Caiino WebP

Este es un proyecto basado en [Next.js](https://nextjs.org) creado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Requisitos Previos

- Node.js (versión recomendada: 18 o superior).
- Un gestor de paquetes como npm, yarn, pnpm o bun.

## Configuración Local

Para trabajar con este proyecto de forma local, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Pansocrates03/caiino-webp.git
   cd caiino-webp
   ```

2. Instala las dependencias:

   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   # o
   bun install
   ```

3. **Comentarizar el `export` en `next.config.js`:**

   Para trabajar de forma local, abre el archivo `next.config.js` y comenta la línea que exporta la configuración. Por ejemplo:

   ```javascript
   // module.exports = nextConfig;
   ```

   Esto es necesario para evitar conflictos con configuraciones específicas de producción.

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   # o
   bun dev
   ```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Estructura del Proyecto

El proyecto sigue la estructura estándar de Next.js con algunas carpetas adicionales para componentes, datos y estilos personalizados. Algunas carpetas importantes incluyen:

- `src/app`: Contiene las páginas principales del proyecto.
- `src/components`: Componentes reutilizables como `Navbar`, `Footer`, y otros.
- `src/data`: Archivos de datos estáticos.
- `public`: Archivos estáticos como imágenes y fuentes.

## Scripts Disponibles

En el archivo `package.json`, encontrarás los siguientes scripts útiles:

- `dev`: Inicia el servidor de desarrollo.
- `build`: Genera una versión optimizada para producción.
- `start`: Inicia el servidor en modo producción.
- `lint`: Ejecuta el linter para verificar errores de estilo.

## Despliegue

El despliegue de este proyecto se realiza fácilmente en [Vercel](https://vercel.com). Sigue estos pasos:

1. Crea una cuenta en Vercel.
2. Conecta tu repositorio de GitHub.
3. Configura las variables de entorno necesarias (si aplica).
4. Haz clic en "Deploy".

Consulta la [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.

## Recursos Adicionales

- [Documentación de Next.js](https://nextjs.org/docs): Aprende más sobre las características y API de Next.js.
- [Tutorial interactivo de Next.js](https://nextjs.org/learn): Un tutorial práctico para principiantes.
- [Repositorio de GitHub de Next.js](https://github.com/vercel/next.js): Contribuye o explora el código fuente de Next.js.

---

Si tienes preguntas o encuentras algún problema, no dudes en abrir un issue en este repositorio.
