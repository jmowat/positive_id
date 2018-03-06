import { Drill, DrillOptions } from './drill';
import { FIVE_VEHICLES, LUCHS, CHALLENGER2 } from '../mock-vehicles';

describe('Drill', () => {
  it('create an instance', () => {
    const obj = new Drill(FIVE_VEHICLES, drillParms);
    expect(obj).toBeTruthy();
  });

  it('should have 20 questions when passed 20 numberOfQuestions', () => {
    const drill = new Drill(FIVE_VEHICLES, drillParms);
    expect(drill.questions.length).toEqual(20);
    expect(drill.getNumberOfQuestions()).toEqual(20);
  });

  it('should start on question 0', () => {
    const drill = new Drill(FIVE_VEHICLES, drillParms);
    expect(drill.getCurrentQuestionIndex()).toEqual(0);
  });

  it('should have 5 possible answers as specified by optionsToShow', () => {
    const drill = new Drill(FIVE_VEHICLES, drillParms);
    expect(drill.getQuestion().getPossibleAnswers().length).toBe(5);
  });

  it('should create even if provided with one target vehicle', () => {
    const singleVehicleParms: DrillOptions = {
      optionsToShow: 5,
      numberOfQuestions: 10,
      distances: ['near'],
      profiles: ['side'],
      optics: ['naked eye'],
      platforms: ['ground vehicle'],
      originalValues: ['T-90'],
      randomizeQuestions: false
    };
    const drill = new Drill(FIVE_VEHICLES, singleVehicleParms);
    expect(drill).toBeTruthy();
    expect(drill.getNumberOfQuestions()).toEqual(10);
  });

  describe('ground vehicle drills', () => {
    let testArray: any[];
    beforeEach(() => {
      testArray = FIVE_VEHICLES.concat(LUCHS).concat(CHALLENGER2);
    });

    it('should create questions with just thermal optics', () => {
      const options = {
        randomizeQuestions: false,
        optionsToShow: 5,
        numberOfQuestions: 5,
        distances: ['far'],
        profiles: ['side'],
        optics: ['thermal'],
        originalValues: ['T-90', 'T-80', 'T-72']
      };
      const drill = new Drill(testArray, options);
      expect(drill.getNumberOfQuestions()).toBe(5);
      for (let i = 0; i < drill.questions.length; i++) {
        expect(drill.getQuestion().getRandomImagePath()).toContain('8.png');
        drill.nextQuestion();
      }
    });

    it('should create questions with just far pictures', () => {
      const options = {
        randomizeQuestions: false,
        optionsToShow: 5,
        numberOfQuestions: 5,
        distances: ['far'],
        profiles: ['side'],
        optics: ['naked eye'],
        originalValues: ['T-90', 'T-80', 'T-72'],
      };
      const drill = new Drill(testArray, options);
      expect(drill.getNumberOfQuestions()).toBe(5);
      for (let i = 0; i < drill.questions.length; i++) {
        expect(drill.getQuestion().getRandomImagePath()).toContain('5.png');
        drill.nextQuestion();
      }
    });

    it('should create questions with just near front, side, and oblique pictures', () => {
      const options = {
        randomizeQuestions: false,
        optionsToShow: 5,
        numberOfQuestions: 5,
        distances: ['near'],
        profiles: ['side', 'front', 'oblique'],
        optics: ['naked eye'],
        originalValues: ['T-90', 'T-80', 'T-72'],
      };
      const drill = new Drill(testArray, options);
      expect(drill.getNumberOfQuestions()).toBe(5);
      for (let i = 0; i < drill.questions.length; i++) {
        expect(drill.getQuestion().getRandomImagePath()).not.toContain('4.png');
        drill.nextQuestion();
      }
    });

    it('should create a drill consisting of specified random questions', () => {
      const options = {
        randomizeQuestions: false,
        optionsToShow: 5,
        numberOfQuestions: 5,
        sides: ['eastern'],
        originalValues: ['T-90', 'T-80', 'T-72'],
      };
      const drill = new Drill(testArray, options);
      expect(drill.getNumberOfQuestions()).toBe(5);
    });

    it('should create a drill consisting of just eastern vehicles', () => {
      const options = {
        randomizeQuestions: false,
        optionsToShow: 5,
        numberOfQuestions: 5,
        sides: ['eastern'],
        originalValues: ['T-90', 'T-80', 'T-72'],
      };
      const drill = new Drill(testArray, options);
      expect(drill.getNumberOfQuestions()).toBe(5);
      for (let i = 0; i < drill.questions.length; i++) {
        expect(drill.questions[i].card.data.side).toContain('eastern');
        expect(drill.questions[i].card.data.side).not.toContain('western');
      }
    });

    it('should create a drill consisting of just western vehicles', () => {
      const options = {
        randomizeQuestions: false,
        optionsToShow: 5,
        numberOfQuestions: 5,
        sides: ['western'],
        originalValues: ['Challenger 2', 'SPz Luchs 2A2'],
      };
      const drill = new Drill(testArray, options);
      expect(drill.getNumberOfQuestions()).toBe(5);
      for (let i = 0; i < drill.questions.length; i++) {
        expect(drill.questions[i].card.data.side).toContain('western');
        expect(drill.questions[i].card.data.side).not.toContain('eastern');
      }
    });

    it('should create a drill consisting of just modern era vehicles', () => {
      const options = {
        randomizeQuestions: false,
        optionsToShow: 5,
        numberOfQuestions: 5,
        eras: ['modern'],
        originalValues: ['T-90', 'T-80', 'T-72'],
      };
      const drill = new Drill(testArray, options);
      expect(drill.getNumberOfQuestions()).toBe(5);
      for (let i = 0; i < drill.questions.length; i++) {
        expect(drill.questions[i].card.data.era).toContain('modern');
      }
    });
  });
});

const drillParms: DrillOptions = {
  optionsToShow: 5,
  numberOfQuestions: 20,
  distances: ['near'],
  profiles: ['side'],
  optics: ['naked eye'],
  platforms: ['ground vehicle'],
  originalValues: ['T-90', 'T-80', 'T-72'],
  randomizeQuestions: false
};
