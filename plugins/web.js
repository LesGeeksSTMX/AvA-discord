const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
server.listen(process.env.PORT || 80)


app.get('/', (req, res) => {
    
})