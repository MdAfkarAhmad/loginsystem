const express = require("express");
const fs = require("fs");
const crypto = require("crypto");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static("."));
const USERS_FILE = "users.json";

// Create users.json if it doesn't exist
if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, "[]");
}

function getUsers() {
    return JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));
}

function saveUsers(users) {
    fs.writeFileSync(
        USERS_FILE,
        JSON.stringify(users, null, 2)
    );
}

function hashPassword(password) {
    return crypto
        .createHash("sha256")
        .update(password)
        .digest("hex");
}


// SIGN UP
app.post("/signup", (req, res) => {

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            message: "Username and password are required"
        });
    }

    const users = getUsers();

    const existingUser = users.find(
        user => user.username === username
    );

    if (existingUser) {
        return res.status(409).json({
            message: "Username already exists"
        });
    }

    users.push({
        username,
        password: hashPassword(password)
    });

    saveUsers(users);

    res.status(201).json({
        message: "Account created successfully"
    });
});


// LOGIN
app.post("/login", (req, res) => {

    const { username, password } = req.body;

    const users = getUsers();

    const user = users.find(
        user => user.username === username
    );

    if (!user || user.password !== hashPassword(password)) {
        return res.status(401).json({
            message: "Invalid username or password"
        });
    }

    res.json({
        message: "Login successful",
        username: user.username
    });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
