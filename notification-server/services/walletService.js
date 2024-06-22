const axios = require("axios");
const { walletServiceUrl } = require("../config/config");

async function checkWalletBalance(userId) {
  try {
    console.log(
      `Wallet service URL: ${walletServiceUrl}/api/wallets/${userId}`
    );

    const response = await axios.get(
      `${walletServiceUrl}/api/wallets/${userId}`
    );
    console.log("Wallet service response:", response.data);
    console.log("Extracted balance:", response.data.balance);
    // Assuming the wallet service response has a 'balance' property
    return response.data.balance;
  } catch (error) {
    console.error("Error in axios request:", error);
    throw new Error("Error fetching wallet balance");
  }
}

module.exports = {
  checkWalletBalance,
};
