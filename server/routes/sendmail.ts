import { NextFunction, Request, Response, Router } from "express";
import * as nodemailer from "nodemailer";
import { mailhost, mailport, password, username } from "../config";

const sendmailRouter: Router = Router();
// const smtpConfig = {
//   host: mailhost,
//   port: mailport,
//   secure: false, // upgrade later with STARTTLS
//   auth: {
//     user: username,
//     pass: password
//   }
// };

sendmailRouter.get("/sendmail", (request: Request, response: Response, next: NextFunction) => {
  console.log("received get on sendmail route");
  response.send('get on sendmail in route');
});

sendmailRouter.post("/sendmail", (request: Request, response: Response, next: NextFunction) => {
  console.log('sendmail called with post', request);
  // const transporter = nodemailer.createTransport(smtpConfig);
  // const data = request.body;
  // data.to = "to: jmowat@digitalpraxis.com";
  // // verify connection configuration
  // transporter.verify((error, success) => {
  //   if (error) {
  //     console.log(error);
  //     next(error);
  //   } else {
  //     console.log('Server is ready to take our messages');
  //   }
  // });
  //
  // transporter.sendMail(data, (error, info) => {
  //   if (error) {
  //     return console.log(error);
  //   }
  //   console.log('Message sent: ' + info.response);
  //   console.log('Data:' + data.name);
  // });
});

export { sendmailRouter };
