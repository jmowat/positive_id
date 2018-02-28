import { Component, OnInit } from '@angular/core';
import { QuizService }  from '../quiz.service';
import { Test }  from '../test';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [  ]
})
export class QuizComponent implements OnInit {
	test: Test;
  	constructor(public quizService: QuizService) { }

	ngOnInit() {
		this.test = this.quizService.getTest();
	}

}
