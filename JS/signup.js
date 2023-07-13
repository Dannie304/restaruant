const firstNameInput = document.querySelector("#first");
const lastNameInput = document.querySelector("#last");
const emailInput = document.querySelector("#gmail");
const usernameInput = document.querySelector("#user");
const passwordInput = document.querySelector("#password");
const form = document.querySelector(".form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const email = emailInput.value;
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (firstName === "" || lastName === "" || email === "" || username === "" || password === "") {
        alert("Please fill in all fields");
        return;
    }

    // Create a new user object
    const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: password,
    };

    try {
        const response = await fetch("http://localhost:5500/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            const jsonData = await response.json();
            throw new Error(jsonData.error);
        }

        const jsonData = await response.json();
        alert(jsonData.message);
    } catch (error) {
        const message = document.querySelector(".message");
        message.textContent = error.message;
    }

    form.reset();
});
