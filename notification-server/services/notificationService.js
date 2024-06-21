const emailClient = require("../utils/emailClient");
const mobileClient = require("../utils/mobileClient");

async function sendNotification(user, amount, type) {
  const message = `Dear ${user.name}, your automated deposit of ${amount} failed due to insufficient funds. Please resolve the issue.`;

  if (type === "email") {
    await emailClient.sendEmail(
      user.email,
      "Failed Automated Deposit",
      message
    );
  } else if (type === "mobile") {
    await mobileClient.sendMobileNotification(user.mobileNumber, message);
  }
}

module.exports = {
  sendNotification,
};
