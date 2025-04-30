document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;
    let name = document.getElementById("name");
    let nameError = name.nextElementSibling;
    if (name.value.trim().length < 3) {
        nameError.textContent = "Name must be at least 3 characters long.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }
    let email = document.getElementById("email");
    let emailError = email.nextElementSibling;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email.value)) {
        emailError.textContent = "Enter a valid email.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }
    let password = document.getElementById("password");
    let passwordError = password.nextElementSibling;
    if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }
    let confirmPassword = document.getElementById("confirmPassword");
    let confirmPasswordError = confirmPassword.nextElementSibling;
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        isValid = false;
    } else {
        confirmPasswordError.textContent = "";
    }
    if (isValid) {
        alert("Form submitted successfully!");
        this.submit();
    }
});
