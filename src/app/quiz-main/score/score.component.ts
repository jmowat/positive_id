import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor(public service: QuizService, private router: Router) { }

  ngOnInit() {
    if (!this.service.getTest() || !this.service.getTest().onLastQuestion()) {
      this.router.navigateByUrl('/main');
    }
  }

}
