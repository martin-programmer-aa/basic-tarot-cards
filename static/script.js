async function loadCards() {
    const response = await fetch("/cards");
    const cards = await response.json();
    const container = document.getElementById("card-container");

    container.innerHTML ="";
    
    cards.forEach(card => {
        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${card.name}</h3>
            <p>${card.meaning}</p>
            `;

            container.appendChild(div);
    });
}