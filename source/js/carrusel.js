imagenes = [];
function preload() {
  for (i = 0; i < preload.arguments.length; i++) {
    imagenes[i] = new Image();
    imagenes[i].src = preload.arguments[i];
  }
}
preload(
  '/img/img01.jpg','/img/img02.jpg','/img/img03.jpg','/img/img04.jpg','/img/img05.jpg'
);


(function () {


  /**
   * Desactivar todos los botones
   */
  function desBotones(botones) {
    for(var x = 0; x < botones.length; x++){
      botones[x].classList.remove('activo');
    }
  }

  /**
   * Activar la foto
   */
  function activarFoto(elementos, posicion){
    for(var x = 0; x < elementos.length; x++){
      var p = elementos[x].dataset.pos;
      if(p === posicion){
        elementos[x].classList.add('activo');
      }
    }
  }

  /**
   * Desactivar las fotos
   */
  function desFotos(elementos){
    for(var x = 0; x < elementos.length; x++){
      elementos[x].classList.remove('activo');
    }
  }

  /**
   * Correr la animación del carrusel
   */
  function correr(e) {
    e.preventDefault();
    var posicion = this.dataset.pos;

    // Desactivar los botones
    desBotones(botones);
    // Desactivar la foto
    desFotos(elementos);

    // Activar el botón
    this.classList.add('activo');
    // Activar la foto
    activarFoto(elementos, posicion);
  }

  // Activar el primer botón
  var botones = document.querySelectorAll('.botones > li > a');
  botones[0].classList.add('activo');

  // Activar la primer imagen
  var elementos = document.querySelectorAll('.elementos > div');
  elementos[0].classList.add('activo');

  // Poner un Listener a cada botón para deslizar la imagen
  for (var x = 0; x < botones.length; x++) {
    botones[x].addEventListener('click', correr);
  }


})();