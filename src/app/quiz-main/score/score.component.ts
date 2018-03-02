import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz/quiz.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor(public service: QuizService) { }

  ngOnInit() {
  }

}
