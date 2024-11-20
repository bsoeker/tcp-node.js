import net from "net";

const server = net.createServer((socket) => {
  console.log(
    `TCP Handshake has been successfully initiated with ${socket.remoteAddress}:${socket.remotePort}`
  );

  socket.write("Hello client!\n");
  socket.on("data", (stream) => {
    console.log("Message received: " + stream.toString());
  });
});

server.listen(5001, "127.0.0.1");
