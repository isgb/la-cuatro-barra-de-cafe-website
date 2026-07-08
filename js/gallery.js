/* ============================================
   Visor de la galería (lightbox accesible):
   navegación con flechas, cierre con Escape
   y foco atrapado dentro del diálogo.
   ============================================ */

(function () {
  'use strict';

  const piezasGaleria = Array.from(document.querySelectorAll('.galeria-pieza'));
  const visor = document.getElementById('visorGaleria');

  if (piezasGaleria.length === 0 || !visor) {
    return;
  }

  const imagenVisor = visor.querySelector('.visor-imagen');
  const tituloVisor = visor.querySelector('.visor-titulo');
  const botonCerrar = visor.querySelector('.visor-cerrar');
  const botonAnterior = visor.querySelector('.visor-anterior');
  const botonSiguiente = visor.querySelector('.visor-siguiente');

  let indiceActual = 0;

  function mostrarImagen(indice) {
    indiceActual = (indice + piezasGaleria.length) % piezasGaleria.length;
    const pieza = piezasGaleria[indiceActual];
    const imagen = pieza.querySelector('img');

    imagenVisor.src = imagen.currentSrc || imagen.src;
    imagenVisor.alt = imagen.alt;
    tituloVisor.textContent = pieza.dataset.titulo || '';
  }

  function abrirVisor(indice) {
    mostrarImagen(indice);
    visor.hidden = false;
    document.body.style.overflow = 'hidden';
    botonCerrar.focus();

    // Con el visor abierto el carrusel no debe moverse:
    // ni con las flechas del teclado ni por autoplay
    if (window.carruselGaleria) {
      window.carruselGaleria.keyboard.disable();
      window.carruselGaleria.autoplay.stop();
    }
  }

  function cerrarVisor() {
    visor.hidden = true;
    document.body.style.overflow = '';

    // El carrusel queda en la foto que se estaba viendo
    if (window.carruselGaleria) {
      window.carruselGaleria.slideTo(indiceActual, 0);
      window.carruselGaleria.keyboard.enable();
    }

    // El foco vuelve a la pieza que quedó a la vista
    piezasGaleria[indiceActual].focus();
  }

  piezasGaleria.forEach(function (pieza, indice) {
    pieza.addEventListener('click', function () {
      abrirVisor(indice);
    });
  });

  botonCerrar.addEventListener('click', cerrarVisor);
  botonAnterior.addEventListener('click', function () { mostrarImagen(indiceActual - 1); });
  botonSiguiente.addEventListener('click', function () { mostrarImagen(indiceActual + 1); });

  // Clic sobre el fondo oscuro también cierra
  visor.addEventListener('click', function (evento) {
    if (evento.target === visor) {
      cerrarVisor();
    }
  });

  document.addEventListener('keydown', function (evento) {
    if (visor.hidden) {
      return;
    }

    if (evento.key === 'Escape') {
      cerrarVisor();
    } else if (evento.key === 'ArrowLeft') {
      mostrarImagen(indiceActual - 1);
    } else if (evento.key === 'ArrowRight') {
      mostrarImagen(indiceActual + 1);
    } else if (evento.key === 'Tab') {
      atraparFoco(evento);
    }
  });

  // Mantiene el tabulador dentro del visor mientras está abierto
  function atraparFoco(evento) {
    const focusables = [botonCerrar, botonAnterior, botonSiguiente];
    const primero = focusables[0];
    const ultimo = focusables[focusables.length - 1];

    if (evento.shiftKey && document.activeElement === primero) {
      evento.preventDefault();
      ultimo.focus();
    } else if (!evento.shiftKey && document.activeElement === ultimo) {
      evento.preventDefault();
      primero.focus();
    }
  }
})();
