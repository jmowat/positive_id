import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CustomEmailValidatorDirective } from '../custom-email-validator.directive';
import { RecaptchaComponent } from 'ng-recaptcha';

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
  captchaControl;

  @ViewChild(RecaptchaComponent) recaptcha: RecaptchaComponent;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // console.log('running init, recaptcha id', this.recaptcha.id);
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

      const url = `http://localhost:4300/sendmail`;
      // grecaptcha.getResponse(widget_id);

      this.http.post(url, message).subscribe(res => {
        // console.log('Data received by contact component:', res);
        this.statusMessage = 'Your message was sent. Thanks!';
      });
    } else {
      this.statusMessage = 'Please verify that you are not a bot, first.';
    }
    this.recaptcha.reset();
  }
}
