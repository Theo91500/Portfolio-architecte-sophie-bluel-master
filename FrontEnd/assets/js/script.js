// "http://localhost:5678/api/works"

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

async function displayData() {
    const url = 'http://localhost:5678/api/works'; // Remplace avec l'URL de ton API
    const data = await fetchData(url);

    if (data) {
        const productList  = document.getElementById('data-list'); // Assure-toi d'avoir un élément avec cet ID dans ton HTML

        data.forEach(item => {
            const productItem = document.createElement('figure');

            // Créer et ajouter l'image
            const img = document.createElement('img');
            img.src = item.imageUrl;
            img.alt = item.title;
            productItem.appendChild(img);

            // Créer et ajouter le titre
            const title = document.createElement('span');
            title.textContent = item.title;
            productItem.appendChild(title);

            // Ajouter le produit au conteneur principal
            productList.appendChild(productItem);
        });
    }
}

displayData();