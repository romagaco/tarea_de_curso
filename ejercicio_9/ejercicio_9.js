let events = [];
let arr = [];

const eventName = document.querySelector("#eventName-ejercicio9");
const eventDate = document.querySelector("#eventDate-ejercicio9");
const buttonAdd = document.querySelector("#bAdd-ejercicio9");
const eventsContainer = document.querySelector("#eventsContainer-ejercicio9");

const json = load();

try {
    arr = JSON.parse(json);
} catch (error) {
    arr = [];
}
events = arr ? [...arr] : [];

renderEvents();

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()
    addEvent();
});

buttonAdd.addEventListener("click", (e) => {
    e.preventDefault()
    addEvent();
});


function addEvent() {
    if (eventName.value === "" || eventDate.value === "") {
        return;
    }
    if (dateDiff(eventDate.value) < 0) {
        return;
    }

    const newEvent = {
        id: (Math.random() * 100).toString(36).slice(3),
        name: eventName.value,
        date: eventDate.value,
    };

    events.unshift(newEvent);
    save(JSON.stringify(events));

    eventName.value = "";

    renderEvents();
}


function dateDiff(d) {
    const targetDate = new Date(d);
    const today = new Date();
    const difference = targetDate.getTime() - today.getTime();

    const days = Math.ceil(difference / (1000 * 3600 * 24));
    return days;
}

function renderEvents() {
    const eventsHTML = events.map(event => {
        return `
        <div class="event-ejercicio9">
            <div class="days-ejercicio9">
                <span class="days-number-ejercicio9">${dateDiff(event.date)}</span>
                <span class="days-text-ejercicio9">dias</span>
            </div>

            <div class="event-name-ejercicio9">${event.name}</div>
            <div class="event-date-ejercicio9">${event.date}</div>
            <div class="actions-ejercicio9">
                <button class="bDelete-ejercicio9" data-id="${event.id}">Eliminar</button>
            </div>
        </div>
        `;


    });

    eventsContainer.innerHTML = eventsHTML.join("");
    document.querySelectorAll(".bDelete-ejercicio9").forEach(button => {
        button.addEventListener("click", e => {
            const id = button.getAttribute("data-id");
            events = events.filter(event => event.id !== id);

            save(JSON.stringify(events));
            renderEvents();
        });
    });
}

function save(data) {
    localStorage.setItem("items", data);
}

function load() {
    return localStorage.getItem("items")
}