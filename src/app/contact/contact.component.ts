import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CustomEmailValidatorDirective } from '../custom-email-validator.directive';
import { RecaptchaComponent } from 'ng-recaptcha';
import { environment } from '../../environments/environment';
import { NgForm } from '@angular/forms';

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
    this.recaptchaResponse = captchaResponse;
  }

  onSubmit(myForm: NgForm) {
    if (this.recaptchaResponse) {
      const message = {
        from: this.email,
        subject: 'Positive ID - contact from ' + this.name,
        text: this.message,
        html: '<p>' + this.message + '</p>',
        response: this.recaptchaResponse
      };
      console.log('sendmail url =', environment.sendmailUrl);
      this.http.post(environment.sendmailUrl, message, {responseType: 'text'}).subscribe(res => {
        if (res === 'sent') {
          this.statusMessage = 'Your message was sent. Thanks!';
          myForm.reset();
        } else {
          this.statusMessage = 'Your message could not be sent. Reason: ' + res;
        }
      });
    } else {
      this.statusMessage = 'Please verify that you are not a bot, first.';
    }
    this.recaptcha.reset();
  }
}
