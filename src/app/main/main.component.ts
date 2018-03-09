import { Component, OnInit } from '@angular/core';
import { HeaderBannerComponent } from '../header-banner/header-banner.component';
import { QuizParms } from '../quiz-main/game/quiz-parms';
import { GameParmsService } from '../quiz-main/game/game-parms.service';
import { Router } from '@angular/router';
import { GameBuilderStateService } from '../quiz-main/wizard/state/game-builder-state.service';
import { QuizBuilderContext } from '../quiz-main/wizard/state/quiz-builder-context';
import { DrillBuilderContext } from '../quiz-main/wizard/state/drill-builder-context';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public testParmsService: GameParmsService, private router: Router,
    private gameBuilderStateService: GameBuilderStateService) {
  }

  ngOnInit() {
  }

  generateTest(parms: QuizParms) {
    this.testParmsService.setTestParms(parms);
    this.router.navigateByUrl('/quiz');
  }

  generateQuiz() {
    this.gameBuilderStateService.setContext(new QuizBuilderContext());
    this.router.navigateByUrl('quiz-builder');
  }

  generateDrill() {
    this.gameBuilderStateService.setContext(new DrillBuilderContext());
    this.router.navigateByUrl('drill-builder');
  }

}
