/**
 * ***********************************
 * local modules created by developer
 * ***********************************
 */
//common js moduler system e require use করে function কে import করতে হয়।
const { add, name } = require("./local-1.js");

// এখানে name alias এর মাধ্যমে same name এর variable কে same file declare করা গেছে।
const { add: add2, name: name2 } = require("./local-2.js");

const result1 = add(5, 6);
const result2 = add(1, 2, 3);

// console.log(result);
// console.log(name2);

/**
 * ***********************************
 * Build-in-module created by node.js
 * ***********************************
 */

const path = require("path");

const dirname = path.dirname(
  "D:/Programming Hero/.Level2/explore-nodejs/index.js"
);

const pathParse = path.parse(
  "D:/Programming Hero/.Level2/explore-nodejs/index.js"
);

const pathJoin = path.join(
  "D:/Programming Hero/.Level2/explore-nodejs/",
  "local-1.js"
);

console.log(pathJoin);
