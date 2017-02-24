(function () {
  var actual = 0,
  imagenes = [];

  /**
   * Precargar todas las imágenes y ponerlas en un array;
   * @author Fernando Magrosoto @fmagrosoto
   * @version 1.0
   * @since feb 23, 2017
   */
  function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
      imagenes[i] = new Image();
      imagenes[i].src = preload.arguments[i];
    }
  }

  preload(
    '/img/img01.jpg',
    '/img/img02.jpg',
    '/img/img03.jpg',
    '/img/img04.jpg',
    '/img/img05.jpg'
  );

  // Grupo de botones y elementos
  var botones = document.querySelectorAll('.botones > li > a'),
  elementos = document.querySelectorAll('.elementos > div');


  /**
   * Mostrar la imagen centrada en el browser
   * @param {int} p La posición de la imagen
   * @param {float} ancho El ancho de la caja
   * @param {float} alto  El alto de la caja
   */
  function abrirImagen(p,ancho, alto) {
    $('#caja').animate({
      height: alto + 'px',
      width: ancho + 'px'
    });
    $('#caja').css({
      'background-image': 'url(' + imagenes[ parseInt(p) ].src + ')'
    });
    $('#caja').append('<div class="izq"><span class="glyphicon glyphicon-triangle-left flechaI"></span></div>');
    $('#caja').append('<div class="der"><span class="glyphicon glyphicon-triangle-right flechaD"></span></div>');

    $('.flechaI').click(function () {
      var previo = p - 1;
      if (previo < 0) {
        previo = imagenes.length - 1;
      }
      agrandar(previo);
    });

    $('.flechaD').click(function () {
      var siguiente = parseFloat(p) + 1;
      if (siguiente === imagenes.length) {
        siguiente = 0;
      }
      agrandar(siguiente);
    });
  }


  /**
   * Agrandar imagen en modo responsivo
   * @param {int} p La posición de la foto
   * @author Fernando Magrosoto @fmagrosoto
   * @version 1.0
   * @since feb 23, 2017
   */
  function agrandar(p) {
    var anchoB = window.innerWidth,  // Ancho del browser
    altoB = window.innerHeight,      // Alto del browser
    anchoN = anchoB * 0.75,          // Ancho máximo de la caja de la imagen agrandada
    altoN = altoB * 0.75,           // Alto máxicmo de la caja de la imagen agrandada
    orientacion,                    // Orientación de la foto (portrait, landscape)
    cajaAncho,                      // Ancho de la caja de imagen
    cajaAlto,                       // Alto de la caja de imagen
    pos = p,                        // Posición de la foto actual
    actual = imagenes[pos],         // Foto actual
    fotoAncho = actual.height,       // Ancho de la foto actual
    fotoAlto = actual.width,       // Alto de la foto actual
    offset;                         // Porcentaje para reducir imágenes

    // Conocer la orientación de la foto
    if(fotoAlto > fotoAncho){
      orientacion = 'portrait';
    } else if(fotoAlto < fotoAncho){
      orientacion = 'landscape';
    } else {
      orientacion = 'square';
    }

    // Calcular el tamaño de la caja
    if (orientacion === 'portrait') {
      if(fotoAlto > altoN){
        offset = altoN / fotoAlto;
        cajaAlto = fotoAlto * offset;
        cajaAncho = fotoAncho * offset;
      } else {
        cajaAlto = fotoAlto;
        cajaAncho = fotoAncho;
      }
    }

    if (orientacion === 'landscape') {
      if (fotoAncho > anchoN) {
        offset = anchoN / fotoAncho;
        cajaAncho = fotoAncho * offset;
        cajaAlto = fotoAlto * offset;
      } else {
        cajaAlto = fotoAlto;
        cajaAncho = fotoAncho;
      }
    }

    if (orientacion === 'square') {
      if (fotoAlto > altoN) {
        offset = altoN / fotoAlto;
        cajaAlto = fotoAlto * offset;
        cajaAncho = cajaAlto;
      } else {
        cajaAlto = fotoAlto;
        cajaAncho = cajaAlto;
      }
    }

    abrirImagen(pos, cajaAlto, cajaAncho);

  }


  /**
   * Cortinilla para agrandar la foto
   * @author Fernando Magrosoto @fmagrosoto
   * @version 1.0
   * @since feb 23, 2017
   */
   function cortinilla() {
     var pos = this.dataset.pos;
     $('body').prepend('<div id="cortinilla"></div>');
     $('#cortinilla').append('<div id="caja"></div>');
     agrandar(pos);
   }


  /**
   * Animar elemento al dar clic al botón
   * @param {int} pos La posición de la imagen
   * @author Fernando Magrosoto @fmagrosoto
   * @version 1.0
   * @since feb 23, 2017
   */
  function animar(pos) {
    botones[pos].classList.add('activo');
    elementos[pos].classList.add('activo');

    // Oyente para cada foto mostrada
    elementos[pos].addEventListener('click', cortinilla);
  }

  /**
   * Quitar la clase activo en todos los botones e imágenes
   * @author Fernando Magrosoto @fmagrosoto
   * @version 1.0
   * @since feb 23, 2017
   */
  function qActivo () {
    for (var x = 0; x < botones.length; x++) {
      botones[x].classList.remove('activo');
    }
    for (var x = 0; x < elementos.length; x++) {
      elementos[x].classList.remove('activo');
    }
  }

  /**
   * Extracción de posición por cada botón pulsado
   * @author Fernando Magrosoto @fmagrosoto
   * @version 1.0
   * @since feb 23, 2017
   */
  function arreglo(e) {
    e.preventDefault();
    var posicion = this.dataset.pos;
    if(actual === posicion)
    return;
    actual = posicion;
    qActivo();
    this.classList.add('activo');
    animar(actual);
  }

  // Poner oyentes a cada botón
  for (var x = 0; x < elementos.length; x++) {
    botones[x].addEventListener('click', arreglo);
  }

  // Activar el primer botón
  animar(actual);

})();