const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Node.js Web App</h1>
              <form action="/greet" method="POST">
                  <input type="text" name="name" placeholder="Enter your name">
                  <button type="submit">Submit</button>
              </form>`);
});

app.post('/greet', (req, res) => {
    const name = req.body.name;
    res.send(`<h2>Hello, ${name}! Welcome to Node.js Web App.</h2>`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
