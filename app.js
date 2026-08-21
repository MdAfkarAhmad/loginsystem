const express = require("express");

const app = express();

app.use(express.json());

// Temporary users
const users = [
  {
    username: "afkar",
    password: "1234"
  }
];

// Login API
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid username or password"
    });
  }

  res.json({
    success: true,
    message: "Login successful"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});