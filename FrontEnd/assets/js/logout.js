document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');

    const loginBtn = document.querySelector('.loginBtn');
    const logoutBtn = document.querySelector('.logoutBtn');

    if (token) {
        // Afficher le nom de l'utilisateur et le bouton de déconnexion
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
    } else {
        // Cacher l'élément d'information utilisateur et le bouton de déconnexion si non connecté
        loginBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
    }

    // Ajouter un gestionnaire d'événements pour le bouton de déconnexion
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('token');
        window.location.href = 'index.html'; // Rediriger vers la page de connexion
    });
});