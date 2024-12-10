// Fetch the NFT card data from cards.json
fetch('src/cards.json')
    .then(response => response.json())
    .then(data => {
        const nftGrid = document.getElementById('nft-grid');

        // Loop through each card and create a card element
        data.forEach(card => {
            const nftCard = document.createElement('div');
            nftCard.classList.add('nft-card');

            nftCard.innerHTML = `
                <img src="${card.image}" alt="${card.title}" class="rounded-lg shadow-md">
                <h3 class="text-xl font-bold">${card.title}</h3>
                <p>Rarity: ${card.rarity}</p>
                <a href="${card.link}">View Details</a>
            `;

            nftGrid.appendChild(nftCard);
        });
    })
    .catch(error => console.error('Error loading NFT cards:', error));

