// models/wallet.js
const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
  userId: String,
  balance: Number,
});

module.exports = mongoose.model("Wallet", walletSchema);
