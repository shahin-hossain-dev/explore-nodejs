const EventEmitter = require("node:events"); //build in events function

// create new event emitter instance
const myEmitter = new EventEmitter();

//create a listener
myEmitter.on("birthday", (argument) => {
  console.log(`Happy Birth Day to You ${argument}`);
});

// create another same event listener কিন্তু এটা আলাদা event listen করবে  এবং response করবে।
myEmitter.on("birthday", (argument, argument2) => {
  console.log(`${argument}, I will give you a ${argument2}`);
});

//event hit
myEmitter.emit("birthday", "Mrs. Jui", "Gift");

/**
 * এখানে node.js এর built-in event creator কে require করা হয়েছে। যেহেতু node.js হলো event driven architecture.
 * EventEmitter instance creator চিহ্নত করার জন্য PascalCase use করা হয়েছে।
 * myEmitter হলো একটি event instance, এই instance দিয়ে event listener create করা হয়েছে।
 * event listener create করতে হয় instanceName.on('eventName', callback(arg) => {})
 * event listener একটি callback function নেয় এবং event hit করার সময় argument পাঠালে সেটা callback function এর মধ্যে পাওয়া যায়।
 * event hit করলেই listener callback কে call করে দেয় এবং response generate করে।
 *
 * event hit করার জন্য instanceName.emit('eventName', 'parameter', 'parameter', '...')
 * event hit করার সময় event name দিয়ে hit করতে হয় এবং parameter পাঠানো যায়।
 *
 * এটাই node.js এর event driven architecture.
 */
