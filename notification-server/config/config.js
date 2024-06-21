require("dotenv").config();

module.exports = {
  userServiceUrl: process.env.USER_SERVICE_URL,
  walletServiceUrl: process.env.WALLET_SERVICE_URL,
  emailService: process.env.EMAIL_SERVICE,
};
