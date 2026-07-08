/* ============================================
   Carrusel de la galería (Swiper autohospedado):
   foto activa centrada, flechas, contador de
   posición, gestos táctiles y autoplay que se
   detiene en cuanto la persona interactúa.
   ============================================ */

(function () {
  'use strict';

  const contenedorCarrusel = document.querySelector('.galeria-carrusel');

  if (!contenedorCarrusel || typeof Swiper === 'undefined') {
    return;
  }

  const prefiereMenosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Instancia global: el visor (gallery.js) la pausa mientras está
  // abierto y sincroniza el carrusel con la foto que se cerró
  window.carruselGaleria = new Swiper(contenedorCarrusel, {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 16,
    rewind: true,
    speed: prefiereMenosMovimiento ? 0 : 650,
    autoplay: prefiereMenosMovimiento ? false : {
      delay: 4500,
      pauseOnMouseEnter: true,
      disableOnInteraction: true
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    navigation: {
      prevEl: '.galeria-flecha-anterior',
      nextEl: '.galeria-flecha-siguiente'
    },
    pagination: {
      el: '.galeria-contador',
      type: 'fraction'
    },
    a11y: {
      prevSlideMessage: 'Foto anterior',
      nextSlideMessage: 'Foto siguiente',
      slideLabelMessage: 'Foto {{index}} de {{slidesLength}}'
    },
    breakpoints: {
      768: {
        spaceBetween: 24
      }
    }
  });
})();
