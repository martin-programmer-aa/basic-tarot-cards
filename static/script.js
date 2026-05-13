let allCards = [];
let currentCard = null;

let angle = 0;
let spinning = false;
let reveal = false;

// ---------- Load all tarot cards
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

async function drawRandomCard() {

    if (allCards.length === 0) {
        await getCards();
    }

    const randomIndex = Math.floor(Math.random() * allCards.length);

    currentCard = allCards[randomIndex];

    spinning = true;
    reveal = false;
    angle = 0;
}

/* ---------------- P5.JS ---------------- */

function setup() {

    const canvas = createCanvas(400, 500);

    canvas.parent("p5-container");

    textAlign(CENTER, CENTER);
}

function draw() {

    background(20, 10, 40);

    fill(255);

    textSize(30);

    text("✨ Tarot Reading ✨", width / 2, 40);

    translate(width / 2, height / 2);

    // Spin animation
    if (spinning) {

        angle += 0.15;

        if (angle >= TWO_PI * 2) {

            spinning = false;
            reveal = true;
        }
    }

    rotate(angle);

    // Flip effect
    let cardWidth = 200 * abs(cos(angle));

    // Card shadow
    fill(0, 0, 0, 100);
    rect(-81, -41, 200, 300, 20);

    // Card body
    fill(80, 40, 120);

    stroke(255, 215, 0);
    strokeWeight(4);

    rectMode(CENTER);

    rect(0, 0, cardWidth, 300, 20);

    // Back of card
    if (!reveal || cardWidth < 20) {

        fill(255, 215, 0);

        textSize(28);

        text("✦", 0, 0);
    }

    // Front of card
    else {

        fill(255);

        textSize(24);

        text(currentCard.name, 0, -40);

        textSize(16);

        text(currentCard.meaning, 0, 40, 150);
    }
}