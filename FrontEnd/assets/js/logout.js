document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');

    // login / logout button
    const loginBtn = document.querySelector('.loginBtn');
    const logoutBtn = document.querySelector('.logoutBtn');

    // button edit
    const editButton = document.querySelector('.editButton');
    
    // div edit mode header
    const loginEditHeader = document.querySelector('.loginEditHeader');


    if (token) {
        // Afficher le nom de l'utilisateur et le bouton de déconnexion
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'block';

        // button edit
        editButton.style.display = 'block';

        // div edit mode header
        loginEditHeader.style.display = 'block';

    } else {
        // Cacher l'élément d'information utilisateur et le bouton de déconnexion si non connecté
        loginBtn.style.display = 'block';
        logoutBtn.style.display = 'none';

        // button edit
        editButton.style.display = 'none';

        // div edit mode header
        loginEditHeader.style.display = 'none';
    }





    // Ajouter un gestionnaire d'événements pour le bouton de déconnexion
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('token');
        window.location.href = 'index.html'; // Rediriger vers la page de connexion
    });
});