const nodemailer = require("nodemailer");
const { emailService } = require("../../config/config");

const transporter = nodemailer.createTransport(emailService);

async function sendEmail(to, subject, text) {
  try {
    await transporter.sendMail({
      from: "no-reply@yourdomain.com",
      to,
      subject,
      text,
    });
  } catch (error) {
    throw new Error("Error sending email");
  }
}

module.exports = {
  sendEmail,
};
