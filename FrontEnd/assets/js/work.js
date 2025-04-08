import { apiCategories, apiWorks } from './api.js';
import { addButtonsFilterToContainer, addItemsToContainer } from './script.js';

async function readWorks() {
    const data = await apiWorks();
    const categories = await apiCategories();

    if (data) {
        // Sélectionner les conteneurs pour les différentes sections
        const portfolioList = document.querySelector('.gallery'); // Liste principale du portfolio
        const modalList = document.querySelector('.modalEditPicture .data-list'); // Liste des modals
        const myButtonsContainer = document.querySelector('.myButtonsContainer'); // Liste des boutons

        // Remplir la galerie du portfolio avec images et titres
        // const categoryList = [{ name: 'Tous', className: 'activeButton' }, ...categories];
        //addItemsToContainer(portfolioList, data, true, true, false);


        // Remplir les modals avec uniquement des images
        addButtonsFilterToContainer(myButtonsContainer, categories, portfolioList, data);
        addItemsToContainer(modalList, data, true, false, true);


    }
}

async function addWorks() {
    document.addEventListener("DOMContentLoaded", async function () {
        // Fetch categories and populate the select box
        const categorySelect = document.getElementById('category');
        const token = localStorage.getItem('token');

        try {
            const categories = await apiCategories();
            
            categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category.id;
                option.textContent = category.name;
                categorySelect.appendChild(option);
            });
        } catch (error) {
            console.error("Erreur lors de la récupération des catégories:", error);
        }
    
        // Handle form submission
        const form = document.getElementById('uploadForm');
        form.addEventListener('submit', async function (e) {
            e.preventDefault();
    
            const formData = new FormData();
            const title = document.getElementById('title').value;
            const image = document.getElementById('file-upload').files[0];
            const categoryId = document.getElementById('category').value;
    
            formData.append('title', title);
            formData.append('image', image);
            formData.append('category', categoryId);
    
            try {
                const response = await fetch('http://localhost:5678/api/works', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}` // Remplacez `yourToken` par le vrai token
                    },
                    body: formData
                });
    
                if (response.ok) {
                    const result = await response.json();
                } else {
                    console.error('Erreur:', response.statusText);
                }
            } catch (error) {
                console.error('Erreur lors de l\'envoi du formulaire:', error);
            }
        });
    });
}

export async function removeWorks() {
    const trashes = document.querySelectorAll('.trashLink');
    const data = await apiWorks();
    const token = localStorage.getItem('token');

    
    for (let i = 0; i < data.length; i++) {
        
        trashes[i].addEventListener('click', async ()=> {

            try {
                // Envoi de la requête DELETE à l'API pour supprimer l'élément
                const response = await fetch(`http://localhost:5678/api/works/${data[i].id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                        
                        // Ajoute d'autres en-têtes si nécessaire (par exemple, un token d'authentification)
                    }
                });

                if (response.ok) {
                    // Supprimer l'élément du DOM après sa suppression réussie
                    trashes[i].closest('.item').remove(); // Supposons que chaque 'trashLink' est dans un conteneur avec la classe 'item'
                } else {
                    console.error(`Failed to delete item with id ${data[i].id}.`, response.status);
                }
            } catch (error) {
                console.error('Error:', error);
            }

        });
    }
}

readWorks();
addWorks();