// Import express
const express = require('express');
const app = express();

// Middleware to parse JSON data from requests
app.use(express.json());

// Simple GET request
app.get('/', (req, res) => {
  res.send('Welcome to Express.js Request and Response Demo!');
});

// Example 1: Handling query parameters
// URL example: http://localhost:3000/user?name=Samiksha&age=21
app.get('/user', (req, res) => {
  const name = req.query.name;
  const age = req.query.age;
  res.send(`Hello ${name}, you are ${age} years old.`);
});

// Example 2: Handling route parameters
// URL example: http://localhost:3000/student/Ayesha
app.get('/student/:name', (req, res) => {
  const studentName = req.params.name;
  res.send(`Student name received: ${studentName}`);
});

// Example 3: Handling POST request (sending JSON data)
app.post('/register', (req, res) => {
  const { name, email } = req.body;
  res.json({
    message: 'Registration successful!',
    receivedData: { name, email }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
