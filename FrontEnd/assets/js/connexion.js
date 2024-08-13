document.getElementById("login-form").addEventListener('submit', async (event) => {
    event.preventDefault(); // Sélectionne le formulaire avec l'ID "login-form, Empêche la soumission par défaut du formulaire, Empêche le comportement par défaut du navigateur, qui serait de soumettre le formulaire et de recharger la page.//

    const email = document.getElementById('email').value; //Récupère la valeur du champ email du formulaire.//
    const password = document.getElementById('password').value;     //Récupère la valeur du champ mot de passe du formulaire.//

    console.log(email, password); //Affiche les valeurs de l'email et du mot de passe dans la console du navigateur.//

    try {
        const response = await fetch('http://localhost:5678/api/users/login', { //Envoie une requête HTTP POST à l'URL spécifiée (ici, c'est un serveur local).//
            method: 'POST', // Indique que la requête utilise la méthode POST.//
            headers: { //Définit le type de contenu de la requête comme étant du JSON.//
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }) //Convertit les données email et password en une chaîne JSON pour l'envoyer dans le corps de la requête.//
        });

        if (!response.ok) { //Vérifie si le token n'est pas présent//
            throw new Error('Login failed'); 
        }

        const data = await response.json();
        const token = data.token;

        // Vérifie si le token existe
        if (!token) {
            throw new Error('Token not found in the response'); //Si le token est absent = Error//
        }

        // Stocker le token dans le stockage local (ou session storage)
        localStorage.setItem('token', token);

        // Rediriger ou mettre à jour l'interface utilisateur
        window.location.href = 'index.html'; // Rediriger vers une autre page
    } catch (error) {
        console.error('Error:', error); //Affiche l'erreur dans la console pour aider au débogage.//
        alert('Login failed: ' + error.message);
    }
});
