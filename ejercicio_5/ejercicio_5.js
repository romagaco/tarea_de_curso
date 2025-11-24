/*
Crea una página con dos campos de entrada de números y cuatro botones: "Sumar", "Restar",
"Multiplicar", y "Dividir".
    ● Al hacer clic en cualquiera de los botones, debe mostrarse el resultado 
        de la operación en un área de texto o debajo de los botones.
    ● Asegúrate de validar los datos para evitar errores 
        (como división por cero o entradas vacías).
*/



document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    function appendToDisplay(input) {
        display.value += input;
    }

    function clearDisplay() {
        display.value = "";
    }

    function calculate() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.textContent.trim() || button.value;

            if (value === "C") {
                clearDisplay();
            } else if (value === "=") {
                calculate();
            } else {
                appendToDisplay(value);
            }
        });
    });
});