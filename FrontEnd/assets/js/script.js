// "http://localhost:5678/api/works"

export async function fetchData(url) {
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

export function addItemsToContainer(container, data, showImage, showTitle, trashV) {
    if (container) {
        data.forEach(item => {
            const itemElement = document.createElement('figure');

            // Ajouter l'image si showImage est true
            if (showImage) {
                const img = document.createElement('img');
                img.src = item.imageUrl;
                img.alt = item.title;
                itemElement.appendChild(img);
            }

            // Ajouter le titre si showTitle est true
            if (showTitle) {
                const title = document.createElement('span');
                title.textContent = item.title;
                itemElement.appendChild(title);
            }

            if (trashV) {
                const trash = document.createElement('button');
                trash.className = 'trashLink';
                const trashIcon = document.createElement('i');
                trashIcon.className = 'fa-solid fa-trash';
                trash.appendChild(trashIcon);
                itemElement.appendChild(trash);
            }

            // Ajouter l'élément au conteneur
            container.appendChild(itemElement);
        });
    }
}

// Appeler la fonction displayData pour remplir les deux sections