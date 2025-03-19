document.addEventListener("DOMContentLoaded", function () {
    // LOGIN
    const loginBtn = document.getElementById("btn-login");

    if (loginBtn) {
        loginBtn.addEventListener("click", function (e) {
            e.preventDefault();

            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;

            if (email === "admin@email.com" && password === "admin123") {
                localStorage.setItem("loggedIn", "true");
                window.location.href = "dashboard.html"; // Redireciona
            } else {
                alert("Credenciais inválidas! Verifique seu e-mail e senha.");
                document.getElementById("login-password").value = ""; // Limpa senha
            }
        });
    }

    // LOGOUT
    const logoutBtn = document.getElementById("btn-logout");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("loggedIn");
            window.location.href = "index.html"; // Volta para login
        });
    }
});
