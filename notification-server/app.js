const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const notificationController = require("./controllers/notificationController");

const app = express();
app.use(cors());

app.use(bodyParser.json());

const userRoutes = require("./routes/users");
const walletRoutes = require("./routes/wallets");

app.use("/api", userRoutes);
app.use("/api/wallets", walletRoutes);

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.post("/notify-failed-deposit", notificationController.handleFailedDeposit);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
