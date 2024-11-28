import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8080})

wss.on("connection", (socket)=>{
    console.log("connection established")

    socket.on("message", (message)=>{
        console.log(`Recived message ${message.toString()}`)

        if(message.toString() === "ping"){
            socket.send("Pong")
        }
    })
})