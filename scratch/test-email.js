const nodemailer = require("nodemailer");

async function main() {
  console.log("Configuring transporter with savanpipaliya478@gmail.com ...");
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "savanpipaliya478@gmail.com",
      pass: "snrompbhuhjtzpbc",
    },
  });

  try {
    console.log("Verifying SMTP connection...");
    await transporter.verify();
    console.log("✅ SMTP connection verified!");

    console.log("Sending test magic link email...");
    const info = await transporter.sendMail({
      from: '"Templix AI" <savanpipaliya478@gmail.com>',
      to: "savanpipaliya478@gmail.com",
      subject: "✅ Templix AI - Magic Link Sign In Test",
      html: `<div style="font-family: sans-serif; padding: 24px; max-width: 600px; margin: 0 auto; border: 1px solid #e4e4e7; border-radius: 16px;">
        <h2 style="font-weight: bold; font-size: 20px; color: #2563eb;">Sign in to Templix AI</h2>
        <p style="font-size: 14px; color: #52525b;">If you received this email, SMTP is configured correctly and magic links will work!</p>
        <a href="http://localhost:3000" style="display: inline-block; padding: 12px 24px; border-radius: 12px; background-color: #2563eb; color: #ffffff; font-weight: 600; text-decoration: none; font-size: 14px; margin: 16px 0;">Go to Dashboard</a>
      </div>`,
    });

    console.log("✅ Email sent! Message ID:", info.messageId);
    console.log("📧 Check your inbox at savanpipaliya478@gmail.com");
  } catch (error) {
    console.error("❌ SMTP error:", error.message);
  }
}

main();
