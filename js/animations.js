/* ============================================
   Revelado de elementos al hacer scroll.
   Usa IntersectionObserver y respeta la
   preferencia de movimiento reducido.
   ============================================ */

(function () {
  'use strict';

  const elementosARevelar = document.querySelectorAll('.revelar');
  const prefiereMenosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefiereMenosMovimiento || !('IntersectionObserver' in window)) {
    elementosARevelar.forEach(function (elemento) {
      elemento.classList.add('visible');
    });
    return;
  }

  const observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
        observador.unobserve(entrada.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  // Pequeño escalonado entre elementos hermanos para un revelado más natural
  elementosARevelar.forEach(function (elemento, indice) {
    const retraso = (indice % 4) * 90;
    elemento.style.transitionDelay = retraso + 'ms';
    observador.observe(elemento);
  });
})();
