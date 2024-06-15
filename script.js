document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

    
        if (email.trim() === "" || password.trim() === "") {
            alert("Please enter both email and password.");
            return;
        }

        alert(`Submitting email: ${email} and password: ${password}`);
        window.location.href = "https://www.netflix.com/";
    });
});
