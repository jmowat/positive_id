import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-max-questions-control',
  templateUrl: './max-questions.component.html',
  styleUrls: ['./max-questions.component.css']
})
export class MaxQuestionsComponent implements OnInit {
  maxQuestions: number;

  constructor() { }

  ngOnInit() {
  }

}
