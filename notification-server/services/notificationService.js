const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_SERVICE,
  },
});

async function sendNotification(user, amount, notificationType) {
  console.log(
    `Sending ${notificationType} notification to ${user.email || user.phone}`
  );
  if (notificationType === "email") {
    if (!user.email) {
      throw new Error("User email is not defined");
    }
    await sendEmailNotification(user.email, amount);
  }
  // else if (notificationType === "mobile") {
  //   await sendSMSNotification(user.phone, amount);
  // }
}

async function sendEmailNotification(email, amount) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Failed Deposit Notification",
    text: `Your deposit of $${amount} has failed due to insufficient funds.

    For further assistance, please visit our help page: https://www.help.com`,
  };

  await transporter.sendMail(mailOptions);
}
// console.log(email, "email");
// async function sendSMSNotification(phone, amount) {
//   await twilioClient.messages.create({
//     body: `Your deposit of $${amount} has failed due to insufficient funds.`,
//     from: process.env.TWILIO_PHONE_NUMBER,
//     to: phone,
//   });
// }

module.exports = {
  sendNotification,
};
