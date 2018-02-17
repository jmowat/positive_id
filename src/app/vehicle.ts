export class Vehicle {
  name: string;
  type: string;
  class: string;
  imageDir: string;
  side: string[];
  nationality: string[];
  era: string[];
  images: [{
  	img_lg: string,
  	img_sm: string,
  	perspective: string,
  	optics: string,
  	classification: string,
  	distance: string,
  	source: string
  }]
}