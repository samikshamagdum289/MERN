const mongoose = require("mongoose");

// Define schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

// Export model
module.exports = mongoose.model("User", userSchema);
