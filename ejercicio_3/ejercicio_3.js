/*
Ejercicio 3: Crea una página con un campo de texto, un botón que diga "Agregar", 
y una lista vacía debajo.
    ● Cuando el usuario escriba un texto y haga clic en "Agregar", el texto debe 
        añadirse como un nuevo elemento de la lista.
    ● Añade un botón al lado de cada elemento para eliminarlo de la lista.
*/

document.addEventListener("DOMContentLoaded", () => {
    const tareas = [];
    const input = document.getElementById("tarea-input");
    const addButton = document.getElementById("add-tarea");
    const tareasList = document.getElementById("tareas-list");
    const deleteAllButton = document.getElementById("delete-all");

    addButton.addEventListener("click", () => {
        agregarTarea();
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            agregarTarea();
        }
    });

    deleteAllButton.addEventListener("click", () => {
        tareas.length = 0;
        renderTareas(tareas, tareasList);
    });

    function agregarTarea() {
        if (input.value.trim() !== "") {
            const nuevaTarea = { text: input.value };
            tareas.push(nuevaTarea);
            input.value = "";
            renderTareas(tareas, tareasList);
        }
    }

    function renderTareas(arr, parent) {
        parent.innerHTML = "";
        arr.forEach((element, index) => {
            const tareaContainer = document.createElement("div");
            tareaContainer.classList.add("comment-container");
            const textContainer = document.createElement("div");
            textContainer.textContent = element.text;
            tareaContainer.appendChild(textContainer);
            const actionsContainer = document.createElement("div");
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => {
                arr.splice(index, 1);
                renderTareas(arr, parent);
            });
            actionsContainer.appendChild(deleteButton);
            tareaContainer.appendChild(actionsContainer);
            parent.appendChild(tareaContainer);
        });
    }
});