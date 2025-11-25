/* 
                    8. Contador de Palabras y Caracteres
Objetivo del ejercicio: Practicar eventos en tiempo real y manipulación avanzada del DOM.
Ejercicio:
Crea una página con un campo de texto donde el usuario pueda escribir un párrafo.
    • Muestra en tiempo real el número de caracteres y palabras ingresados debajo del campo.
    • Palabras deben ser separadas por espacios, y los caracteres no deben incluir espacios ni saltos de
    línea.
*/


document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("text-input");
    const result = document.getElementById("result");

    textInput.addEventListener("input", () => {
        const text = textInput.value;
        const wordCount = text.split(" ").filter(Boolean).length;
        const charCount = text.replace(/\s/g, "").length;
        result.innerHTML = `Palabras: ${wordCount}<br>Caracteres: ${charCount}`;
    });
});