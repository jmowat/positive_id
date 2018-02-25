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
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let de, paginationEl, pageLinkEl: DebugElement;

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponent, TestHostComponent ], // declare both
      imports: [ NgbModule.forRoot() ],
    }).compileComponents();
  }));

  beforeEach(() => {
    // create TestHostComponent instead of DashboardHeroComponent
    fixture  = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges(); // trigger initial data binding
  });

  it('should create', () => {
    expect(testHost).toBeTruthy();
  });

  it('should have 4 page-items by default', () => {
    expect(fixture.debugElement.query(By.css('.pagination')).children.length).toEqual(4);
  });

  it('should show 1 page with collectionSize of 5',()=>{
    testHost.vehicles = ["a","b","c","d","e"];
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.pagination')).children.length).toEqual(5);
    //let children = fixture.debugElement.query(By.css('.pagination')).children;
    //let text = children.map((x)=>x.query(By.css('li')).nativeElement);
  });

  it('should show 1 page with collectionSize of 6',() => {
    testHost.vehicles = ["a","b","c","d","e","f"];
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.pagination')).children.length).toEqual(5);
  });

  it('should show 2 pages with collectionSize of 7',() => {
    testHost.vehicles = ["a","b","c","d","e","f","g"];
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.pagination')).children.length).toEqual(6);
  });

  xit('should show 5 pages with collectionSize of 30');
  xit('should show 6 pages with collectionSize of 31');
  xit('should start on page 1 at init');
  xit('should emit a page change of 2 when user clicks page 2');


  // it('should display hero name', () => {
  //   const expectedPipedName = testHost.hero.name.toUpperCase();
  //   expect(heroEl.nativeElement.textContent).toContain(expectedPipedName);
  // });

  // it('should raise selected event when clicked', () => {
  //   click(heroEl);
  //   // selected hero should be the same data bound hero
  //   expect(testHost.selectedHero).toBe(testHost.hero);
  // });
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