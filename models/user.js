// user.js
// Example user data
const users = [
    {
      id: 1,
      username: "user1",
      password: "password1",
    },
    {
      id: 2,
      username: "user2",
      password: "password2",
    },
    // Add more user data here
  ];
  
  function findUserByUsername(username) {
    return users.find((user) => user.username === username);
  }
  
  module.exports = {
    findUserByUsername,
  };