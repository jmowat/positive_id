import { SelectBoxFactory } from './select-box-factory';

describe('SelectBoxFactory', () => {
  it('create an instance', () => {
    const factory = new SelectBoxFactory();
    expect(factory).toBeTruthy();
  });
});
