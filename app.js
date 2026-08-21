const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Temporary users
const users = [
    {
        username: "afkar",
        password: "1234"
    }
];

// Home route - useful for testing
app.get("/", (req, res) => {
    res.send("API is running!");
});

// Login API
app.post("/login", (req, res) => {

    const { username, password } = req.body;

    const user = users.find(
        u => u.username === username &&
             u.password === password
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

// Render gives us the PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
