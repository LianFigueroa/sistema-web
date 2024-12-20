<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Login</title>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: linear-gradient(to bottom right, #FFD1E3, #B7F4D6);
            color: #333;
        }
        .login-container {
            background: #fff;
            border-radius: 15px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            width: 350px;
            text-align: center;
            padding: 30px;
            position: relative;
        }
        .login-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            background: linear-gradient(to bottom right, #FFD1E3, #B7F4D6);
            border-radius: 15px 0 0 15px;
            z-index: -1;
        }
        .login-container h2 {
            color: #333;
            margin-bottom: 15px;
            font-weight: 600;
        }
        .input-field {
            position: relative;
            margin: 15px 0;
        }
        .input-field input {
            width: 100%;
            padding: 12px 15px;
            border: none;
            background: #f3f3f3;
            border-radius: 8px;
            outline: none;
            font-size: 1em;
            color: #333;
        }
        .input-field input::placeholder {
            color: #999;
        }
        .input-field span {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: #aaa;
            pointer-events: none;
        }
        .login-button {
            background: linear-gradient(to right, #FF9A9E, #FAD0C4);
            color: #fff;
            border: none;
            padding: 10px 0;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1em;
            font-weight: 600;
            transition: 0.3s;
            width: 100%;
        }
        .login-button:hover {
            background: linear-gradient(to right, #FAD0C4, #FF9A9E);
            box-shadow: 0 4px 8px rgba(255, 154, 158, 0.5);
        }
        .options {
            display: flex;
            justify-content: space-between;
            font-size: 0.9em;
            margin-top: 10px;
            color: #555;
        }
        .options a {
            color: #999;
            text-decoration: none;
        }
        .options a:hover {
            color: #FF9A9E;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <h2>INICIAR SESION</h2>
        <form action="#" method="POST" autocomplete="off">
            <div class="input-field">
                <input type="text" id="username" placeholder="@UserName" required autocomplete="off">
            </div>
            <div class="input-field">
                <input type="password" id="password" placeholder="Password" required autocomplete="off">
            </div>
            <button type="button" class="login-button" onclick="login()">Log In</button>
        </form>
        <div class="options">
            <a href="#">Forgot Password</a>
            <a href="#">Sign Up</a>
        </div>
    </div>

    <script>
        // Datos de usuario predefinidos
        const users = {
            "figueroa": "123456"
        };

        // Función de inicio de sesión
        function login() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Verificación de usuario y contraseña
            if (users[username] && users[username] === password) {
                alert("Inicio de sesión exitoso");
                // Guardar en localStorage que el usuario está autenticado
                localStorage.setItem('loggedIn', 'true');
                // Redirigir a la página del dashboard
                window.location.href = "dashboard.html";
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        }
    </script>
</body>
</html>

