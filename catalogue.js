/**Variable que guarde la imagen que activa el formulario */
var image = document.getElementById("sell");
/**Función de callback de la imagen: cuando la imagen recibe un click muestra el menú*/
function show(){
    var form = document.getElementById("form");
    form.style.visibility = "visible";
   
}


image.addEventListener("click", show);
