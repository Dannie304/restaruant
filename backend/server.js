const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse request body
app.use(bodyParser.json());

// Endpoint for signup form submission
app.post('/signup', (req, res) => {
    // Retrieve the user data from the request body
    const { firstName, lastName, email, username, password } = req.body;

    // Perform validation
    if (!firstName || !lastName || !email || !username || !password) {
        return res.status(400).json({ error: 'Please fill in all fields' });
    }

    // Store the user data or perform any necessary database operations here
    // For this example, let's assume the user data is stored in an array
    const newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: password
    };

    // Here, you can add code to store the newUser object in your database or perform any other desired actions

    // Return a success response
    return res.status(200).json({ message: 'Signup successful!' });
});

// Start the server
app.listen(5500, () => {
    console.log('Server is running on port 5500');
});
