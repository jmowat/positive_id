import { json, urlencoded } from 'body-parser';

import * as compression from 'compression';
import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';
import * as nodemailer from 'nodemailer';
import * as path from 'path';
import * as request from 'request';

import { mailhost, mailport, sendEmailTo, siteSecret, siteVerifyUrl } from './config';

const app: express.Application = express();

app.disable('x-powered-by');
app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

if (app.get('env') === 'production') {
  // in production mode run application from dist folder
  console.log('hosting app in production mode from target ' + __dirname + '/../client');
  app.use(express.static(path.join(__dirname, '/../client')));
}

const smtpConfig = {
  host: process.env.mailhost || mailhost,
  port: process.env.mailport || mailport,
  secure: false, // upgrade later with STARTTLS
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false
  }
};

app.post('/sendmail', (req, res) => {
  // console.log('request body from post', req.body);
  const transporter = nodemailer.createTransport(smtpConfig);
  const data = req.body;

  const emailMessage = {
    to: process.env.sendEmailTo || process.env.sendEmailTo,
    from: data.from,
    subject: data.subject,
    text: data.text,
    html: data.html
  };

  const execute = async (userSecret, userResponse, message) => {
    const callback = async (parm) => {
      try {
        if (parm) {
          await verifyConnection();
          await deliver(message);
          res.end('sent');
        } else {
          // console.log('could not verify if user was a bot');
          res.end('Could not verify if you are a bot or not.');
        }
      } catch (err) {
        // console.log(err);
        res.end(err.message);
      }
    };

    await verifyUser(userSecret, userResponse, callback);
  };

  // this is asynchronous
  function verifyUser(userSecret, userResponse, callback) {
    // What about the errors? How do you handle these?
    function handleRecaptchaResponse(error, response, body) {
      if (!error && response.statusCode === 200) {
        const jsonBody = JSON.parse(body);
        console.log('jsonBody result from recaptcha check', jsonBody);
        console.log('siteSecret', userSecret);
        console.log('response', userResponse);
        if (jsonBody.success === true) {
          console.log('This is not a bot!');
          callback(true);
        } else {
          console.log('This may be a bot!');
          callback(false);
          // throw new Error('This may be a bot!');
        }
      }
    }

    request.post(
      {
        url: siteVerifyUrl,
        form: { secret: userSecret, response: userResponse }
      }, handleRecaptchaResponse);
      // after handle response, return whether is was successful or not
  }

  // this is asynchronous
  function verifyConnection() {
    transporter.verify((error, success) => {
      if (error) {
        console.log('Could not verify connection to mail server');
        throw(error);
      }
    });
  }

  // this is asynchronous
  function deliver(message) {
    transporter.sendMail(message, (error, info) => {
      if (error) {
        // maybe throw the error?
        console.log('could not send the message', error);
        throw error;
      }
    });
  }
  execute(process.env.siteSecret || siteSecret, data.response, emailMessage);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});

// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next) => {
  const err = new Error('Not Found');
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
