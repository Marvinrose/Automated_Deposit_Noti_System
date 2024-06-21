const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const notificationController = require("./controllers/notificationController");

app.use(cors());
const app = express();
app.use(bodyParser.json());

app.post("/notify-failed-deposit", notificationController.handleFailedDeposit);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
