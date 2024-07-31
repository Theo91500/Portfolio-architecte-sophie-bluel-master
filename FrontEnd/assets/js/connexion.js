document.getElementById("login-form").addEventListener('submit', async (event) => {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log(email, password);

    try {
        const response = await fetch('http://localhost:5678/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        const token = data.token;

        // Vérifie si le token existe
        if (!token) {
            throw new Error('Token not found in the response');
        }

        // Stocker le token dans le stockage local (ou session storage)
        localStorage.setItem('token', token);

        // Rediriger ou mettre à jour l'interface utilisateur
        window.location.href = 'index.html'; // Rediriger vers une autre page
    } catch (error) {
        console.error('Error:', error);
        alert('Login failed: ' + error.message);
    }
});
