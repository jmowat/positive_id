import { VehicleCard } from './vehicle-card';
import { FIVE_VEHICLES, LUCHS, CHALLENGER2, BMP2 } from '../mock-vehicles';

describe('VehicleCard', () => {
  it('create an instance', () => {
    const obj = new VehicleCard(CHALLENGER2[0], {});
    expect(obj).toBeTruthy();
  });

	/*
	 * Get a list of questions, any questions
	 * 	Where should filtering of these questions go?
	 * Create a quiz
	 * 	Random question order
	 * 	Fixed question order
	 * 	Random noise
	 * 	Fixed noise
	 * 	Create a method that randomly chooses which image to show
	 */

  it('should find images for vehicles with spaces in their names', () => {
    const card = new VehicleCard(CHALLENGER2[0], {});
    expect(card.id).toBe('challenger2');
  });

  it('should find images for vehicles with multiple spaces in their names', () => {
    const card = new VehicleCard(LUCHS[0], {});
    expect(card.id).toBe('spzluchs2a2');
  });

  it('should initialize with new structure', () => {
    const card = new VehicleCard(BMP2[0], {});
    expect(card.id).toBe('bmp2');
  });

  it('should have a default aspect of side', () => {
    const card = new VehicleCard(BMP2[0], {});
    expect(card.getImage()).toBe('1.png');
  });

  it('should allow override of default aspect', () => {
    const card = new VehicleCard(BMP2[0], {});
    expect(card.getImage({
      perspective: 'front',
      distance: 'near'
    })).toBe('2.png');
  });

  it('should return the full path of the default image', () => {
    const card = new VehicleCard(BMP2[0], {});
    expect(card.getImagePath({
      perspective: 'front',
      distance: 'near'
    })).toBe('/img/ground/bmp2/2.png');
  });

  it('should have access to every image', () => {
    const card = new VehicleCard(BMP2[0], {});
    const opt1 = {
      size: 'large',
      perspective: 'side',
      distance: 'near'
    };
    const opt2 = {
      size: 'small',
      perspective: 'side',
      distance: 'near'
    };
    const opt3 = {
      size: 'small',
      perspective: 'front',
      distance: 'near'
    };

    expect(card.getImagePath(opt1)).toBe('/img/ground/bmp2/1.png');
    expect(card.getImagePath(opt2)).toBe('/img/ground/bmp2/1sm.png');
    expect(card.getImagePath(opt3)).toBe('/img/ground/bmp2/2sm.png');
  });

  it('should be able to quickly retrieve any size of image', () => {
    const card = new VehicleCard(BMP2[0], {});

    expect(card.getImagePath({
      size: 'small',
      perspective: 'front',
      distance: 'near'
    })).toBe('/img/ground/bmp2/2sm.png');


    expect(card.getImagePath({
      size: 'large',
      perspective: 'front',
      distance: 'near'
    })).toBe('/img/ground/bmp2/2.png');
  });

  it('should return all valid perspectives', () => {
    const card = new VehicleCard(BMP2[0], {});
    const perspectives = ['side', 'front', 'oblique', 'rear'];
    expect(card.getValidAttributes('perspective')).toEqual(perspectives);
  });

  it('should return all valid distances', () => {
    const card = new VehicleCard(BMP2[0], {});
    const distances = ['near', 'far'];
    expect(card.getValidAttributes('distance')).toEqual(distances);
  });
});
