# Mejores Prácticas de Fuentes Web para SEO

La elección y optimización de las fuentes web tienen un impacto significativo en el SEO de una página, principalmente a través de la **velocidad de carga** y la **experiencia del usuario (UX)**.

## Impacto en el SEO:

1.  **Velocidad de Carga (Core Web Vitals):** Las fuentes son recursos que el navegador debe descargar. Archivos de fuentes grandes o una carga ineficiente pueden ralentizar el tiempo de carga de la página, afectando métricas como Largest Contentful Paint (LCP) y Cumulative Layout Shift (CLS), que son factores directos de clasificación en Google.
2.  **Legibilidad y Accesibilidad:** Fuentes fáciles de leer mejoran la experiencia del usuario. Un buen UX se traduce en mayor tiempo en la página, menor tasa de rebote y mayor interacción, lo que Google interpreta como una señal positiva de calidad.
3.  **Compatibilidad y Consistencia:** Asegurar que las fuentes se visualicen correctamente en diferentes navegadores y dispositivos móviles es crucial para una experiencia uniforme y profesional.

## Estrategias de Optimización:

*   **Pre-carga de Fuentes Críticas:** Utilizar `<link rel="preload">` para cargar las fuentes esenciales lo antes posible, evitando que bloqueen el renderizado de la página.
*   **Carga Asíncrona:** Implementar la carga asíncrona de fuentes (por ejemplo, con `font-display: swap;` en CSS o JavaScript) para que el texto sea visible incluso si la fuente aún no ha cargado completamente, mostrando una fuente de respaldo temporal.
*   **Formatos Modernos:** Priorizar el uso de formatos de fuentes modernos como **WOFF2**, que ofrecen mejor compresión y rendimiento que formatos más antiguos como TTF u OTF.
*   **Subconjunto de Fuentes (Font Subsetting):** Incluir solo los caracteres y estilos de fuente que realmente se utilizan en la página para reducir el tamaño del archivo.
*   **Google Fonts o CDN:** Utilizar servicios de fuentes como Google Fonts o alojar las fuentes propias en una Red de Distribución de Contenido (CDN) para aprovechar su optimización de entrega y caché.
*   **Declarar `font-display`:** Usar la propiedad `font-display` en `@font-face` para controlar cómo se renderiza el texto mientras la fuente se carga. `swap` es una opción común para priorizar la visibilidad del contenido.
*   **Reducir el número de fuentes:** Limitar el número de familias de fuentes y estilos utilizados para minimizar las solicitudes HTTP y el tamaño total de los archivos.

## Fuentes Actuales de la Página:

La página actual utiliza las siguientes fuentes de Google Fonts:

*   **Playfair Display** (para títulos)
*   **Poppins** (para elementos destacados/subtítulos y botones)
*   **Lato** (para textos largos y cuerpo)

Estas fuentes son modernas y legibles, pero su impacto en el SEO dependerá de cómo se carguen y optimicen. La recomendación es asegurar que se apliquen las técnicas de carga asíncrona y pre-carga si es necesario.
