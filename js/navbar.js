/* ============================================
   Navbar: estado compacto al hacer scroll,
   enlace activo según la sección visible y
   cierre del menú móvil al navegar.
   ============================================ */

(function () {
  'use strict';

  const barraNavegacion = document.querySelector('.barra-navegacion');
  const enlacesNavegacion = document.querySelectorAll('.lista-navegacion .nav-link');
  const menuColapsable = document.getElementById('menuNavegacion');

  function actualizarFondoNavbar() {
    if (window.scrollY > 40) {
      barraNavegacion.classList.add('compacta');
    } else {
      barraNavegacion.classList.remove('compacta');
    }
  }

  window.addEventListener('scroll', actualizarFondoNavbar, { passive: true });
  actualizarFondoNavbar();

  // Marca el enlace correspondiente a la sección visible
  const seccionesObservadas = [];
  enlacesNavegacion.forEach(function (enlace) {
    const idDestino = enlace.getAttribute('href');
    if (idDestino && idDestino.startsWith('#')) {
      const seccion = document.querySelector(idDestino);
      if (seccion) {
        seccionesObservadas.push({ seccion: seccion, enlace: enlace });
      }
    }
  });

  function marcarEnlaceActivo() {
    const posicion = window.scrollY + window.innerHeight * 0.35;
    let actual = null;

    seccionesObservadas.forEach(function (par) {
      if (par.seccion.offsetTop <= posicion) {
        actual = par;
      }
    });

    seccionesObservadas.forEach(function (par) {
      const esActivo = actual !== null && par.enlace === actual.enlace;
      par.enlace.classList.toggle('activo', esActivo);
      if (esActivo) {
        par.enlace.setAttribute('aria-current', 'true');
      } else {
        par.enlace.removeAttribute('aria-current');
      }
    });
  }

  window.addEventListener('scroll', marcarEnlaceActivo, { passive: true });
  marcarEnlaceActivo();

  // Cierra el menú móvil después de elegir una sección
  if (menuColapsable) {
    menuColapsable.addEventListener('click', function (evento) {
      const esEnlace = evento.target.closest('a');
      const estaAbierto = menuColapsable.classList.contains('show');
      if (esEnlace && estaAbierto && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(menuColapsable).hide();
      }
    });
  }
})();
