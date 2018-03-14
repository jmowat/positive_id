import { Component, OnInit } from '@angular/core';
import { HeaderNarrowComponent } from '../header-narrow/header-narrow.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Form Submitted!');
    const message = {
      from: this.email,
      subject: 'Positive ID - contact from ' + this.name,
      text: this.message,
      html: '<p>' + this.message + '</p>'
    };
    const url = `http://localhost:4300/sendmail`;
    this.http.post(url, message).subscribe(res => {
      console.log('Data received by contact component:', res);
    });
  }
}
