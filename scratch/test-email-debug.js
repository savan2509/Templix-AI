const nodemailer = require("nodemailer");

async function main() {
  console.log("Configuring transporter...");
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // TLS
    auth: {
      user: "psavan721@gmail.com",
      pass: "snro mpbh uhjt zpbc",
    },
    debug: true,
    logger: true
  });

  try {
    console.log("Sending test email...");
    const info = await transporter.sendMail({
      from: '"Templix AI Test" <psavan721@gmail.com>',
      to: "psavan721@gmail.com",
      subject: "Templix AI SMTP Magic Link Test ✔",
      text: "If you receive this, your Google App Password and SMTP connection are configured correctly!",
    });
    console.log("Message sent successfully: %s", info.messageId);
  } catch (error) {
    console.error("SMTP error details:", error);
  }
}

main();
