
document.addEventListener("DOMContentLoaded", () => {
    // Lista predefinida de elementos
    const elementos = ["Perro", "Gato", "Pez", "Hamster", "Tortuga", "Conejo", "Loro", "Pajaro", "Raton", "Rana",
        "Lagarto", "Serpiente", "Tigre", "León", "Elefante", "Mono", "Cebra", "Jirafa", "Cangrejo", "Pulpo",
        "Gallo", "Gallina", "Pavo", "Pato", "Cerdo", "Vaca", "Caballo", "Burro", "Oveja", "Cabra",
        "Zorro", "Lobo", "Oso", "Mapache", "Castor", "Nutria", "Foca", "León Marino", "Delfín", "Ballena",
        "Águila", "Halcón", "Paloma", "Gorrión", "Estornino", "Mirlo", "Ruiseñor", "Canario", "Peces", "Tiburón",
        "Rata", "Ratón de campo", "Topo", "Marmota", "Ardilla", "Liebre", "Conejo de Indias", "Hurón", "Gato montés",
        "Jaguar", "Puma", "Leopardo", "Guepardo", "Hiena", "Chacal", "Coyote", "Lince", "Gato salvaje",
        "Elefante marino", "Foca león", "Foca de Weddell", "Foca cangrejera", "Ballena jorobada", "Ballena gris",
        "Orca", "Delfín mular", "Delfín de río", "Tiburón blanco", "Tiburón tigre", "Tiburón martillo",
        "Cangrejo ermitaño", "Cangrejo azul", "Langosta", "Langostino", "Pulpo gigante", "Calamar", "Sepia",
        "Tortuga marina", "Tortuga de tierra", "Iguana", "Camaleón", "Lagarto verde", "Lagarto cornudo",
        "Serpiente de cascabel", "Serpiente coral", "Serpiente de agua", "Boa constrictora", "Pitón",
        "Rana venenosa", "Rana de árbol", "Sapo", "Sapo de caña", "Rana toro", "Rana leopardo"];

    const inputBusqueda = document.getElementById("search-input");
    const listaElementos = document.getElementById("elementos-list");

    // Función para renderizar la lista (completa o filtrada)
    function renderizarLista(elementosAMostrar) {
        listaElementos.innerHTML = ""; // Limpia la lista actual

        elementosAMostrar.forEach(elemento => {
            const itemLista = document.createElement("li");
            itemLista.textContent = elemento;
            listaElementos.appendChild(itemLista);
        });
    }

    // Función para filtrar elementos basados en el texto ingresado
    function filtrarElementos() {
        const textoBusqueda = inputBusqueda.value.toLowerCase(); // Convierte a minúsculas para búsqueda insensible a mayúsculas
        const elementosFiltrados = elementos.filter(elemento =>
            elemento.toLowerCase().includes(textoBusqueda) // Solo incluye si coincide
        );
        renderizarLista(elementosFiltrados);
    }

    // Renderiza la lista completa al inicio
    renderizarLista(elementos);

    // Evento 'input' para actualizar en tiempo real mientras se escribe
    inputBusqueda.addEventListener("input", filtrarElementos);
});