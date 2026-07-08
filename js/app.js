/* ============================================
   Inicialización general del sitio.
   Los módulos (navbar, animaciones, galería,
   formulario) se auto-inicializan; aquí solo
   van los detalles globales.
   ============================================ */

(function () {
  'use strict';

  // Año dinámico en el pie de página
  const parrafoDerechos = document.querySelector('.pie-inferior p');
  if (parrafoDerechos) {
    const anioActual = new Date().getFullYear();
    parrafoDerechos.textContent = '© ' + anioActual + ' La Cuatro Barra de Café. Todos los derechos reservados.';
  }
})();
