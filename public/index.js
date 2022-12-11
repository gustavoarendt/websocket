import { emitMessage } from "./client-socket.js";

const message = document.getElementById("edit__text");

message.addEventListener("keyup", () => {
  emitMessage(message.value);
});

function updateMessage(updatedMessage) {
  message.value = updatedMessage;
}

export { updateMessage };
