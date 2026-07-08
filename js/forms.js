/* ============================================
   Validación del formulario de contacto.
   El envío queda listo para conectarse a un
   servicio como Formspree; mientras tanto se
   confirma la validación al usuario.
   ============================================ */

(function () {
  'use strict';

  const formulario = document.getElementById('formularioContacto');

  if (!formulario) {
    return;
  }

  const estadoEnvio = formulario.querySelector('.formulario-estado');

  const mensajesError = {
    campoNombre: 'Escribe tu nombre (mínimo 2 caracteres).',
    campoCorreo: 'Escribe un correo electrónico válido.',
    campoAsunto: 'Elige un asunto para tu mensaje.',
    campoMensaje: 'Cuéntanos un poco más (mínimo 10 caracteres).'
  };

  function obtenerParrafoError(campo) {
    return campo.closest('div').querySelector('.formulario-error');
  }

  function validarCampo(campo) {
    const esValido = campo.checkValidity();
    const parrafoError = obtenerParrafoError(campo);

    campo.classList.toggle('invalido', !esValido);
    parrafoError.textContent = esValido ? '' : mensajesError[campo.id];

    return esValido;
  }

  const campos = Array.from(formulario.querySelectorAll('.formulario-campo'));

  campos.forEach(function (campo) {
    campo.addEventListener('blur', function () {
      validarCampo(campo);
    });

    campo.addEventListener('input', function () {
      if (campo.classList.contains('invalido')) {
        validarCampo(campo);
      }
    });
  });

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const todosValidos = campos.map(validarCampo).every(Boolean);

    if (!todosValidos) {
      const primerInvalido = formulario.querySelector('.invalido');
      if (primerInvalido) {
        primerInvalido.focus();
      }
      return;
    }

    // Punto de conexión para un servicio de envío (Formspree, EmailJS, backend propio).
    // Por ahora confirmamos al usuario y limpiamos el formulario.
    estadoEnvio.textContent = '¡Gracias! Tu mensaje está listo. Te responderemos a la brevedad.';
    formulario.reset();

    setTimeout(function () {
      estadoEnvio.textContent = '';
    }, 6000);
  });
})();
