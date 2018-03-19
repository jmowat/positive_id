import { Component, OnInit, Input } from '@angular/core';
import { HeaderBannerComponent } from '../header-banner/header-banner.component';
import { QuizParms } from '../../quiz-main/game/quiz-parms';
import { GameParmsService } from '../../quiz-main/game/game-parms.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  @Input()
  public showBrand = false;

  constructor() { }

  ngOnInit() {
  }

}
