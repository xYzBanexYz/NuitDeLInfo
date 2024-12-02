const User = require('../models/User');

const resolvers = {
  Query: {
    users: async () => {
      try {
        return await User.getUsers();
      } catch (err) {
        console.error(err);
      }
    },
  },
};

module.exports = { resolvers };
