// Creación de una  variable que permita modificar los elementos de la tabla
const tabla = document.getElementById("tabla1");

//Función que reaccione al click sobre alguna celda 
tabla.addEventListener("click",(event)=>{
    //Verificar que el click se dé en una celda de la tabla
    if(event.target.tagName==="TD"){
        const celda = event.target;
        const fila = celda.parentElement;
        const filaIndex = Array.from(tabla.rows).indexOf(fila);
        const columnaIndex = Array.from(fila.cells).indexOf(celda);
        window.alert(`Fila: ${filaIndex}, Columna: ${columnaIndex}`);
        
    }
})