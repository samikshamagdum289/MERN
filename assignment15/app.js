const express = require('express');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files (optional, e.g. CSS)
app.use(express.static('public'));

// Home Route
app.get('/', (req, res) => {
  const user = {
    name: 'Samiksha',
    course: 'Computer Science',
    college: 'D.Y.Patil college of Engineering,Kolhapur'
  };
  // Render 'index.ejs' and pass data to it
  res.render('index', { user: user });
});

// About Route
app.get('/about', (req, res) => {
  const info = "This page is rendered using EJS templates in Express.js.";
  res.render('about', { message: info });
});

// Start the Server
app.listen(3000, () => {
  console.log('✅ Server running at http://localhost:3000');
});
