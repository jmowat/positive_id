import { json, urlencoded } from "body-parser";

import * as compression from "compression";
import * as cors from "cors";
import * as express from "express";
import * as helmet from "helmet";
import * as nodemailer from "nodemailer";
import * as path from "path";

import { mailhost, mailport } from "./config";

const app: express.Application = express();

app.disable("x-powered-by");
app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true }));
// app.use(cors());
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
  // console.log("/sendmail post without route");
  // console.log("data", req.body);
  // console.log("config:", smtpConfig);
  const transporter = nodemailer.createTransport(smtpConfig);
  const data = req.body;
  data.to = "jmowat@digitalpraxis.com";
  // verify connection configuration
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  transporter.sendMail(data, (error, info) => {
    // console.log("real smtp attempt");
    if (error) {
      return console.log(error);
    }
    // console.log("Message sent: " + info.response);
    // console.log("Data:" + data.name);
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
