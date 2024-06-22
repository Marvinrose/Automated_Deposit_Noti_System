// seeder.js
require("dotenv").config();
const mongoose = require("mongoose");
const Wallet = require("./models/wallet");

// Replace with your MongoDB connection URI
const DATABASE_URL = process.env.DATABASE_URL;

// Connect to MongoDB
mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");

    // Dummy wallet data
    const dummyWallets = [
      { userId: "1", balance: 100 },
      { userId: "2", balance: 150 },
      { userId: "3", balance: 75 },
      // Add more dummy wallets as needed
    ];

    // Insert dummy wallets into the database
    Wallet.insertMany(dummyWallets)
      .then(() => {
        console.log("Dummy wallets inserted successfully");
        mongoose.connection.close();
      })
      .catch((err) => {
        console.error("Error inserting wallets:", err);
        mongoose.connection.close();
      });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
