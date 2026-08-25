# loginsystem

A simple login and sign-up system built with Node.js (Express) and a modern frontend.

Users can register and log in with a username and password. Passwords are hashed with SHA-256 and stored in a local JSON file.

## Features

- Login and Sign Up forms on a single page with tab switching
- Clean glassmorphism-style UI
- Password visibility toggle
- Form feedback with loading states and success/error messages
- Basic server-side validation
- Password hashing (SHA-256)
- Prevents duplicate usernames
- Serves the frontend and handles API requests from the same Express app

## Tech Stack

- Backend: Node.js, Express
- Frontend: HTML, CSS, JavaScript
- Storage: Local JSON file (`users.json`)
- Hashing: Node.js `crypto` module (SHA-256)

## Project Structure
loginsystem/
├── app.js              # Express server and auth routes
├── index.html          # Frontend UI
├── package.json
├── package-lock.json
├── users.json          # Created automatically on first run
└── README.md

## API Endpoints

-> Signup/login

```
Content-Type: application/json

{
  "username": "yourname",
  "password": "yourpassword"
}
```

## Developer
Md Afkar Ahmad
[Telegram](https://t.me/mdafkarahmad)
[WhatsApp](https://wa.me/9395737512)
[Instagram](https://instagram.com/mdafkarahmad)
[GitHub](https://github.com/mdafkarahmad)

## License
This project is open source and free to use for learning and personal projects.
