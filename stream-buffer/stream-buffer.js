const http = require("http");

const fs = require("fs");

//creating a server with raw node.js
const server = http.createServer();

//server listener

server.on("request", (req, res) => {
  if (req.url === "/read-file" && req.method === "GET") {
    //access current directory -> process.cwd(), __dirname
    // createReadStream() method হলো data asynchronous streaming buffer করার জন্য।
    //যেখানে data গুলো chunk by chunk প্রবাহিত হয়।

    const readableStream = fs.createReadStream(process.cwd() + "/read.txt");

    //data listen and write buffer
    readableStream.on("data", (buffer) => {
      res.write(buffer);
    });

    //data read and write শেষ হলে ‘end’ event কল করে, callback এর মধ্যে response send করা হয়েছে।
    readableStream.on("end", () => {
      res.end("End Buffering");
    });
  }
});

server.listen(5000, () => {
  console.log("Server Listening port on 5000");
});

/**
 * এখানে row node.js দিয়ে server তৈরী করা হয়েছে।
 * createReadStream() method দিয়ে  data streaming instance create করা হয়েছে।
 * .on('event', callback) method দিয়ে listen করা হয়ে
 */
