import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { PaginationComponent } from './pagination.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { fakeAsync } from '@angular/core/testing';
import { tick } from '@angular/core/testing';
import { flush } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';

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

  it('should emit a page change of 2 when user clicks page 2',fakeAsync(()=> {
    for(let i = 0; i < 31; i++) {
      component.vehicles.push(i);
    }
    fixture.detectChanges();
    des = fixture.debugElement.queryAll(By.css('.page-link'));
    // elements 0 and 1 are << and <, element 2 is page 1 (current), and element 3 is page 2
    // assumes that the queryAll elements are returned in order as presented on HTML
    de = des[3];
    de.triggerEventHandler('click',null);
    flush();
    expect(component.page).toEqual(2);
  }));
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