var express = require('express');
var app = express();

// Esto es un direccionamiento
app.get('/',function(req,res){
    res.sendFile('distro/index.html',{ root : __dirname});
});

// Uso general en cualquier árbol de directorios
// ¡Esta es la ley!
app.use(express.static('distro/'));

app.listen(3500,function(){
    console.log('!Corriendo Carrusel con Express en el puerto 3500!');
});