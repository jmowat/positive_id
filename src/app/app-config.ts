/*
  Must put this interface in its own file instead of app.config.ts
  or else TypeScript gives a (bogus) warning:
  WARNING in ./src/app/... .ts
  "export 'AppConfig' was not found in './app.config'
*/
export interface AppConfig {
  	optionsToShow: number,
    numberOfQuestions: number,
    platforms: string[],
    profiles: string[],
    distances: string[],
    optics: string[],
    sides: string[],
    randomizeQuestions: boolean
}
