import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CustomEmailValidatorDirective } from '../custom-email-validator.directive';

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

public recaptchaCallback = (any) => {
    console.log('callback called');
}

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  // recaptchaCallback() {
  //   console.log('callback called');
  // }

  onSubmit() {
    // console.log('Form Submitted!');
    const message = {
      from: this.email,
      subject: 'Positive ID - contact from ' + this.name,
      text: this.message,
      html: '<p>' + this.message + '</p>'
    };
    const url = `http://localhost:4300/sendmail`;
    // grecaptcha.getResponse(widget_id);

    this.http.post(url, message).subscribe(res => {
      // console.log('Data received by contact component:', res);
      this.statusMessage = 'Your message was sent. Thanks!';
    });
  }
}
