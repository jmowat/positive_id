import { NextFunction, Request, Response, Router } from "express";
import * as nodemailer from "nodemailer";
import { mailhost, mailport, password, username } from "../config";

const sendmailRouter: Router = Router();
const smtpConfig = {
    host: "mail.digitalpraxis.com",
    port: mailport,
    secure: false, // upgrade later with STARTTLS
    auth: {
        user: username,
        pass: password
    }
};
const transporter = nodemailer.createTransport(smtpConfig);

sendmailRouter.post("/sendmail", (request: Request, response: Response, next: NextFunction) => {
  console.log('sendmail called with post', request);

  // verify connection configuration
  transporter.verify((error, success) => {
     if (error) {
          console.log(error);
     } else {
          console.log('Server is ready to take our messages');
     }
  });
});

export { sendmailRouter };
