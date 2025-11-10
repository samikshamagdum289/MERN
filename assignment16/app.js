const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/expressMongoDemo")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// POST route to add a new user
app.post("/addUser", async (req, res) => {
  const { name, email, age } = req.body;
  const user = new User({ name, email, age });
  await user.save();
  res.send("User added successfully!");
});

// GET route to display all users
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
