const path = require("node:path");

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// Extension name
console.log(path.extname(__filename));

// Create path object
const fileProps = path.parse(__filename);
console.log(fileProps);
console.log(
  "File root: " + fileProps.root + "\n",
  "Dir name: " + fileProps.dir + "\n"
);

// Concatenate paths
console.log(path.join(__filename, "file", "/file2.html"));
