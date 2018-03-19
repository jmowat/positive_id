import { Image } from './image';

export class Vehicle {
  name: string;
  side: string[];
  type: string;
  class: string;
  nationality: string[];
  era: string[];
  image_dir: string;
  images: Image[];
}
