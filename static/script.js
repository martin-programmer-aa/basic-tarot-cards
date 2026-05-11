let allCards = [];

// Load all tarot cards
async function loadCards() {

    const response = await fetch("/cards");
    const cards = await response.json();

    allCards = cards;

    const container = document.getElementById("card-container");

    container.innerHTML = "";

    cards.forEach(card => {

        const div = document.createElement("div");

        div.classList.add("card");

        div.innerHTML = `
            <h3>${card.name}</h3>
            <p>${card.meaning}</p>
        `;

        container.appendChild(div);
    });
}

// Draw one random card
async function drawRandomCard() {

    // If cards not loaded yet
    if (allCards.length === 0) {

        const response = await fetch("/cards");
        allCards = await response.json();
    }

    const randomIndex = Math.floor(Math.random() * allCards.length);

    const card = allCards[randomIndex];

    const container = document.getElementById("random-card-container");

    container.innerHTML = `
        <div class="random-card">
            <h2>${card.name}</h2>
            <p>${card.meaning}</p>
        </div>
    `;
}