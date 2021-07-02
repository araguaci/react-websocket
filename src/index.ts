import express from "express";
import socketio from "socket.io";
import http from "http";
import path from "path";
import { setTokenSourceMapRange } from "typescript";

const app = express();
const httpServer = http.createServer(app);
const io = new socketio.Server(httpServer);

app.use(express.static(path.resolve(__dirname, '../', 'public')));

io.on('connection', (socket) => {
    console.log(`login: ${socket.id}`);

    socket.on('message', message => {
        socket.emit('serverpong', `pong => ${message}`);

        switch (message) {
            case 'dial':
                console.log(`dial => ${socket.id}`);
                break;
        
            default:
                console.log(`message => ${message} - socket: ${socket.id}`);
                break;
        }
    })
}) 

httpServer.listen(3333);







