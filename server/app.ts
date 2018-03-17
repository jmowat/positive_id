import { json, urlencoded } from "body-parser";

import * as compression from "compression";
import * as cors from "cors";
import * as express from "express";
import * as helmet from "helmet";
import * as nodemailer from "nodemailer";
import * as path from "path";
import * as request from "request";

import { mailhost, mailport, sendEmailTo, siteSecret, siteVerifyUrl } from "./config";

const app: express.Application = express();

app.disable("x-powered-by");
app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

if (app.get("env") === "production") {
  // in production mode run application from dist folder
  console.log("hosting app in production mode from target " + __dirname + "/../client");
  app.use(express.static(path.join(__dirname, "/../client")));
}

const smtpConfig = {
  host: mailhost,
  port: mailport,
  secure: false, // upgrade later with STARTTLS
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false
  }
};

app.post("/sendmail", (req, res) => {
  // console.log("request body from post", req.body);
  const transporter = nodemailer.createTransport(smtpConfig);
  const data = req.body;

  const emailMessage = {
    to: sendEmailTo,
    from: data.from,
    subject: data.subject,
    text: data.text,
    html: data.html
  };

  request.post(
    {
      url: siteVerifyUrl,
      form: { secret: siteSecret, response: data.response }
    },
    function handleRecaptchaResponse(error, response, body) {
      if (!error && response.statusCode == 200) {
        let jsonBody = JSON.parse(body);
        if (jsonBody.success === true) {
          console.log("This is not a bot!");
        } else {
          console.log("This may be a bot!");
        }
      }
    }
  );

  // verify connection configuration
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    }
  });

  transporter.sendMail(emailMessage, (error, info) => {
    if (error) {
      return console.log(error);
    }
  });

  res.end();
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});

// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next) => {
  const err = new Error("Not Found");
  next(err);
});

// production error handler
// no stacktrace leaked to user
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {

  res.status(err.status || 500);
  res.json({
    error: {},
    message: err.message,
  });
});

export { app };
