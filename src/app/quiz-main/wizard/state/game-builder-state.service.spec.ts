import { TestBed, inject } from '@angular/core/testing';
import {
  QuizBuilderState, PlatformSelectionState, EraSelectionState, SideSelectionState,
  DistanceSelectionState, OpticsSelectionState, PerspectivesSelectionState,
  SummaryState
} from './quiz-builder-state';
import { QuizBuilderContext } from './quiz-builder-context';
// import { RouterTestingModule } from '@angular/router/testing';
import { GameBuilderStateService } from './game-builder-state.service';
import { Router } from '@angular/router';
// import { QuizComponent } from '../../quiz/quiz.component';

describe('GameBuilderStateService', () => {
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
         // RouterTestingModule.withRoutes([{path: '/quiz', component: QuizComponent}])
      ],
      providers: [GameBuilderStateService,
        {
          provide: Router,
          useValue: routerSpy
        },
      ],
      // declarations: [ QuizComponent ]
    });
  });

  it('create an instance', inject([GameBuilderStateService], (stateService: GameBuilderStateService) => {
    expect(stateService).toBeTruthy();
  }));

  describe('basic builder functionality', () => {

    beforeEach(inject([GameBuilderStateService], (service: GameBuilderStateService) => {
      service.setContext(new QuizBuilderContext());
    }));

    it('should start with a platform state', inject([GameBuilderStateService], (service: GameBuilderStateService) => {
      expect(service.context instanceof PlatformSelectionState);
    }));

    it('should perform expected navigation', inject([GameBuilderStateService], (service: GameBuilderStateService) => {
      service.next();
      expect(service.context instanceof EraSelectionState);
      service.previous();
      expect(service.context instanceof PlatformSelectionState);
      service.next();
      expect(service.context instanceof EraSelectionState);
      service.next();
      expect(service.context instanceof SideSelectionState);
      service.next();
      expect(service.context instanceof DistanceSelectionState);
      service.next();
      expect(service.context instanceof OpticsSelectionState);
      service.next();
      expect(service.context instanceof PerspectivesSelectionState);
      service.next();
      expect(service.context instanceof SummaryState);
      service.next();
      expect(service.context instanceof PlatformSelectionState);
    }));
  });
});
