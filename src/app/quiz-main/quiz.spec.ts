import { Quiz } from './quiz';

describe('Quiz', () => {
  it('create an instance', () => {
    const obj = new Quiz([]);
    expect(obj).toBeTruthy();
  });

});
