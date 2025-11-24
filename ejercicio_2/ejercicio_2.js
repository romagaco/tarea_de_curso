
/* 
Ejercicio 2: Crea una página con un botón que diga "Contar clics" y un texto inicial que muestre 
"Clics: 0". Cada vez que se haga clic en el botón, el texto debe actualizarse para 
mostrar el número total de clics realizados
*/


let contador = 0; // inicializamos a cero

// declaramos la funcion sumar con nombre descriptivo
function sumar() {
    contador++; // incrementamos el contador en 1, este trigger 
    // se ejecuta cada vez que se hace click en el boton con onclick="sumar()"
    document.getElementById("contador").innerHTML = contador;
    // obtenemos el elemento con id "contador" y le asignamos el valor de contador
}