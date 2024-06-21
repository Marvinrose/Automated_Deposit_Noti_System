const express = require("express");
const bodyParser = require("body-parser");
const notificationController = require("./controllers/notificationController");

const app = express();
app.use(bodyParser.json());

app.post("/notify-failed-deposit", notificationController.handleFailedDeposit);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
