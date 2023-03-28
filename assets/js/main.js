
// ESTA ES MI FUNCION DE SUMA
function controlar(){
    
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value; 
    var edad = document.getElementById("edad").value;
    var resultado = document.getElementById("resultado");

    var nombre_completo = nombre + ' ' + apellido;

    const EDAD_MAXIMA = Number(50);
    
    if(edad >= EDAD_MAXIMA ){
        resultado.textContent = `La edad del usuario ${nombre_completo} es MAYOR a ${EDAD_MAXIMA}`;
    }else{
        resultado.textContent = `La edad del usuario ${nombre_completo} es MENOR a ${EDAD_MAXIMA}`;
    }
}

