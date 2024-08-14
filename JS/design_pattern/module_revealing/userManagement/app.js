const userManager = require('./userManager');

// Add users
userManager.addUser('Alice', 30);
userManager.addUser('Bob', 25);

// Get all users
console.log('All Users:', userManager.getUsers());

// Find a user by name
const alice = userManager.findUserByName('Alice');

console.log('Found User:', alice);
