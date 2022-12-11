import io from "./server.js";

io.on("connection", (socket) => {
  console.log("client connected:", socket.id);

  socket.on("first_event", (message) => {
    socket.broadcast.emit("client_first_event", message);
  });
});
