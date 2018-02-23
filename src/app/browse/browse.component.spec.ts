import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { BrowseComponent } from './browse.component';
import { NameFilterPipe } from '../name-filter.pipe';
import { PaginationComponent } from '../pagination/pagination.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


describe('BrowseComponent', () => {
  let component: BrowseComponent;
  let fixture: ComponentFixture<BrowseComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseComponent, NameFilterPipe, PaginationComponent ],
      imports: [ NgbModule.forRoot() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseComponent);
    component = fixture.componentInstance;

    //de = fixture.debugElement.query(By.css(''));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
