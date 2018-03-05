import { Component, OnInit } from '@angular/core';
import { HeaderBannerComponent } from '../header-banner/header-banner.component';
import { QuizParms } from '../quiz-main/quiz-parms';
import { TestParmsService } from '../quiz-main/quiz/test-parms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public testParmsService: TestParmsService, private router:Router) {
    console.log('Is testParms injected?', testParmsService);
  }

  ngOnInit() {
  }

  generateTest(parms: QuizParms) {
    console.log('Route to test with', parms);
    this.testParmsService.setTestParms(parms);
    this.router.navigateByUrl('/quiz');
  }

}
