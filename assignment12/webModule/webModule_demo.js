// Step 1: Import the 'http' module
const http = require('http');

// Step 2: Create a server
const server = http.createServer((req, res) => {
  // Set the response header (status + type)
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Step 3: Send a response based on URL
  if (req.url === '/') {
    res.write('<h1>Welcome to My First Node.js Web Server! 🎉</h1>');
  } else if (req.url === '/about') {
    res.write('<h1>About Page</h1><p>This is a beginner Node.js web server demo.</p>');
  } else if (req.url === '/contact') {
    res.write('<h1>Contact Page</h1><p>Email: samiksha@example.com</p>');
  } else {
    res.write('<h1>404 - Page Not Found</h1>');
  }

  res.end(); // End the response
});

// Step 4: Start the server on port 3000
server.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});
