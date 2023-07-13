const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse JSON bodies for this server
app.use(bodyParser.json());

app.post('/api/user', (req, res) => {
    const userData = req.body;
    // Process the user data
    res.json({ message: 'User created successfully' });
});

const port = 3000; // Choose the desired port number
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
