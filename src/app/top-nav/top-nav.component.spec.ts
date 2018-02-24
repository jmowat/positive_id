import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { TopNavComponent } from './top-nav.component';

describe('TopNavComponent', () => {
  let component: TopNavComponent;
  let fixture: ComponentFixture<TopNavComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('.navbar-brand'));
    el = de.nativeElement;
    fixture.detectChanges();
    //console.log("de",de,"el",el);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the brand logo when showBrand is true',() => {
    component.showBrand = true;
    fixture.detectChanges();
    expect(el.childElementCount).toEqual(1);
  });

  it('should hide the brand logo when showBrand is false', () => {
    component.showBrand = false;
    fixture.detectChanges();
    expect(el.childElementCount).toEqual(0);
  });
});
