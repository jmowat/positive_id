import { Component, OnInit, EventEmitter } from '@angular/core';
import { QuizService } from '../quiz/quiz.service';
import { QuizQuestion } from '../quiz-question';
import { StateService } from '../state/state.service';
import { Test } from '../test';
import { QuizParms } from '../quiz-parms';
import { HostListener } from '@angular/core';
import { TestParmsService } from './test-parms.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  buttonClasses: any;
  statusClasses: any;
  selectedIndex: number;
  radioValues: { id: number, name: string }[] = [];
  public myFocusTriggeringEventEmitter = new EventEmitter<boolean>();

  constructor(public service: StateService, public parms: TestParmsService) { }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key;
    if (key === 'Enter') {
      this.next();
    } else if (+key > 0 && +key <= 5) {
      this.selectedIndex = +key;
      this.forceFocus();
    }
  }

  ngOnInit() {
    // console.log('quizComponent fetch parms from parm service', this.parms.getParms());
    this.service.createNewTest(this.parms.getParms());
    this.setButtonClasses();
    this.setStatusClasses();
  }

  getPossibleAnswers(): any[] {
    // Load this into a friendly radio button structure with an index for ID
    const possibleAnswers: string[] =
      this.service.getTest().getQuestion().getPossibleAnswers();
    for (let i = 1; i < possibleAnswers.length + 1; i++) {
      this.radioValues[i - 1] = ({ 'id': i, 'name': possibleAnswers[i - 1] });
    }
    // return this.service.getTest().getQuestion().getPossibleAnswers();
    return this.radioValues;
  }

  getCurrentQuestionNumber(): number {
    // zero offset, so plus 1 for human readable
    return this.service.getTest().getCurrentQuestionIndex() + 1;
  }

  getTotalNumberOfQuestions(): number {
    return this.service.getTest().getNumberOfQuestions();
  }

  next() {
    // this.service.acceptAnswer(this.userSelection);
    let answerValue;
    if (this.selectedIndex) {
      answerValue = this.radioValues[this.selectedIndex - 1].name;
    }
    this.service.acceptAnswer(answerValue);
    this.setButtonClasses();
    this.setStatusClasses();
    // clear out previous user selection
    this.selectedIndex = undefined;
  }

  setButtonClasses() {
    this.buttonClasses = {
      'btn': 'btn',
      'btn-lg': 'btn-lg',
      'btn-primary': 'btn-primary',
      'btn-success': this.service.getStatus() === 'success',
      'btn-danger': this.service.getStatus() === 'danger'
    };
  }

  setStatusClasses() {
    this.statusClasses = {
      'alert-success': this.service.getStatus() === 'success',
      'alert-danger': this.service.getStatus() === 'danger'
    };
  }

  onSelectionChange(entry) {
    this.selectedIndex = entry.id;
  }

  forceFocus() {
    this.myFocusTriggeringEventEmitter.emit(true);
  }
}
