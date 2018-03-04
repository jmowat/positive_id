import { Component, OnInit } from '@angular/core';
import { QuizService }  from '../quiz/quiz.service';
import { QuizQuestion }  from '../quiz-question';
import { StateService }  from '../state/state.service';
import { Test }  from '../test';
import { QuizParms } from '../quiz-parms';
import { Router, ActivatedRoute } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
	//userSelection: string;
	buttonClasses: any;
	statusClasses: any;
	quizParms: QuizParms;
	key: string;
	selectedIndex: number;
	value: number;
	radioValues: {id: number, name:string}[] = [];

  	constructor(public service: StateService, private router:Router, private route:ActivatedRoute) {

  	}

	@HostListener('document:keypress', ['$event'])
  		handleKeyboardEvent(event: KeyboardEvent) {
    	this.key = event.key;
    	//console.log(this.key);
    	if(this.key == "Enter") {
    		//console.log("do enter stuff");
    		this.next();
    	} else if(+this.key > 0 && +this.key <= 5  ) {
    		//console.log("pressed ", this.key);
    		this.selectedIndex = +this.key;
    	}
  	}

	ngOnInit() {
		this.service.createNewTest(this.route.snapshot.data);
		this.setButtonClasses();
  		this.setStatusClasses();
	}

	getPossibleAnswers(): any[] {

		// Load this into a friendly radio button structure with an index for ID
		let possibleAnswers:string[] = this.service.getTest().getQuestion().getPossibleAnswers();
		for(let i = 1; i < possibleAnswers.length + 1; i++) {
			this.radioValues[i-1] = ({'id':i,'name':possibleAnswers[i-1]});
		}
		//return this.service.getTest().getQuestion().getPossibleAnswers();
		return this.radioValues;
	}

	getCurrentQuestionNumber():number {
		// zero offset, so plus 1 for human readable
		return this.service.getTest().getCurrentQuestionIndex() + 1;
	}

	getTotalNumberOfQuestions():number {
		return this.service.getTest().getNumberOfQuestions();
	}

	next() {
		// fetch the text value of the ID value that is selected from the radio button
		//this.service.acceptAnswer(this.userSelection);
		let answerValue = "";
		if(this.selectedIndex) {
			answerValue = this.radioValues[this.selectedIndex - 1].name;
		}
		this.service.acceptAnswer(answerValue);
		this.setButtonClasses();
		this.setStatusClasses();
		// clear out previous user selection
		//this.userSelection = "";
		this.selectedIndex = undefined;
	};

	setButtonClasses() {
		this.buttonClasses =  {
			'btn': 'btn',
			'btn-lg': 'btn-lg',
			'btn-primary': 'btn-primary',
			'btn-success': this.service.getStatus() == "success",
			'btn-danger': this.service.getStatus() == "danger"
		  };
	}

	setStatusClasses() {
		this.statusClasses =  {
			'alert-success': this.service.getStatus() == "success",
			'alert-danger': this.service.getStatus() == "danger"
		  };
	}

	 onSelectionChange(entry) {
        console.log("entry",entry);
        this.selectedIndex = entry.id;
        console.log("selectedIndex",this.selectedIndex);
    }
}
