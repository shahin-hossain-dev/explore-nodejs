const fs = require("fs");

// read file asynchronously

/**
 * fs.readFile(readPath, option, callback)
 */

fs.readFile("../text/read.txt", "utf-8", (err, data) => {
  if (err) {
    throw Error("File not found");
  }
  console.log(data);

  //write file asynchronously
  /**
   * fs.writeFile(writePath, data, option, callback)
   */

  fs.writeFile("../text/write-async.txt", data, "utf-8", (err) => {
    if (err) throw Error("Error asynchronous write data");
  });
});
