import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CustomEmailValidatorDirective } from '../custom-email-validator.directive';
import { RecaptchaComponent } from 'ng-recaptcha';
import * as myGlobals from '../globals';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  statusMessage: string;
  recaptchaResponse: string;

  @ViewChild(RecaptchaComponent) recaptcha: RecaptchaComponent;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.recaptcha.reset();
  }

  resolved(captchaResponse: string) {
    // console.log('captchaResponse', captchaResponse);
    this.recaptchaResponse = captchaResponse;
  }

  onSubmit() {
    if (this.recaptchaResponse) {
      const message = {
        from: this.email,
        subject: 'Positive ID - contact from ' + this.name,
        text: this.message,
        html: '<p>' + this.message + '</p>',
        response: this.recaptchaResponse
      };

      this.http.post(myGlobals.sendmailUrl, message, {responseType: 'text'}).subscribe(res => {
        console.log('Data received by contact component:', (res));
        if (res === 'sent') {
          this.statusMessage = 'Your message was sent. Thanks!';
        } else {
          this.statusMessage = 'Your message could not be sent. Reason:' + res;
        }
      });
    } else {
      this.statusMessage = 'Please verify that you are not a bot, first.';
    }
    this.recaptcha.reset();
  }
}
