import { updateMessage } from "./index.js";

const socket = io();

function emitMessage(message) {
  socket.emit("first_event", message);
}

socket.on("client_first_event", (updatedMessage) => {
  updateMessage(updatedMessage);
});

export { emitMessage };
