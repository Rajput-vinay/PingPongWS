# Ping-Pong WebSocket Project 🎾

This project is a simple WebSocket implementation to help you learn the basics of WebSocket communication in real-time. It uses the "ping-pong" pattern, where a **client** sends a `ping` message to the **server**, and the server responds with a `pong`.

---

## Features 📋

- Establish a WebSocket connection between a server and a client.
- Handle real-time communication using `ping` and `pong` messages.
- Dynamic client interaction via React.
- Implemented with TypeScript for enhanced type safety.

---

## How It Works 🛠️

1. **Server**:
   - Listens on port `8080`.
   - Responds with `pong` when it receives a `ping` message.

2. **Client**:
   - Connects to the WebSocket server.
   - Sends `ping` messages and displays the `pong` response in a list.

---

## Tech Stack 💻

### Backend:
- **Node.js**
- **ws**: WebSocket library for Node.js.

### Frontend:
- **React**: For building the user interface.
- **TypeScript**: For strict type checking.

---

## Prerequisites 🚀

- **Node.js** (>= 14.0.0)
- **npm** or **yarn**
- Basic understanding of WebSocket communication.

---

