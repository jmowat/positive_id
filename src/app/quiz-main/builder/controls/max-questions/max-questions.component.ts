import { Component, OnInit, forwardRef  } from '@angular/core';
import { CustomMinDirective } from '../../../../custom-min-validator.directive';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-max-questions-control',
  templateUrl: './max-questions.component.html',
  styleUrls: ['./max-questions.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MaxQuestionsComponent),
      multi: true
    }
  ]
})
export class MaxQuestionsComponent implements OnInit, ControlValueAccessor {
  maxQuestions: number;

  constructor() { }

  ngOnInit() {
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.maxQuestions = value;
    }
  }

  propagateChange = (_: any) => { };

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() { }
}
