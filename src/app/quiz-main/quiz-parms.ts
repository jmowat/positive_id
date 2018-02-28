export interface QuizParms {
	optionsToShow: number,
    numberOfQuestions: number,
    platforms?: string[],
    profiles?: string[],
    distances?: string[],
    optics?: string[],
    sides?: string[],
    originalValues?: string[],
    randomizeQuestions?: boolean
}