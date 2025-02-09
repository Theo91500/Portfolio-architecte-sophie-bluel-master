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
            console.log(item.title);
            
            const itemElement = document.createElement('figure');
            itemElement.setAttribute('data-category', item.category.name);
            
            
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

export function addButtonsFilterToContainer(container, categories, itemsContainer, data) {
    
    if (container) {   
        addItemsToContainer(itemsContainer, data, true, true, false);

        const allButton = document.createElement('button');
        allButton.className = 'filtersButton activeButton';
        allButton.textContent = 'Tous';
        allButton.setAttribute('data-category', 'Tous');
        container.appendChild(allButton);

        categories.forEach(item => {
            const button = document.createElement('button');
            
            button.className = 'filtersButton';
            button.textContent = item.name;
            button.setAttribute('data-category', item.name);
            
            // Ajouter l'élément au conteneur
            container.appendChild(button);

        });
        const myButtons = document.querySelectorAll('.filtersButton');

        myButtons.forEach(button => {
            button.addEventListener('click', () => {
                myButtons.forEach(btn => btn.classList.remove('activeButton'));
                button.classList.add('activeButton');
                
                let selectedCategory = button.getAttribute('data-category');
                let filteredData = [];
                
                
                // const filteredData = selectedCategory === 'Tous' 
                //     ? data 
                //     : data.filter(item => item.categories === selectedCategory);

                    if (selectedCategory === 'Tous') {
                        filteredData = data;
                    } else {
                        filteredData = data.filter(item => item.category.name === selectedCategory);
                    }

                    itemsContainer.innerHTML = '';
                    
                addItemsToContainer(itemsContainer, filteredData, true, true, false);
            });
        });
    }
}
// addButtonsFilterToContainer(container, categories, itemsContainer, data);

// Appeler la fonction displayData pour remplir les deux sections