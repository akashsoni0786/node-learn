"use strict";
const nodemailer = require("nodemailer");
async function main() {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    // host: "smtp.ethereal.email",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user: "akashsoni.cedcoss@gmail.com", 
      pass: "wqjdiebrafxpgnte",
    },
  });
  let info = await transporter.sendMail({
    from: '"Akash Soni 👻" <akashsoni.cedcoss@gmail.com>',
    to: "usachin017@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  });
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);
