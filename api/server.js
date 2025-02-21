// server.js

const express = require('express');
const path = require('path');  // Required to join paths
const app = express();
const port = 3000;  // Port to listen on

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Sample data to return from the API (can be dynamic as per your use case)
let responseData = {
    "status": "success",
    "userID": "Shivangi_Gupta_02102005",
    "collegeEmail": "22bcs15008@cuchd.in",
    "rollNumber": "22BCS15008",
    "numbers": [1, 2, 3, 4],
    "alphabets": ["A", "B", "C"]
};

// POST endpoint to receive JSON payload
app.post('/submit', (req, res) => {
    const requestBody = req.body;
    console.log('Received JSON:', requestBody);

    // Here, you would typically process the incoming JSON data
    // For simplicity, we are returning the static responseData

    res.json(responseData);
});

// GET endpoint to return operation code
app.get('/operation-code', (req, res) => {
    const operationCode = "123-ABC"; // Example operation code
    res.json({ operation_code: operationCode });
});

// Catch-all route to serve the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
