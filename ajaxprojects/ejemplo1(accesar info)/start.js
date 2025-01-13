addEventListener('load',iniciar,false);

function iniciar(){
    for(var f=1;f<=3;f++){
      var ob = document.getElementById("enlace"+f);
    ob.addEventListener('click',muestra,false);
    }
}

function muestra(e){
    e.preventDefault();
    var url = e.target.getAttribute("href");
    cargar(url);
}

var conection;
function cargar(url){
    conection = new XMLHttpRequest();
    conection.onreadystatechange = procesareventos;
    conection.open("GET",url,true);
    conection.send();
}

function procesareventos(){
    var info = document.getElementById("info");
    if(conection.readyState==4){
        info.innerHTML = conection.responseText;
    }else{
        info.innerHTML = "Cargando....";
    }
}