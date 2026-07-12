/* ============================================
   Menú interactivo: catálogo con filtros por
   categoría, buscador y ficha de producto en
   <dialog> con galería de miniaturas.

   Para sustituir las fotos de demostración por
   las reales basta con editar el arreglo
   `imagenes` de cada producto (rutas webp/jpg).
   Un producto sin imágenes muestra un pizarrón
   con la nota "foto en camino".
   Los precios son de demostración.
   ============================================ */

(function () {
  'use strict';

  const NOMBRES_CATEGORIA = {
    'espresso': 'Espresso',
    'brew-bar': 'Brew bar',
    'temporada': 'Temporada',
    'reposteria': 'Repostería'
  };

  const productosMenu = [
    /* ---- Espresso ---- */
    { id: 'espresso', nombre: 'Espresso', descripcion: 'Doble, de microlote poblano', categoria: 'espresso', precio: 45, etiquetas: ['Recomendado'],
      imagenes: ['img/menu/espresso-talavera.jpg', 'img/interior/maquina-espresso.jpg'],
      alt: 'Espresso servido en taza de talavera poblana' },
    { id: 'americano', nombre: 'Americano', descripcion: 'Caliente o con hielo', categoria: 'espresso', precio: 50, etiquetas: [],
      imagenes: [], alt: '' },
    { id: 'latte', nombre: 'Latte', descripcion: 'Caliente o frío, con arte en leche', categoria: 'espresso', precio: 65, etiquetas: ['Favorito'],
      imagenes: ['img/menu/latte-en-barra.jpg', 'img/menu/iced-latte.jpg', 'img/menu/iced-latte-talavera.jpg'],
      alt: 'Latte con arte en leche sobre la barra de madera' },
    { id: 'cappuccino', nombre: 'Cappuccino', descripcion: 'Espuma sedosa, taza de talavera', categoria: 'espresso', precio: 60, etiquetas: [],
      imagenes: [], alt: '' },
    { id: 'iced-mocha', nombre: 'Iced Mocha', descripcion: 'Espresso, cacao y leche fría', categoria: 'espresso', precio: 70, etiquetas: [],
      imagenes: [], alt: '' },
    { id: 'shaken-affogato', nombre: 'Shaken Affogato', descripcion: 'Espresso agitado con helado', categoria: 'espresso', precio: 75, etiquetas: [],
      imagenes: [], alt: '' },
    { id: 'tonico-yuzu', nombre: 'Tónico con Yuzu', descripcion: 'Espresso, agua tónica y cítrico japonés', categoria: 'espresso', precio: 70, etiquetas: [],
      imagenes: [], alt: '' },
    { id: 'chocolate', nombre: 'Chocolate caliente', descripcion: 'Cacao de casa', categoria: 'espresso', precio: 55, etiquetas: [],
      imagenes: [], alt: '' },

    /* ---- Brew bar ---- */
    { id: 'v60', nombre: 'V60', descripcion: 'Filtrado limpio y brillante, pregunta por el origen del día', categoria: 'brew-bar', precio: 70, etiquetas: ['Recomendado'],
      imagenes: ['img/interior/brew-bar.jpg'],
      alt: 'Brew bar de La Cuatro con molinos, básculas y pizarrón de orígenes' },
    { id: 'chemex', nombre: 'Chemex', descripcion: 'Para compartir, taza suave y sedosa', categoria: 'brew-bar', precio: 75, etiquetas: [],
      imagenes: [], alt: '' },
    { id: 'kalita', nombre: 'Kalita 102', descripcion: 'Extracción pareja, dulzor redondo', categoria: 'brew-bar', precio: 70, etiquetas: [],
      imagenes: [], alt: '' },
    { id: 'cold-brew', nombre: 'Cold Brew', descripcion: '12 horas de extracción en frío', categoria: 'brew-bar', precio: 60, etiquetas: [],
      imagenes: [], alt: '' },

    /* ---- Temporada ---- */
    { id: 'brown-shaken', nombre: 'Brown Shaken Espresso', descripcion: 'Espresso agitado con azúcar morena', categoria: 'temporada', precio: 72, etiquetas: ['Nuevo'],
      imagenes: ['img/menu/brown-shaken-espresso.jpg'],
      alt: 'Barista agitando una coctelera para preparar un Brown Shaken Espresso' },
    { id: 'matcha-mango', nombre: 'Matcha con foam de mango', descripcion: 'Matcha ceremonial con espuma de fruta', categoria: 'temporada', precio: 78, etiquetas: ['Nuevo'],
      imagenes: ['img/menu/matcha-mango.jpg'],
      alt: 'Vaso de matcha con foam de mango sobre un fondo de mangos frescos' },
    { id: 'strawberry-matcha', nombre: 'Strawberry Matcha', descripcion: 'El clásico: fresa natural, leche y matcha en capas', categoria: 'temporada', precio: 78, etiquetas: ['Recomendado'],
      imagenes: ['img/menu/strawberry-matcha.jpg', 'img/menu/matcha-mesas.jpg'],
      alt: 'Strawberry matcha en vaso con capas de fresa, leche y matcha' },
    { id: 'flotante-limon', nombre: 'Flotante de Limón', descripcion: 'Nieve de limón flotando sobre cold brew', categoria: 'temporada', precio: 68, etiquetas: ['Nuevo'],
      imagenes: ['img/menu/flotante-limon.jpg'],
      alt: 'Flotante de limón con cold brew sobre un fondo de limones verdes' },
    { id: 'jamaica-brew', nombre: 'Jamaica Brew', descripcion: 'Acidez floral de jamaica con cold brew', categoria: 'temporada', precio: 65, etiquetas: ['Nuevo'],
      imagenes: ['img/menu/jamaica-brew.jpg'],
      alt: 'Jamaica Brew: vaso de cold brew con flor de jamaica junto a la máquina de espresso' },
    { id: 'chocoreta', nombre: 'Chocoreta Latte', descripcion: 'Invierno: chocolate y menta', categoria: 'temporada', precio: 70, etiquetas: [],
      imagenes: ['img/menu/latte-temporada-navidad.jpg'],
      alt: 'Barista vertiendo espresso sobre un latte de temporada verde' },
    { id: 'olla-latte', nombre: 'Olla Latte', descripcion: 'Invierno: espresso con café de olla', categoria: 'temporada', precio: 68, etiquetas: [],
      imagenes: [], alt: '' },
    { id: 'toffee-nut', nombre: 'Toffee Nut Latte', descripcion: 'Invierno: caramelo y nuez', categoria: 'temporada', precio: 72, etiquetas: [],
      imagenes: [], alt: '' },

    /* ---- Repostería ---- */
    { id: 'pain-suisse', nombre: 'Pain suisse de pistache', descripcion: 'De Brûlée Baked Goods', categoria: 'reposteria', precio: 65, etiquetas: ['Recomendado'],
      imagenes: ['img/menu/reposteria-brulee.jpg'],
      alt: 'Bandeja de croissants y repostería frente al espejo de La Cuatro' },
    { id: 'croissant-limon', nombre: 'Croissant de curd de limón', descripcion: 'Con chocolate blanco', categoria: 'reposteria', precio: 58, etiquetas: [],
      imagenes: [], alt: '' },
    { id: 'croissant-caramelo', nombre: 'Croissant de caramelo', descripcion: 'Con chocolate', categoria: 'reposteria', precio: 58, etiquetas: [],
      imagenes: [], alt: '' },
    { id: 'estrella-maracuya', nombre: 'Estrella de maracuyá', descripcion: 'Hojaldre de temporada', categoria: 'reposteria', precio: 55, etiquetas: [],
      imagenes: [], alt: '' },
    { id: 'chocolatin', nombre: 'Chocolatín', descripcion: 'El infaltable de la vitrina', categoria: 'reposteria', precio: 48, etiquetas: ['Favorito'],
      imagenes: ['img/interior/vitrina-galletas.jpg'],
      alt: 'Vitrina con frascos de galletas y repostería escrita a mano' },
    { id: 'strudel', nombre: 'Strudel de manzana', descripcion: 'Especiado, para compartir', categoria: 'reposteria', precio: 60, etiquetas: [],
      imagenes: [], alt: '' },
    { id: 'panque-limon', nombre: 'Panqué de limón', descripcion: 'De la vitrina de casa', categoria: 'reposteria', precio: 45, etiquetas: [],
      imagenes: [], alt: '' },
    { id: 'rol-canela', nombre: 'Rol de canela y nuez', descripcion: 'También de arándano con crema', categoria: 'reposteria', precio: 55, etiquetas: [],
      imagenes: [], alt: '' }
  ];

  const rejilla = document.getElementById('cartaGrid');
  const chips = document.querySelectorAll('.carta-chip');
  const campoBusqueda = document.getElementById('buscadorMenu');
  const contadorResultados = document.querySelector('.carta-resultado');
  const mensajeVacio = document.querySelector('.carta-vacio');
  const ficha = document.getElementById('fichaProducto');

  if (!rejilla || !ficha) {
    return;
  }

  let categoriaActiva = 'todo';
  let productosVisibles = [];
  let indiceProductoAbierto = -1;
  const prefiereMenosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function normalizarTexto(texto) {
    return texto.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  function filtrarProductos() {
    const busqueda = normalizarTexto(campoBusqueda.value.trim());
    return productosMenu.filter(function (producto) {
      const coincideCategoria = categoriaActiva === 'todo' || producto.categoria === categoriaActiva;
      const textoProducto = normalizarTexto(producto.nombre + ' ' + producto.descripcion);
      const coincideBusqueda = busqueda === '' || textoProducto.includes(busqueda);
      return coincideCategoria && coincideBusqueda;
    });
  }

  function crearMediaDeTarjeta(producto) {
    if (producto.imagenes.length === 0) {
      return '<span class="producto-media producto-pizarron">' +
        '<span class="pizarron-inicial" aria-hidden="true">' + producto.nombre.charAt(0) + '</span>' +
        '<span class="pizarron-nota">foto en camino</span>' +
        '</span>';
    }
    return '<span class="producto-media">' +
      '<img src="' + producto.imagenes[0] + '" alt="' + producto.alt + '" loading="lazy">' +
      '</span>';
  }

  function crearTarjetaProducto(producto, indice) {
    const elemento = document.createElement('li');
    elemento.className = 'producto';
    elemento.style.setProperty('--indice', Math.min(indice, 11));

    const insignias = producto.etiquetas.map(function (etiqueta) {
      return '<span class="producto-insignia">' + etiqueta + '</span>';
    }).join('');

    elemento.innerHTML =
      '<button class="producto-tarjeta" type="button" data-id="' + producto.id + '">' +
        crearMediaDeTarjeta(producto) +
        (insignias ? '<span class="producto-insignias">' + insignias + '</span>' : '') +
        '<span class="producto-texto">' +
          '<span class="producto-nombre">' + producto.nombre + '</span>' +
          '<span class="producto-descripcion">' + producto.descripcion + '</span>' +
          '<span class="producto-pie">' +
            '<span class="producto-precio">$' + producto.precio + ' <small>demo</small></span>' +
            '<span class="producto-categoria">' + NOMBRES_CATEGORIA[producto.categoria] + '</span>' +
          '</span>' +
        '</span>' +
      '</button>';
    return elemento;
  }

  function marcarImagenesCargadas() {
    rejilla.querySelectorAll('.producto-media img').forEach(function (imagen) {
      if (imagen.complete) {
        imagen.classList.add('lista');
        return;
      }
      imagen.addEventListener('load', function () {
        imagen.classList.add('lista');
      });
    });
  }

  function pintarCatalogo() {
    productosVisibles = filtrarProductos();
    rejilla.innerHTML = '';
    productosVisibles.forEach(function (producto, indice) {
      rejilla.appendChild(crearTarjetaProducto(producto, indice));
    });
    contadorResultados.textContent = productosVisibles.length === 1
      ? '1 producto'
      : productosVisibles.length + ' productos';
    mensajeVacio.hidden = productosVisibles.length !== 0;
    marcarImagenesCargadas();
  }

  /* ---- Ficha de producto ---- */

  const fichaImagen = ficha.querySelector('.ficha-imagen');
  const fichaPizarron = ficha.querySelector('.ficha-pizarron');
  const fichaMiniaturas = ficha.querySelector('.ficha-miniaturas');
  const fichaCategoria = ficha.querySelector('.ficha-categoria');
  const fichaNombre = ficha.querySelector('.ficha-nombre');
  const fichaDescripcion = ficha.querySelector('.ficha-descripcion');
  const fichaEtiquetas = ficha.querySelector('.ficha-etiquetas');
  const fichaPrecio = ficha.querySelector('.ficha-precio-monto');

  function mostrarImagenPrincipal(producto, indiceImagen) {
    const hayFotos = producto.imagenes.length > 0;
    fichaPizarron.hidden = hayFotos;
    fichaImagen.hidden = !hayFotos;
    if (hayFotos) {
      fichaImagen.classList.remove('lista');
      fichaImagen.src = producto.imagenes[indiceImagen];
      fichaImagen.alt = producto.alt;
      if (fichaImagen.complete) {
        fichaImagen.classList.add('lista');
      } else {
        fichaImagen.addEventListener('load', function () {
          fichaImagen.classList.add('lista');
        }, { once: true });
      }
    } else {
      ficha.querySelector('.ficha-pizarron-inicial').textContent = producto.nombre.charAt(0);
    }
    fichaMiniaturas.querySelectorAll('.ficha-miniatura').forEach(function (miniatura, indice) {
      miniatura.classList.toggle('activa', indice === indiceImagen);
    });
  }

  function pintarMiniaturas(producto) {
    fichaMiniaturas.innerHTML = '';
    if (producto.imagenes.length < 2) {
      return;
    }
    producto.imagenes.forEach(function (ruta, indice) {
      const miniatura = document.createElement('button');
      miniatura.className = 'ficha-miniatura';
      miniatura.type = 'button';
      miniatura.setAttribute('aria-label', 'Ver foto ' + (indice + 1) + ' de ' + producto.imagenes.length);
      miniatura.innerHTML = '<img src="' + ruta + '" alt="" loading="lazy">';
      miniatura.addEventListener('click', function () {
        mostrarImagenPrincipal(producto, indice);
      });
      fichaMiniaturas.appendChild(miniatura);
    });
  }

  function abrirFicha(indiceEnVisibles) {
    const producto = productosVisibles[indiceEnVisibles];
    if (!producto) {
      return;
    }
    indiceProductoAbierto = indiceEnVisibles;
    fichaCategoria.textContent = NOMBRES_CATEGORIA[producto.categoria];
    fichaNombre.textContent = producto.nombre;
    fichaDescripcion.textContent = producto.descripcion;
    fichaEtiquetas.innerHTML = producto.etiquetas.map(function (etiqueta) {
      return '<span class="producto-insignia">' + etiqueta + '</span>';
    }).join('');
    fichaPrecio.textContent = '$' + producto.precio + ' MXN';
    pintarMiniaturas(producto);
    mostrarImagenPrincipal(producto, 0);
    ficha.querySelector('.ficha-anterior').disabled = indiceEnVisibles === 0;
    ficha.querySelector('.ficha-siguiente').disabled = indiceEnVisibles === productosVisibles.length - 1;
    if (!ficha.open) {
      ficha.showModal();
    }
  }

  function cerrarFicha() {
    if (prefiereMenosMovimiento || ficha.classList.contains('cerrando')) {
      ficha.close();
      return;
    }
    // La duración coincide con la animación ficha-cerrar del CSS (220ms)
    ficha.classList.add('cerrando');
    setTimeout(function () {
      ficha.classList.remove('cerrando');
      ficha.close();
    }, 230);
  }

  function moverFicha(paso) {
    const nuevoIndice = indiceProductoAbierto + paso;
    if (nuevoIndice >= 0 && nuevoIndice < productosVisibles.length) {
      abrirFicha(nuevoIndice);
    }
  }

  /* ---- Eventos ---- */

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      categoriaActiva = chip.dataset.categoria;
      chips.forEach(function (otroChip) {
        const esActivo = otroChip === chip;
        otroChip.classList.toggle('activo', esActivo);
        otroChip.setAttribute('aria-pressed', String(esActivo));
      });
      pintarCatalogo();
    });
  });

  campoBusqueda.addEventListener('input', pintarCatalogo);

  rejilla.addEventListener('click', function (evento) {
    const tarjeta = evento.target.closest('.producto-tarjeta');
    if (!tarjeta) {
      return;
    }
    const indice = productosVisibles.findIndex(function (producto) {
      return producto.id === tarjeta.dataset.id;
    });
    abrirFicha(indice);
  });

  ficha.querySelector('.ficha-cerrar').addEventListener('click', cerrarFicha);
  ficha.querySelector('.ficha-anterior').addEventListener('click', function () { moverFicha(-1); });
  ficha.querySelector('.ficha-siguiente').addEventListener('click', function () { moverFicha(1); });

  // Clic sobre el fondo oscurecido: cierra la ficha
  ficha.addEventListener('click', function (evento) {
    if (evento.target === ficha) {
      cerrarFicha();
    }
  });

  // Escape lo maneja el <dialog>; aquí solo las flechas del teclado
  ficha.addEventListener('keydown', function (evento) {
    if (evento.key === 'ArrowLeft') {
      moverFicha(-1);
    }
    if (evento.key === 'ArrowRight') {
      moverFicha(1);
    }
  });

  pintarCatalogo();
})();
