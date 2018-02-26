import { Randomizer } from './randomizer';
import { Vehicle } from '../vehicle';

class Card {
	constructor(public name:string) {
	}
}

export class VehicleCard extends Card {
	data: Vehicle;
	id: string;
	options: any[];
	randomImage: string;
	defaultOptions: any;
	side: string[];
	era: string[];
	platform: string;
	image_dir: string;

	constructor(data, defaultOptions) {

		super(data.name);
		this.data = data;
		this.id = this.name.replace(/\-/g, "").replace(/\s/g, "").toLowerCase();
		this.options = [];
		this.randomImage = "";
		// These are the options used for random images only. Maybe eliminate
		// this on the constructor and move to method parm passing. Or, this object
		// could look up the parm somehow.
		this.defaultOptions = defaultOptions;

		/*
		 * I had to expose these properties explicitly to get the browse filters to work. Weird.
		 */
		this.side = this.data.side;
		this.era = this.data.era;
		this.platform = this.data.type;
		this.image_dir = this.data.image_dir;
	}

	/*
	 * Used for the quiz image.
	 */
	getRandomImage() {
		if (this.randomImage != "") {
			return this.randomImage;
		}

		let findOne = (haystack, arr) => {
			return arr.some((v) => {
				return haystack.indexOf(v) >= 0;
			});
		};

		let filteredImages:any[] = this.data.images;
		// filter the image list by eliminating non-specified values
		if (this.defaultOptions.profiles) {
			filteredImages = filteredImages.filter((image => {
				return this.defaultOptions.profiles.includes(image.perspective);
			}));
		}

		if (this.defaultOptions.distances) {
			filteredImages = filteredImages.filter((image => {
				return this.defaultOptions.distances.includes(image.distance);
			}));
		}

		if (this.defaultOptions.optics) {
			filteredImages = filteredImages.filter((image => {
				return this.defaultOptions.optics.includes(image.optics);
			}));
		}

		// of the remaining objects, choose one at random
		let randomImageIndex = Randomizer.getRandomInt(0, filteredImages.length - 1);
		// Choose random image and remember it here
		if (this.defaultOptions.size === "large") {
			this.randomImage = filteredImages[randomImageIndex].img_lg;
		} else if (this.defaultOptions.size === "small") {
			this.randomImage = filteredImages[randomImageIndex].img_sm;
		} else {
			//console.log(imageOptions);
			this.randomImage = filteredImages[randomImageIndex].img_lg;
		}
		return this.randomImage;
	}



	/**
	 * Grab a stock image predictably every time. Used for the database lookup
	 * screen.
	 */
	//let ImageOption = {perspective: string, distance: string, size: string};
	getImage(imageOptions: ImageOptions = {
		perspective: "side",
		distance: "near",
		size:""}) {
	// getImage(imageOptions = {
	// 	perspective: "side",
	// 	distance: "near"
	// }) {
		// Must return a single image
		for (let i = 0; i < this.data.images.length; i++) {
			if (this.data.images[i].perspective == imageOptions.perspective &&
				this.data.images[i].distance == imageOptions.distance) {
				if (imageOptions.size === "large") {
					return this.data.images[i].img_lg;
				} else if (imageOptions.size === "small") {
					return this.data.images[i].img_sm;
				} else {
					return this.data.images[i].img_lg;
				}
			}
		}
	}

	getImagePath(imageOptions) {
		return "/" + this.data.image_dir + "/" + this.getImage(imageOptions);
	}

	getRandomImagePath() {
		return "/" + this.data.image_dir + "/" + this.getRandomImage();
	}

	// Unused method with compile problems, commented out Feb 25
	// chooseRandomAttribute(att) {
	// 	return this.card.getValidAttributes(att)[Randomizer.getRandomInt(0, this.card.getValidAttributes(att).length - 1)];
	// }

	getValidAttributes(category) {
		let atts = new Set();

		for (let i = 0; i < this.data.images.length; i++) {
			let img = this.data.images[i];
			for (let key in img) {
				if (img.hasOwnProperty(key) && key === category) {
					atts.add(img[key]);
				}
			}
		}
		return Array.from(atts);
	}
}

interface ImageOptions {
	perspective: string;
	distance: string;
	size: string;
}