import { NameFilterPipe } from './name-filter.pipe';

describe('NameFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new NameFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should allow everything through if field is empty', () => {
  	const pipe = new NameFilterPipe();
  	let values = [{name:'a'},{name:'b'},{name:'c'}];
  	expect(pipe.transform(values, 'name', '')).toEqual(values);
  });

  it('should allow items to be filtered by name', () => {
  	const pipe = new NameFilterPipe();
  	let values = [{name:'a'},{name:'b'},{name:'c'}];
  	expect(pipe.transform(values, 'name', 'a')).toEqual([{name:'a'}]);
  });

  it('should return nothing if there are no matches', () => {
  	const pipe = new NameFilterPipe();
  	let values = [{name:'a'},{name:'b'},{name:'c'}];
  	expect(pipe.transform(values, 'name', 'd')).toEqual([]);
  });
});
