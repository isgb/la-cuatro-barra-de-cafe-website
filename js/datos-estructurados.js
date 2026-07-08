/* ============================================
   Datos estructurados (JSON-LD) para buscadores
   ============================================ */

(function () {
  'use strict';

  const datosNegocio = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "La Cuatro Barra de Café",
    "alternateName": "La Cuatro | Barra de Café Poblano",
    "description": "Café de especialidad con granos del estado de Puebla, brew bar, expendio y brunch en una casa colonial del Centro Histórico de Puebla.",
    "servesCuisine": "Café de especialidad",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. 4 Oriente 205, Centro Histórico",
      "addressLocality": "Puebla",
      "addressRegion": "Puebla",
      "postalCode": "72000",
      "addressCountry": "MX"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 19.0454, "longitude": -98.1969 },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "10:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "09:00", "closes": "20:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "10:00", "closes": "18:00" }
    ],
    "sameAs": [
      "https://www.instagram.com/lacuatro.barradecafe/",
      "https://www.tiktok.com/@lacuatro.barradecafe",
      "https://www.facebook.com/p/La-Cuatro-Barra-de-Caf%C3%A9-61560229100565/"
    ],
    "award": "Top 50 The Best Coffee Shops México 2025"
  };

  const scriptDatos = document.createElement('script');
  scriptDatos.type = 'application/ld+json';
  scriptDatos.textContent = JSON.stringify(datosNegocio);
  document.head.appendChild(scriptDatos);
})();
