import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz/quiz.service';
import { GameStateService } from '../state/game-state.service';
import { QuizParms } from '../game/quiz-parms';
import { QuizComponent } from '../quiz/quiz.component';
import { GameParmsService } from '../game/game-parms.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class RedoQuizComponent extends QuizComponent implements OnInit {
  constructor(service: GameStateService, parms: GameParmsService) {
    super(service, parms);
  }

  ngOnInit() {
    if (this.service.getTest()) {
      this.service.getTest().reset();
      this.service.reset();
    }
    this.setButtonClasses();
    this.setStatusClasses();
  }
}
