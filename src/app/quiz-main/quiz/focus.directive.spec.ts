import { FocusDirective } from './focus.directive';
import { Directive, Input, EventEmitter, ElementRef, Renderer, Inject } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';

describe('FocusDirective', () => {
  const elementRefSpy = jasmine.createSpyObj('ElementRef', ['nativeElement']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Renderer,
        {
          provide: ElementRef,
          useValue: elementRefSpy
        }
      ]
    });
  });

  it('should create an instance', inject([ElementRef, Renderer], (element: ElementRef, renderer: Renderer) => {
    const directive = new FocusDirective(element, renderer);
    expect(directive).toBeTruthy();
  }));
});
