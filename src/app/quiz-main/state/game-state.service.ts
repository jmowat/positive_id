import { Injectable } from '@angular/core';
import { Game } from '../game/game';
import { QuizService } from '../quiz/quiz.service';
import { GameState } from './game-state';
import { GameContext } from './game-context';
import { QuizParms } from '../game/quiz-parms';
import { Router } from '@angular/router';

@Injectable()
export class GameStateService {
  context: GameContext;

  constructor(private quizService: QuizService, private router: Router) {
    this.reset();
  }

  getStatus(): string {
    return this.context.current.getStatus();
  }

  getStatusMessage(): string {
    return this.context.current.getStatusText();
  }

  isSelectionDisabled(): boolean {
    return this.context.current.getDisableSelection();
  }

  getActionText(): string {
    return this.context.current.getActionText();
  }

  acceptAnswer(answer: string) {
    this.context.goNext(answer, this.getTest(), this.router);
  }

  getUserSelection(): string {
    return this.context.current.getUserAnswer();
  }

  getTest(): Game {
    return this.quizService.getTest();
  }

  createNewTest(quizParms: any) {
    this.quizService.createNewTest(quizParms);
    this.context = new GameContext();
  }

  nextQuestion() {
    this.quizService.getTest().nextQuestion();
  }

  previousQuestion() {
    this.quizService.getTest().previousQuestion();
  }

  getPossibleAnswers(): any[] {
    return this.quizService.getTest().getQuestion().getPossibleAnswers();
  }

  reset() {
    this.context = new GameContext();
  }
}
