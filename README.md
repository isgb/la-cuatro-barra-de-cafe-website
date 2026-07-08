# La Cuatro Barra de Café — Sitio web oficial

Sitio web de una página para **La Cuatro Barra de Café**, cafetería de especialidad
en el Centro Histórico de Puebla (Av. 4 Oriente 205). Café poblano de origen único,
brew bar, expendio y brunch. Reconocida en el **Top 50 The Best Coffee Shops México 2025**.

## Tecnologías

- HTML5 semántico
- CSS3 (custom properties, grid/flexbox, animaciones)
- JavaScript vanilla (sin frameworks)
- Bootstrap 5.3 (grid, tabs, collapse, accordion — autohospedado)
- Swiper 11 (carrusel de la galería — autohospedado, ver `js/carrusel.js`)
- Fuentes autohospedadas en `woff2`: Bebas Neue (rótulos), Inter (títulos y texto), Caveat (notas a mano)

## Estructura

```
sitio_web/
├── index.html          Página principal (one-page con anclas)
├── css/
│   ├── variables.css   Tokens de diseño (colores, tipografía, espaciado)
│   ├── reset.css       Reset, utilidades y accesibilidad base
│   ├── navbar.css      Barra de navegación fija
│   ├── hero.css        Portada y botones globales
│   ├── about.css       Historia y filosofía
│   ├── menu.css        Temporada, carta, origen/expendio y métodos
│   ├── gallery.css     Carrusel de galería (Swiper) y visor (lightbox)
│   ├── testimonials.css Eventos, comunidad y preguntas frecuentes
│   ├── contact.css     Ubicación/horarios y formulario de contacto
│   ├── footer.css      Pie de página
│   └── responsive.css  Ajustes transversales por breakpoint
├── js/
│   ├── app.js          Inicialización general
│   ├── navbar.js       Scroll, enlace activo, menú móvil
│   ├── animations.js   Revelado con IntersectionObserver
│   ├── carrusel.js     Carrusel de galería (Swiper)
│   ├── gallery.js      Lightbox accesible (teclado + foco atrapado)
│   ├── forms.js        Validación del formulario
│   └── datos-estructurados.js  JSON-LD (SEO) inyectado al <head>
├── img/                Fotografías optimizadas (WebP + JPEG)
├── fonts/              Fuentes woff2 (latin subset)
├── icons/              Favicon SVG
├── data/menu.json      Fuente de contenido de la carta
├── robots.txt
└── sitemap.xml
```

## Identidad visual

Paleta tomada del local real:

| Token | Color | Origen |
|---|---|---|
| Oliva `#6e7350` | Marca | Cerámica de la barra y logo |
| Terracota `#d98a6b` | Acento | Fachada colonial |
| Madera `#8b6239` | Soporte | Mobiliario y barra |
| Crema `#f5efe4` | Fondo | Muros interiores |
| Tinta `#1e1b17` | Fondo oscuro | Gráficas de campaña de la marca |
| Ámbar `#b8763a` | Hover/CTA | Crema del espresso |

## Cómo verlo

Abrir `index.html` directamente en el navegador, o servirlo localmente:

```
npx serve .
```

## Pendientes con el cliente

- **Precios del menú**: no hay lista pública oficial; la carta indica "precios en barra".
- **Teléfono**: el número que circula en agregadores no está confirmado por la marca; no se publicó.
- **Formulario**: la validación funciona en cliente; para envío real conectar
  Formspree/EmailJS o un backend propio en `js/forms.js` (punto marcado con comentario).
- **Dominio**: las URLs absolutas (canonical, OG, sitemap) usan un dominio de ejemplo
  `lacuatro.barradecafe.mx`; reemplazar por el dominio real al publicar.
