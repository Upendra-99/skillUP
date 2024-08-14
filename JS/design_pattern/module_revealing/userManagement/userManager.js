const users = []; // Private array to store user data

// Function to add a user (private)
function addUser(user) {
  users.push(user);
}

// Function to get all users (private)
function getAllUsers() {
  return users;
}

// Public API
const userManager = (function () {
  return {
    // Public method to add a user
    addUser: function (name, age) {
      const user = { name, age };
      addUser(user);
    },

    // Public method to get all users
    getUsers: function () {
      return getAllUsers();
    },

    // Public method to find a user by name
    findUserByName: function (name) {
      return getAllUsers().find(user => user.name === name);
    }
  };
})();

module.exports = userManager;
