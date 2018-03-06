import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestParmsService } from '../../quiz/test-parms.service';
import { QuizParms } from '../../quiz-parms';

@Component({
  selector: 'app-quiz-builder',
  templateUrl: './quiz-builder.component.html',
  styleUrls: ['./quiz-builder.component.css']
})
export class QuizBuilderComponent implements OnInit {
  customParms: QuizParms;
  numberOfQuestions: number;

  constructor(public parms: TestParmsService, private router: Router) { }

  ngOnInit() {

  }

  build() {
    // assemble real parms and set TestParmsService and then show quiz in QuizComponent
    this.marshal();
    this.parms.setTestParms(this.parms.THERMALS_GROUND_QUIZ());
    this.router.navigateByUrl('/quiz');
  }

  private marshal() {
    // {
    // 	optionsToShow: 5,
    //  numberOfQuestions: 20,
    //  platforms: ['ground vehicle'],
    //  profiles: ['side', 'front', 'oblique'],
    //  distances: ['near'],
    //  optics: ['thermal'],
    //  sides: ['eastern', 'western'],
    //  randomizeQuestions: true
    // }

    this.customParms.distances = [];
    this.customParms.eras = [];
    this.customParms.numberOfQuestions = this.numberOfQuestions;
    this.customParms.optics = [];

    // this.customParms.originalValues = [];
    this.customParms.platforms = [];
    this.customParms.profiles = [];
    this.customParms.sides = [];

    this.customParms.randomizeQuestions = true;
    this.customParms.optionsToShow = 5;
  }
}
