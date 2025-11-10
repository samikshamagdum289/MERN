

// Step 1: Import the 'events' module
const EventEmitter = require('events');

// Step 2: Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Step 3: Register (listen for) an event
eventEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}! Welcome to Node.js Events 🎉`);
});

// Step 4: Emit (trigger) the event
eventEmitter.emit('greet', 'Samiksha');
