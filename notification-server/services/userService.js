const User = require("../models/user");

async function fetchUserInfo(userId) {
  try {
    const user = await User.findOne({ id: userId });
    return user; // Ensure `user` object has `email` property
  } catch (error) {
    throw new Error(`Error fetching user information: ${error.message}`);
  }
}

module.exports = {
  fetchUserInfo,
};
