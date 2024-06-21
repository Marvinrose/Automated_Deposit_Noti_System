const axios = require("axios");
const { userServiceUrl } = require("../../config/config");

async function fetchUserInfo(userId) {
  try {
    const response = await axios.get(`${userServiceUrl}/users/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching user information");
  }
}

module.exports = {
  fetchUserInfo,
};
