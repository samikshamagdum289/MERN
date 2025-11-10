// Import express module
const express = require('express');
const app = express();

// Middleware to handle JSON data
app.use(express.json());

// ---------------------------
//  GET REQUEST EXAMPLE
// ---------------------------
app.get('/', (req, res) => {
  res.send('Welcome to the Express.js GET and POST demo!');
});

// Example: GET with query parameters
// URL: http://localhost:3000/user?name=Samiksha&age=21
app.get('/user', (req, res) => {
  const name = req.query.name;
  const age = req.query.age;
  res.send(`Hello ${name}, you are ${age} years old.`);
});

// ---------------------------
//  POST REQUEST EXAMPLE
// ---------------------------
// Use POSTMAN or a frontend form to test this
app.post('/register', (req, res) => {
  const { name, email } = req.body;
  res.json({
    message: 'POST request received successfully!',
    dataReceived: { name, email }
  });
});

// ---------------------------
//  Start the Server
// ---------------------------
app.listen(3000, () => {
  console.log('✅ Server running on http://localhost:3000');
});
