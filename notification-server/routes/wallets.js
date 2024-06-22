// routes/wallets.js
const express = require("express");
const router = express.Router();
const Wallet = require("../models/wallet");

// Get wallet info by userId
router.get("/wallets/:userId", async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ userId: req.params.userId });
    if (!wallet) {
      return res.status(404).json({ message: "Wallet not found" });
    }
    res.json(wallet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
