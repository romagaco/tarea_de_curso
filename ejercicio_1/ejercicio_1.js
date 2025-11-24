
// ejercicio 1: Crea una página web con un botón que diga "Cambiar color". 
//  Cada vez que el usuario haga clic en el
// botón, el color de fondo de la página debe cambiar a un color aleatorio.


function cambiaColor() { // definimos la funcion, el nombre tiene que ser descriptivo
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // generamos un color aleatorio, usamos 
    // Math.random() para generar un numero aleatorio y toString(16) para convertirlo a hexadecimal
    document.body.style.backgroundColor = randomColor; // cambiamos el color de fondo usando .body para que cambie el color de la pagina 
}
