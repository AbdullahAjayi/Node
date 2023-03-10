const EventEmitter = require("node:events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("event", () => {
  console.log("Event fired...");
});

myEmitter.emit("event");
