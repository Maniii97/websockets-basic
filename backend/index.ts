import express from "express";
import http from "http";
import { WebSocketServer } from "ws";

const app = express();
const port = 3000;

const server = http.createServer(app);

const wss = new WebSocketServer({ server });

wss.on("connection", async (ws, req) => {
    ws.on("message", (message) => {
        console.log("received message: %s", message);
        ws.send(`You sent -> ${message}`);
    });
});

app.get("/good", (req, res) => {
    res.json({msg: "I am good"})
})

server.listen(port);