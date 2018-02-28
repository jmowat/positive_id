import { AppConfig } from './app-config';
export { AppConfig } from './app-config';

import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const QUIZ_DEFAULT_PARMS: AppConfig = {
    optionsToShow: 5,
    numberOfQuestions: 5,
    platforms: ["ground vehicle"],
    profiles: ["side", "front", "oblique"],
    distances: ["near"],
    optics: ["naked eye"],
    sides: ["eastern", "western"],
    randomizeQuestions: true
};
