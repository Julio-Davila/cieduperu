# CIEDU Perú — Rediseño Web Moderno y Actual 2026

Este proyecto representa una modernización completa, profesional y de alto impacto del portal web oficial de **CIEDU Perú (Centro de Innovación Educativa)** (<https://cieduperu.com/>).

---

## 🚀 Diagnóstico: Sitio Anterior vs. Nueva Propuesta

| Aspecto | Sitio Anterior (cieduperu.com) | Nueva Versión 2026 |
| :--- | :--- | :--- |
| **Arquitectura de Información** | Menú plano de más de 23 cursos desordenados (mezclaba lectura veloz para niños de primaria con cursos de armapol y tiro policial). | **Segmentación clara por audiencias**:<br>1. *División Ascenso PNP y FF.AA.* (13 cursos)<br>2. *Línea Escolar, Niños y Jóvenes* (5 cursos)<br>3. *Derecho, Criminalística y Gestión* (3 cursos)<br>4. *Computación e Idiomas* (2 cursos) |
| **Diseño y Estética** | Plantilla de WordPress (2020-2021) con sliders lentos, tipografía genérica, contrastes deficientes y fotos de stock desfasadas. | **EdTech UI contemporánea (2026)** con Bento-Grid, Glassmorphism suave, tipografía moderna (`Plus Jakarta Sans` y `Outfit`), paleta de colores institucional (Azul Real profundo, Verde Policía, Ámbar y Acentos esmeralda). |
| **Navegación e Interactividad** | Solo enlaces estáticos ancla (`#top`, `#nosotros`, `#contactos`). | **Buscador en tiempo real con autocompletado**, filtro por pestañas dinámicas, modal interactivo de temarios por curso, orientador vocacional rápido y botón de Campus Virtual. |
| **Conversión y Ventas (CRO)** | Formulario básico de contacto con escaso seguimiento y botones desconectados. | **Generador de leads con redirección directa a WhatsApp**, precargando el nombre del curso, estudiante y ciudad para atención en menos de 2 minutos. |
| **Rendimiento y Mobile-First** | Pesado, múltiples plugins de WordPress, carga lenta en conexiones 3G/4G móviles. | **Ultra liviano y optimizado**: HTML5 semántico, Tailwind CSS, iconos vectoriales SVG limpios (`Lucide`) y código JavaScript vanilla sin dependencias pesadas. |

---

## 📁 Estructura del Proyecto

```text
ciedu-peru-web/
├── index.html       # Estructura semántica, metadatos SEO, OpenGraph y componentes
├── styles.css       # Estilos complementarios, animaciones y micro-interacciones
├── app.js           # Base de datos interactiva de los 23 cursos, filtros y modals
└── README.md        # Documentación y guía de despliegue
```

---

## 💡 Características Principales Implementadas

1. **Header Inteligente**: Barra superior de noticias y convocatorias 2026, logo con branding renovado, mega-menú organizado por áreas, acceso a Campus Virtual y botón flotante de WhatsApp.
2. **Hero Section de Alto Impacto**: Copywriting persuasivo orientado al valor tangible (ascensos policiales con puntaje y éxito escolar), buscador predictivo de cursos y métricas en vivo (+5,200 alumnos, 98.4% aprobación).
3. **Bento Grid de Especialidades**: 3 pilares visualmente diferenciados que dirigen al usuario a su área sin confusiones.
4. **Catálogo Interactivo de los 23 Cursos**:
   - Criminalística y Ciencias Forenses
   - Armapol y Tiro Policial
   - Código de Justicia Militar-Policial
   - Documentación Policial y Redacción de Actas
   - Tránsito y Seguridad Vial
   - Orden Abierto y Mando de Unidades
   - Orden Público y Control de Multitudes
   - Historia y Doctrina de la PNP
   - Seguridad Ciudadana y Patrullaje Integrado
   - Psicología Criminal y del Delincuente
   - Defensa Personal y Tácticas de Reducción
   - Tráfico Ilícito de Drogas e Interdicción
   - Terrorismo y Contraterrorismo
   - Lectura Veloz y Mnemotecnia
   - Comprensión Lectora y Análisis de Textos
   - Oratoria, Liderazgo y Expresión Corporal
   - Matemática y Razonamiento Lógico
   - Ortografía, Redacción y Comunicación Eficaz
   - Derecho Penal y Procesal Penal
   - Constitución Política del Perú y DD.HH.
   - Ética, Liderazgo y Transparencia Pública
   - Computación e Informática (Office & Excel)
   - Inglés Práctico y Conversacional
5. **Modal de Detalle de Programa**: Muestra el objetivo pedagógico, los 4 módulos temáticos del curso, modalidad, horas lectivas (120 hrs) y botón de inscripción directa.
6. **Orientador Vocacional Rápido (Quiz Interactivo)**: En 1 clic recomienda el curso ideal según si eres personal policial, escolar/padre o profesional independiente.
7. **Social Proof & Testimonios Verificados**: Reseñas con estrellas de suboficiales PNP, madres de familia y egresados de computación.
8. **Acordeón FAQ**: Resuelve objeciones clave (validez para escalafón policial, clases grabadas en turnos rotativos, edades para lectura veloz y medios de pago: Yape, Plin, BCP, BBVA).
9. **Formulario de Captura de Alumnos**: Integrado directamente con el WhatsApp oficial `+51 993 577 680` de CIEDU Perú.
10. **Footer Institucional Completo**: Con dirección física en Urb. Laderas de Pachacamac, teléfonos, horarios y botón de Libro de Reclamaciones.

---

## 🌐 Cómo Publicar o Integrar esta Web

### Opción 1: Despliegue Inmediato Gratuito (Vercel / Netlify / GitHub Pages)
- Sube esta carpeta a GitHub o arrastra la carpeta a [Netlify Drop](https://app.netlify.com/drop).
- Tendrás el sitio funcionando en HTTPS en menos de 60 segundos.

### Opción 2: Reemplazo en Servidor Actual (cPanel / Apache / Nginx / Hostinger)
- Conéctate al administrador de archivos o FTP del hosting de `cieduperu.com`.
- Haz un respaldo de tu carpeta `public_html`.
- Sube los archivos `index.html`, `styles.css` y `app.js` a la raíz.

### Opción 3: Integración en WordPress (Manteniendo el Blog o Campus Virtual)
- Puedes usar esta plantilla como la nueva **Landing Page principal** (`index.html`) y colocar tu instalación de WordPress en un subdirectorio o subdominio (ej: `campus.cieduperu.com` o `cieduperu.com/aula/`).

---

## 🎨 Paleta de Color y Tipografía

- **Azul Primario (Brand)**: `#0e3492` (Transmite rigor académico, confianza y solemnidad institucional)
- **Verde Táctico (Police)**: `#1b4d3e` (Identidad de las fuerzas policiales y de orden)
- **Naranja / Oro (Accent & Gold)**: `#f97316` / `#f59e0b` (Energía, dinamismo e innovación pedagógica)
- **Verde WhatsApp**: `#10b981` / `#059669` (Conversión directa y atención al cliente)
- **Tipografías**: *Outfit* (Títulos display contemporáneos) y *Plus Jakarta Sans* (Lectura limpia y profesional).
