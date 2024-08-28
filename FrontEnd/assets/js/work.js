import { apiCategories, apiWorks } from './api.js';
import { addItemsToContainer } from './script.js';

async function readWorks() {
    const data = await apiWorks();

    if (data) {
        // Sélectionner les conteneurs pour les différentes sections
        const portfolioList = document.querySelector('.gallery'); // Liste principale du portfolio
        const modalList = document.querySelector('.modalEditPicture .data-list'); // Liste des modals

        // Remplir la galerie du portfolio avec images et titres
        addItemsToContainer(portfolioList, data, true, true, false);

        // Remplir les modals avec uniquement des images
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

async function removeWorks() {
    document.addEventListener("DOMContentLoaded", async function () {
        const trash = document.querySelectorAll('.trashLink');
        const data = await apiWorks();
    
        data.forEach(works => {
            trash.addEventListener('click', ()=>{
                
            })
        });

    });
}

removeWorks();
readWorks();
addWorks();