imagenes = [];
function preload() {
  for (i = 0; i < preload.arguments.length; i++) {
    imagenes[i] = new Image();
    imagenes[i].src = preload.arguments[i];
  }
}
preload('/img/img01.jpg','/img/img02.jpg','/img/img03.jpg','/img/img04.jpg','/img/img05.jpg');
