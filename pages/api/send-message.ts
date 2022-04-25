import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "coinnations21@gmail.com",
    pass: "Nir123456789",
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const message = {
    from: req.body.email,
    to: "coinnations21@gmail.com",
    subject: `Contact from ${req.body.firstName}`,
    html: `
        <h3>Client Name: ${req.body.firstName} ${req.body.lastName}</h3>
        <h3>Client Email: ${req.body.email}</h3>
        <h5>Company: ${req.body.company}</h5>
        <p>${req.body.message}</p>
      `,
  };
  return new Promise((resolve, reject) => {
    transporter.sendMail(message, function (err, info) {
      if (err) {
        console.log(err);
        res.send("error" + JSON.stringify(err));
      } else {
        console.log("mail sent");
        res.send("success");
      }
    });
  });
}
