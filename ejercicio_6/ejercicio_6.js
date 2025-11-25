// Variables globales para el temporizador
let horas = 0;
let minutos = 0;
let segundos = 0;
let intervalo = null; // Para guardar el ID del intervalo

// Función para formatear números con dos dígitos (00, 01, 02, etc.)
function formatearTiempo(valor) {
    return valor < 10 ? '0' + valor : valor;
}

// Función para actualizar el display del temporizador
function actualizarDisplay() {
    const display = document.getElementById('display6');
    display.textContent =
        formatearTiempo(horas) + ':' +
        formatearTiempo(minutos) + ':' +
        formatearTiempo(segundos);
}

// Función para incrementar el tiempo
function incrementarTiempo() {
    segundos++;

    if (segundos === 60) {
        segundos = 0;
        minutos++;

        if (minutos === 60) {
            minutos = 0;
            horas++;
        }
    }

    actualizarDisplay();
}

// Función para iniciar el temporizador
function iniciar() {
    // Solo inicia si no hay un intervalo activo
    if (intervalo === null) {
        intervalo = setInterval(incrementarTiempo, 1000);
    }
}

// Función para pausar el temporizador
function pausar() {
    if (intervalo !== null) {
        clearInterval(intervalo);
        intervalo = null;
    }
}

// Función para reiniciar el temporizador
function reiniciar() {
    // Detener el temporizador si está corriendo
    pausar();

    // Resetear valores
    horas = 0;
    minutos = 0;
    segundos = 0;

    // Actualizar display
    actualizarDisplay();
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencias a los botones
    const btnIniciar = document.getElementById('btnIniciar');
    const btnPausar = document.getElementById('btnPausar');
    const btnReiniciar = document.getElementById('btnReiniciar');

    // Asignar eventos a los botones
    btnIniciar.addEventListener('click', iniciar);
    btnPausar.addEventListener('click', pausar);
    btnReiniciar.addEventListener('click', reiniciar);
});