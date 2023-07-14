// Import dependencies
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Use middleware
app.use(cors()); // Enable CORS
app.use(morgan('dev')); // Logging HTTP requests
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Define routes
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.post('/signup', (req, res) => {
    // Get user input from the request body
    const { firstName, lastName, email, username, password } = req.body;

    // Perform basic validation
    if (!firstName || !lastName || !email || !username || !password) {
        return res.status(400).json({ error: 'Please fill in all fields' });
    }

    // Perform additional validation or checks as needed

    // In a real-world scenario, you would store the user data in a database
    // Here, we'll just log the user data to the console
    console.log('New user signup:', {
        firstName,
        lastName,
        email,
        username,
        password,
    });

    // Return a success message
    res.json({ message: 'Signup successful' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
