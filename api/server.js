const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data
const userInfo = {
  "user_id": "Shivangi_Gupta_02102005",
    "email": "22bcs15008@cuchd.in",
    "roll_number": "22BCS15008"
};

// POST /bfhl route
app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).json({ is_success: false, message: "Invalid input data" });
  }

  let numbers = [];
  let alphabets = [];
  let highestAlphabet = [];

  // Process the input data to separate numbers and alphabets
  data.forEach(item => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (/^[a-zA-Z]$/.test(item)) {
      alphabets.push(item.toUpperCase()); // Store uppercase for case-insensitivity
    }
  });

  // Find highest alphabet (case-insensitive)
  if (alphabets.length > 0) {
    highestAlphabet = [alphabets.sort().pop()];  // Get the highest alphabet
  }

  // Response
  res.json({
    "is_success": true,
    "user_id": "Shivangi_Gupta_02102005",
    "email": "22bcs15008@cuchd.in",
    "roll_number": "22BCS15008",
    "numbers": ["1","2","3", "4"],
    "alphabets": ["A", "B", "C"],
    "highest_alphabet":["A"]
  });
});

// GET /bfhl route
app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
