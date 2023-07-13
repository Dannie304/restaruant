function logout() {

    alert("Logged out successfully!");
    window.location.href = "login.html";
}

// Add event listener to the logout button
var logoutButton = document.querySelector(".logout-button");
logoutButton.addEventListener("click", logout);