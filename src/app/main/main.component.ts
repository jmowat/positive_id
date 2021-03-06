import { Component, OnInit } from '@angular/core';
import { HeaderBannerComponent } from '../layout/header-banner/header-banner.component';
import { QuizParms } from '../quiz-main/game/quiz-parms';
import { GameParmsService } from '../quiz-main/game/game-parms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public testParmsService: GameParmsService, private router: Router) {
  }

  ngOnInit() {
  }

  generateTest(parms: QuizParms) {
    this.testParmsService.setTestParms(parms);
    this.router.navigateByUrl('/quiz');
  }

  generateQuiz() {
    this.router.navigateByUrl('quiz-builder');
  }

  generateDrill() {
    this.router.navigateByUrl('drill-builder');
  }

}
