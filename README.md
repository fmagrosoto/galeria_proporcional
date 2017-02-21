# Galería Proporcional

[![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)](LICENSE)
[![Packagist](https://img.shields.io/badge/Versi%C3%B3n-1.0.0-green.svg)](VERSION)
[![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/fmagrosoto)


Sé que no es el mejor nombre pero la idea vino de la necesidad de mostrar una imagen
cuyas dimensiones superen a la del monitor en el que se esté corriendo la aplicación
pero que no tengamos que usar las barras de navegación, si no que la aplicación
automáticamente calcule las dimensiones del monitor y las compare con las de la imagen,
si son mayores las de la imagen entonces reducir sus dimensiones a un 60% de las
dimensiones de la pantalla. Esto debe de pasar tanto para imágenes en *portrait* como
en *landscape*.

Adicional a esto, es hacer un carrusel de imágenes pero en vez de que vayan pasando
las fotos, vaya pasando un ```div``` con una imagen como fondo que cubra las dimensiones
de la caja del carrusel. Al hacer clic en algún div, que se dispare la acción para
mostrar la foto pero ya ajustada al tamaño de la pantalla (*viewport*).

Esto no es propiamente una aplicación de un carrusel, sino un *script* que ajuste la
imagen al tamaño de la pantalla, es decir, proporcional o como se diría en el mundo
del HTML, **responsivo**.

Para este ejercicio utilicé **Bootstrap** y **jQuery**.
Y para probarlo de manera local, levanté un pequeño servidor web usando **Express** y
**NodeJS**.

También usé algunas tareas en **Gulp** para minificar archivos.

Al clonar este proyecto deberás de correr ```npm install``` para descargar todas las
dependencias del proyecto.

Puedes correr Gulp con ```gulp watch```para minificar archivos y actualizar el navegador.

Puedes correr el servidor web usando *nodemom*:
```nodemon servidor```

Para mantener lo más limpio que se pueda este repositorio he incluído en el *.gitignore*
algunos editores de código y algunos otros IDE's. Si usas uno diferente a los contemplados
en el *.gitignore*, por favor inclúyelo en ese archivo.

Si tienes algunas mejoras, no dudes en solicitar un PR.

***
Desarrollado por: Fernando Magrosoto V. [@fmagrosoto](https://twitter.com/fmagrosoto.com)

Historia: Febrero, 2017
