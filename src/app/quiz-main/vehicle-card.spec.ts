import { VehicleCard } from './vehicle-card';

describe('VehicleCard', () => {
  it('create an instance', () => {
    const obj = new VehicleCard("","");
    expect(obj).toBeTruthy();
  });

});
