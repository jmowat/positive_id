import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseFormComponent } from './browse-form.component';

describe('BrowseFormComponent', () => {
  let component: BrowseFormComponent;
  let fixture: ComponentFixture<BrowseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
