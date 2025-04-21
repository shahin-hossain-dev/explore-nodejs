const fs = require("fs");

//Read file text Synchronous

// readFileSync(filepath, encoding option (utf-8))
//যদি শুধু filepath দেয়া হয় তাহলে buffer পাওয়া যায়, encoding বা readable করতে 'utf-8' option দিতে হবে।
const readText = fs.readFileSync("../text/read.txt", "utf-8");

// console.log(readText);

//Write file text synchronous

const writeText = fs.writeFileSync(
  "../text/write.txt",
  readText + "I add some text also"
);

/**
 * এখানে file গুলো synchronous way তে কাজ করতেছে।
 * যখন ‍ synchronous ভাবে কাজ করা হয় তখন thread block হয়ে যায়। তখন একটার পরে আরেকটা কাজ করে।
 * যেন thread block না হয় সেজন্য node.js asynchronous ভাবে কাজ করে সেক্ষেত্রে যখন ভারী কাজ আসে
 * তখন সেটা thread থেকে thread pool চলে যায় এবং thread pool সেটাকে operation করে।
 *
 */
