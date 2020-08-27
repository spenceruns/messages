const app = require('express')();
const server = require('http').createServer(app);
const io = require("socket.io").listen(server);
const port = 3000;

io.on("connection", socket => {
  console.log("a user connected :D");
  socket.on("message", msg => {
    io.emit("message", msg)
  })
});

server.listen(port, () => console.log("server running on port: " + port));
