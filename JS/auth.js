const authButton = document.getElementById("authButton");

// Function to toggle the button text and link based on the user's authentication status
function toggleAuthButton() {
    const isLoggedIn = checkLoggedInStatus(); // Function to check the login status, modify as per your authentication mechanism

    if (isLoggedIn) {
        authButton.innerHTML = '<a href="#">LOGOUT</a>';
        authButton.addEventListener("click", logout);
    } else {
        authButton.innerHTML = '<a href="signup.html">SIGN-UP</a>';
        authButton.removeEventListener("click", logout);
    }
}

// Function to handle the logout functionality
function logout() {
    // Perform logout operations (e.g., clearing session, redirecting to the logout page, etc.)
    // ...

    // After successful logout
    toggleAuthButton();
    window.location.href = "index.html";
}

// Call the toggleAuthButton function to set the initial state of the button
toggleAuthButton();
