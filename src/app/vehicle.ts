export class Vehicle {
  name: string;
  side: string[];
  type: string;
  class: string;
  nationality: string[];
  era: string[];
  image_dir: string;
  images: [{
  	img_lg: string,
  	img_sm: string,
  	perspective: string,
  	optics: string,
  	classification: string,
  	distance: string,
  	source: string
  }];
}