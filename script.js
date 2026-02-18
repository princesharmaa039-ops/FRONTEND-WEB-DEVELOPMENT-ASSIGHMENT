const form = document.getElementById("event-form");
const eventTitle = document.getElementById("event-title");
const eventDate = document.getElementById("event-date");
const category = document.getElementById("category");
const description = document.getElementById("description");
const container = document.getElementById("all-event-container");
const clearBtn = document.getElementById("clear-events-btn");
const sampleBtn = document.getElementById("add-sample-events-btn");
const keyDisplay = document.getElementById("key-display");

let events = [];

/* Add Event */
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const newEvent = {
        id: Date.now(),
        title: eventTitle.value,
        date: eventDate.value,
        category: category.value,
        description: description.value
    };

    events.push(newEvent);
    renderEvents();
    form.reset();
});

/* Render Events (DOM Manipulation) */
function renderEvents() {
    container.innerHTML = "";

    if (events.length === 0) {
        container.innerHTML = `<p class="empty-text">No events yet. Add your first event!</p>`;
        return;
    }

    events.forEach(event => {
        const card = document.createElement("div");
        card.classList.add("event-card");

        const delBtn = document.createElement("button");
        delBtn.classList.add("delete-btn");
        delBtn.textContent = "X";
        delBtn.addEventListener("click", () => {
            events = events.filter(e => e.id !== event.id);
            renderEvents();
        });

        const title = document.createElement("h4");
        title.textContent = event.title;

        const date = document.createElement("p");
        date.textContent = "Date: " + event.date;

        const cat = document.createElement("p");
        cat.textContent = "Category: " + event.category;

        const desc = document.createElement("p");
        desc.textContent = event.description;

        card.append(delBtn, title, date, cat, desc);
        container.appendChild(card);
    });
}

/* Clear Events */
clearBtn.addEventListener("click", () => {
    events = [];
    renderEvents();
});

/* Add Sample */
sampleBtn.addEventListener("click", () => {
    events.push({
        id: Date.now(),
        title: "Tech Conference 2026",
        date: "2026-03-16",
        category: "Conference",
        description: "Annual technology conference."
    },
    {
        id: Date.now() + 1,
        title: "Web Development Conference",
        date: "2026-02-15",
        category: "Conference",
        description: "Annual conference on modern web technologies."
    },

        {
            title:"JavaScript Workshop",
            date:"2026-02-20",
            category:"Workshop",
            description:"Hands-on JavaScript learning session."
        });
    renderEvents();
});

/* DOM Manipulation Demo (Keyboard Event) */
document.addEventListener("keydown", function(e) {
    keyDisplay.textContent = "You Pressed: " + e.key;
});