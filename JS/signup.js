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

const express = require('express');
const connection = require('./database'); // Import the database connection

const app = express();

// Other route handlers and middleware...

app.post('/signup', (req, res) => {
    // Retrieve user data from the request body
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    };

    // Insert the user data into the database
    connection.query('INSERT INTO users SET ?', user, (error, results) => {
        if (error) {
            console.error('Error inserting user:', error);
            res.status(500).json({ error: 'Error inserting user' });
            return;
        }

        res.status(200).json({ message: 'User inserted successfully' });
    });
});

// Other route handlers and middleware...

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
