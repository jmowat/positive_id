import { Component, OnInit, Input } from '@angular/core';
import { HeaderBannerComponent } from '../header-banner/header-banner.component';
import { QuizParms } from '../../quiz-main/game/quiz-parms';
import { GameParmsService } from '../../quiz-main/game/game-parms.service';
import { GameBuilderStateService } from '../../quiz-main/wizard/state/game-builder-state.service';
import { QuizBuilderContext } from '../../quiz-main/wizard/state/quiz-builder-context';
import { DrillBuilderContext } from '../../quiz-main/wizard/state/drill-builder-context';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  @Input()
  public showBrand = false;

  constructor(private gameBuilderStateService: GameBuilderStateService) { }

  ngOnInit() {
  }

  generateQuiz() {
    this.gameBuilderStateService.setContext(new QuizBuilderContext());
  }

  generateDrill() {
    this.gameBuilderStateService.setContext(new DrillBuilderContext());
  }

}
