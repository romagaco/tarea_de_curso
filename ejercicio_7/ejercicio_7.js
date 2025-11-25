/* 
7. Generador de Contraseñas Aleatorias
Objetivo del ejercicio: Practicar generación de cadenas aleatorias y uso de formularios.
Ejercicio:
Crea una página con un campo de entrada para especificar la longitud de una contraseña y un botón que
diga "Generar contraseña".
• Al hacer clic en el botón, se debe mostrar una contraseña generada aleatoriamente usando
letras, números y caracteres especiales.
• Si la longitud es menor a 4 o el campo está vacío, muestra un mensaje de error indicando que la
longitud debe ser mayor o igual a 4
*/

// Constantes de caracteres para generar contraseñas
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
const allCharacters = uppercase + lowercase + number + symbol;

// Función para generar la contraseña
function generatePasswordFunc() {
    const passwordInput = document.getElementById('pass');
    const lengthInput = document.getElementById('len');
    const copyBtn = document.getElementById('copy');
    const errorMessage = document.getElementById('error-message');

    const length = parseInt(lengthInput.value);

    // Validar la longitud
    if (isNaN(length) || length < 4) {
        errorMessage.style.display = 'block';
        passwordInput.value = '';
        copyBtn.style.display = 'none';
        return;
    }

    // Ocultar mensaje de error si la validación es correcta
    errorMessage.style.display = 'none';

    // Generar contraseña aleatoria
    let newPassword = '';
    for (let i = 0; i < length; i++) {
        newPassword += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }

    passwordInput.value = newPassword;
    copyBtn.style.display = 'block';
}

// Función para copiar la contraseña al portapapeles
function copyPassword() {
    const passwordInput = document.getElementById('pass');
    const copyBtn = document.getElementById('copy');

    passwordInput.select();
    passwordInput.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Usar la API moderna del portapapeles
    navigator.clipboard.writeText(passwordInput.value).then(() => {
        // Cambiar temporalmente el icono para indicar que se copió
        copyBtn.textContent = '✓';
        setTimeout(() => {
            copyBtn.textContent = '📋';
        }, 1000);
    }).catch(() => {
        // Fallback para navegadores antiguos
        document.execCommand('copy');
        copyBtn.textContent = '✓';
        setTimeout(() => {
            copyBtn.textContent = '📋';
        }, 1000);
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById('generate');
    const copyBtn = document.getElementById('copy');

    generateBtn.addEventListener('click', generatePasswordFunc);
    copyBtn.addEventListener('click', copyPassword);

    // También permitir generar con Enter en el campo de longitud
    document.getElementById('len').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            generatePasswordFunc();
        }
    });
});
