console.log("Aquí vamos");
addEventListener('load',iniciar,false);

function iniciar(){
    var ob = document.getElementById("button");
    ob.addEventListener("click",boton,false);
    
}

function boton(){
    
    var movie = document.getElementById("movie");
    var name = document.getElementById("name");
    cargar(movie.value,name.value);
}

var conection;
function cargar(movie , name){
    conection = new XMLHttpRequest;
    conection.onreadystatechange = procesar;
    conection.open('GET','image.php?movie='+movie+'&name='+name,true);
    conection.send();
}

function procesar(){
    var pedidos = document.getElementById("pedidos");
    if(conection.readyState==4){
        pedidos.innerHTML = conection.responseText;
    }else{
        pedidos.innerHTML = "Cargando....";
    }
}