var context;
var rojo;
var verde;
var azul;
var alfa;

var image = new Image();
image.src = "img/soldier.png";
image.width = "250";
function iniciar() {
    var canvas = document.getElementById("lienzo");
    context = canvas.getContext("2d", { willReadFrequently: true });
    context.drawImage(image, 0, 0);
    context.drawImage(image, 250, 0);
    procesarEscalaGrises();

    //Configurar GUI:
    rojo = document.getElementById("rojo");
    rojo.addEventListener("change",
        function () {
            procesarImagen(this.value, verde.value, azul.value);
        }, false);

    verde = document.getElementById("verde");
    verde.addEventListener("change",
        function () {
            procesarImagen(rojo.value, this.value, azul.value);
        }, false);

    azul = document.getElementById("azul");
    azul.addEventListener("change",
        function () {
            procesarImagen(rojo.value, rojo.value, this.value);
        }, false);

    alfa = document.getElementById("alfa");
    alfa.addEventListener("change",
        function(){
            procesarAlfa(this.value);
        },false
    )
    document.getElementById("reinicio").addEventListener("click",reiniciarImagen,false);
} //Fin de función de inicialización

/**Procesar valor de transparencia Alfa*/
function procesarAlfa(nuevoValor){
    var datosImagen = context.getImageData(0,0,250,250);
    var pixeles = datosImagen.data;
    for (let i = 3; i < pixeles.length; i+=4) {
        pixeles[i] = nuevoValor;
    }
    context.putImageData(datosImagen,250,0);
}//Fin de la función procesarImagen

/**Procesamiento de imagen */
function procesarImagen(pRojo,pVerde,pAzul){
    context.drawImage(image,250,0);
    var datosImagen = context.getImageData(0,0,250,250);
    var pixeles = datosImagen.data;
    //Se fijan los porcentajes de color
    for (let i = 0; i < pixeles.length; i+=4) {
        pixeles[i] *= pRojo/100;
        pixeles[i+1] *= pVerde/100;
        pixeles[i+2] *= pAzul/100;
    }
    context.putImageData(datosImagen,250,0);
}


/**Crea versión de la imagen en escala de grises */
function procesarEscalaGrises(){
    context.drawImage(image,500,0);
    var datosImagen = context.getImageData(0,0,250,250);
    var pixeles = datosImagen.data;
    for(var i=0;i<pixeles.length;i+=4){
       var promedio = (pixeles[i]*0.30+pixeles[i+1]*0.59+pixeles[i+2]*0.11).toFixed(0);
       pixeles[i] = promedio;
       pixeles[i+1] = promedio;
       pixeles[i+2] = promedio;   
    }
    context.putImageData(datosImagen,500,0);
}

function reiniciarImagen(){
    context.drawImage(image,250,0);
    rojo.value = 100;
    verde.value = 100;
    azul.value = 100;
    alfa.value = 255;
}

/**Inicio de la GUI */
window.addEventListener("load",iniciar,false);

context.drawImage(imagen,x_inicial,y_inicial);

