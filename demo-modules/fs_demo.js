const fs = require("node:fs");
const path = require("node:path");

// ? Creating directories
// fs.mkdir(path.join(__dirname, "./test"), (err) => {
//   if (err) throw err;
//   console.log("Folder created...");
// });

// ? Creating files, updating it, and writing into them
// fs.writeFile(
//   path.join(__dirname, "test", "hello.txt"),
//   "Hello from Node!",
//   (err) => {
// if (err) throw err;
// console.log("File written into...");
// fs.appendFile(
//   path.join(__dirname, "test", "hello.txt"),
//   "\nSincerly, Node is amazing!",
//   (err) => {
// if (err) throw err;
// console.log("File updated...");
//   }
// );
//   }
// );

// ? Read the content of a file
// fs.readFile(path.join(__dirname, "test", "hello.txt"), "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// ? Rename a file
fs.rename(
  path.join(__dirname, "test", "hello.txt"),
  path.join(__dirname, "test", "hello.htm"),
  (err) => {
    if (err) throw err;
    console.log("File renamed...");
  }
);
