document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Simulación de autenticación simple
    const usuarios = {
        'emaslucan': '12345',
        'usuario2': 'c'
    };

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (usuarios[username] && usuarios[username] === password) {
        // Redirige al dashboard si las credenciales son correctas
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('mensaje').innerText = 'Usuario o contraseña incorrectos. Inténtalo de nuevo.';
    }
});
