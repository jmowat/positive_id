import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxQuestionsComponent } from './max-questions.component';

describe('MaxQuestionsComponent', () => {
  let component: MaxQuestionsComponent;
  let fixture: ComponentFixture<MaxQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
