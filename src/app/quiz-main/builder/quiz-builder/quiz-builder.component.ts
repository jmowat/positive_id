import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestParmsService } from '../../quiz/test-parms.service';

@Component({
  selector: 'app-quiz-builder',
  templateUrl: './quiz-builder.component.html',
  styleUrls: ['./quiz-builder.component.css']
})
export class QuizBuilderComponent implements OnInit {

  constructor(public parms: TestParmsService, private router:Router) { }

  ngOnInit() {
    
  }


  build() {
  	// assemble real parms and set TestParmsService and then show quiz in QuizComponent
  	this.parms.setTestParms(this.parms.THERMALS_GROUND_QUIZ());
	this.router.navigateByUrl('/quiz');
  }
}
