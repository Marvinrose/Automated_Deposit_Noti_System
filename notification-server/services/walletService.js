const axios = require("axios");
const { walletServiceUrl } = require("../config/config");

async function checkWalletBalance(userId) {
  try {
    const response = await axios.get(`${walletServiceUrl}/wallets/${userId}`);
    return response.data.balance;
  } catch (error) {
    throw new Error("Error fetching wallet balance");
  }
}

module.exports = {
  checkWalletBalance,
};
