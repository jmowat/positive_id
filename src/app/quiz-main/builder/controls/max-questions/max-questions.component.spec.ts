import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { MaxQuestionsComponent } from './max-questions.component';

describe('MaxQuestionsComponent', () => {
  let component: MaxQuestionsComponent;
  let fixture: ComponentFixture<MaxQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxQuestionsComponent ],
      imports: [ FormsModule ]
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
