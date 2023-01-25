const http = require("node:http");

const server = http.createServer((req, res) => {
  res.write("Hello from Node!");
  res.end();
});

server.listen(5000, (_) => console.log("Server running..."));
