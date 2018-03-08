import { Component, OnInit } from '@angular/core';
import { HeaderBannerComponent } from '../header-banner/header-banner.component';
import { QuizParms } from '../quiz-main/quiz-parms';
import { GameParmsService } from '../quiz-main/quiz/game-parms.service';
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

}
