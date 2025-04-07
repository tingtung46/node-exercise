const fs = require("node:fs");

fs.readFile("/root/repos/node-exercise/test.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
