
// ESTA ES MI FUNCION DE SUMA
function sumar(){

    var numero1 = Number(document.getElementById("numero1").value);
    var numero2 = Number(document.getElementById("numero2").value); 
    var elementoResultado = document.getElementById("resultado");

    console.log(`el valor de numero 1 es: ${numero1}`)
    console.log(`el valor de numero 1 es: ${numero2}`)
    
    var resultado = numero1 + numero2;

    if(resultado >= 100 ){
        elementoResultado.textContent = `el resultado es MAYOR IGUAL a 100 (${resultado})`
   
    }else{
        elementoResultado.textContent = `el resultado es MENOR a 100 (${resultado})`
    }
}

