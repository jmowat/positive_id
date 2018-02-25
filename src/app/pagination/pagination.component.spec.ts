import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { PaginationComponent } from './pagination.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { By }           from '@angular/platform-browser';

// describe('PaginationComponent', () => {
//   let component: PaginationComponent;
//   let fixture: ComponentFixture<PaginationComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ PaginationComponent, TestHostComponent ],
//       imports: [ NgbModule.forRoot() ],
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(TestHostComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('PaginationComponent when inside a test host', () => {
  //let testHost: TestHostComponent;
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let de: DebugElement;
  let des: DebugElement[];

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponent, TestHostComponent ], // declare both
      imports: [ NgbModule.forRoot() ],
    }).compileComponents();
  }));

  beforeEach(() => {
    // create TestHostComponent instead of DashboardHeroComponent
    fixture  = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // trigger initial data binding
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 page-items by default', () => {
    expect(fixture.debugElement.query(By.css('.pagination')).children.length).toEqual(4);
  });

  it('should show 5 pages with collectionSize of 30', () => {
    for(let i = 0; i < 30; i++) {
      component.vehicles.push(i);
    }
    expect(component.vehicles.length).toEqual(30);
    fixture.detectChanges();
    des = fixture.debugElement.queryAll(By.css('.page-link'));

    let pageNumVals = [];
    for(let child of des) {
      pageNumVals.push(child.nativeElement.textContent);
    }
    expect(pageNumVals).toMatch('1');
    expect(pageNumVals).toMatch('5');
    expect(pageNumVals).not.toMatch('6');
  });

  it('should show 6 pages with collectionSize of 31',() => {

    for(let i = 0; i < 31; i++) {
      component.vehicles.push(i);
    }
    expect(component.vehicles.length).toEqual(31);
    fixture.detectChanges();
    des = fixture.debugElement.queryAll(By.css('.page-link'));

    let pageNumVals = [];
    for(let child of des) {
      pageNumVals.push(child.nativeElement.textContent);
    }
    expect(pageNumVals).toMatch('6');
  });

  xit('should emit a page change of 2 when user clicks page 2');
});

////// Test Host Component //////
import { Component } from '@angular/core';

@Component({
  template: `
    <app-pagination [collectionSize]="vehicles.length" [page]="page" (pageChanged)="page=$event"></app-pagination>`
})
class TestHostComponent {
  page = 1;
  vehicles = [];
}