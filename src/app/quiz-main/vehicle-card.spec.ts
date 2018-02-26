import { VehicleCard } from './vehicle-card';

describe('VehicleCard', () => {
  it('create an instance', () => {
    const obj = new VehicleCard(challenger2[0],{});
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
		let card = new VehicleCard(challenger2[0],{});
		expect(card.id).toBe("challenger2");
	});

	it('should find images for vehicles with multiple spaces in their names', () => {
		let card = new VehicleCard(luchs[0],{});
		expect(card.id).toBe("spzluchs2a2");
	});

	it('should initialize with new structure', () => {
		let card = new VehicleCard(bmp2[0],{});
		expect(card.id).toBe("bmp2");
	});

	it('should have a default aspect of side', () => {
		let card = new VehicleCard(bmp2[0],{});
		expect(card.getImage()).toBe('1.png');
	});

	/*
	 * TODO: Verify that default images work. I added size: "" and the test passes
	 * but the functionality may require a default to kick in if size is not present.
	 */
	it('should allow override of default aspect', () => {
		let card = new VehicleCard(bmp2[0],{});
		expect(card.getImage({
			perspective: "front",
			distance: "near",
			size: ""
		})).toBe('2.png');
	});

	it('should return the full path of the default image', () => {
		let card = new VehicleCard(bmp2[0],{});
		expect(card.getImagePath({
			perspective: "front",
			distance: "near"
		})).toBe('/img/ground/bmp2/2.png');
	});

	it('should have access to every image', () => {
		let card = new VehicleCard(bmp2[0],{});
		let opt1 = {
			size: "large",
			perspective: "side",
			distance: "near"
		};
		let opt2 = {
			size: "small",
			perspective: "side",
			distance: "near"
		};
		let opt3 = {
			size: "small",
			perspective: "front",
			distance: "near"
		};

		expect(card.getImagePath(opt1)).toBe('/img/ground/bmp2/1.png');
		expect(card.getImagePath(opt2)).toBe('/img/ground/bmp2/1sm.png');
		expect(card.getImagePath(opt3)).toBe('/img/ground/bmp2/2sm.png');
	});

	it('should be able to quickly retrieve any size of image', () => {
		let card = new VehicleCard(bmp2[0],{});

		expect(card.getImagePath({
			size: "small",
			perspective: "front",
			distance: "near"
		})).toBe('/img/ground/bmp2/2sm.png');


		expect(card.getImagePath({
			size: "large",
			perspective: "front",
			distance: "near"
		})).toBe('/img/ground/bmp2/2.png');
	});

	it('should return all valid perspectives', () => {
		let card = new VehicleCard(bmp2[0],{});
		let perspectives = ["side", "front", "oblique", "rear"];
		expect(card.getValidAttributes("perspective")).toEqual(perspectives);
	});

	it('should return all valid distances', () => {
		let card = new VehicleCard(bmp2[0],{});
		let distances = ["near", "far"];
		expect(card.getValidAttributes("distance")).toEqual(distances);
	});
});

let bmp2 = [{
	"name": "BMP-2",
	"side": ["eastern", "Warsaw Pact"],
	"type": "ground vehicle",
	"class": "infantry fighting vehicle",
	"nationality": ["Soviet Union", "Russia"],
	"era": ["cold war", "modern"],
	"image_dir": "img/ground/bmp2",
	"images": [{
		"img_lg": "1.png",
		"img_sm": "1sm.png",
		"perspective": "side",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "2.png",
		"img_sm": "2sm.png",
		"perspective": "front",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "3.png",
		"img_sm": "3sm.png",
		"perspective": "oblique",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "4.png",
		"img_sm": "4sm.png",
		"perspective": "rear",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "5.png",
		"img_sm": "5sm.png",
		"perspective": "side",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "far",
		"source": "Steel Beasts"
	}, {
		"img_lg": "6.png",
		"img_sm": "6sm.png",
		"perspective": "side",
		"optics": "thermal",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "7.png",
		"img_sm": "7sm.png",
		"perspective": "front",
		"optics": "thermal",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "8.png",
		"img_sm": "8sm.png",
		"perspective": "side",
		"optics": "thermal",
		"classification": "computer",
		"distance": "far",
		"source": "Steel Beasts"
	}]
}];

let challenger2 = [{
	"name": "Challenger 2",
	"side": ["western"],
	"type": "ground vehicle",
	"class": "main battle tank",
	"nationality": ["United Kingdom"],
	"era": ["modern"],
	"image_dir": "img/ground/challenger2",
	"images": [{
		"img_lg": "1.png",
		"img_sm": "1sm.png",
		"perspective": "side",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "2.png",
		"img_sm": "2sm.png",
		"perspective": "front",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "3.png",
		"img_sm": "3sm.png",
		"perspective": "oblique",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "4.png",
		"img_sm": "4sm.png",
		"perspective": "rear",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "5.png",
		"img_sm": "5sm.png",
		"perspective": "side",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "far",
		"source": "Steel Beasts"
	}, {
		"img_lg": "6.png",
		"img_sm": "6sm.png",
		"perspective": "side",
		"optics": "thermal",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "7.png",
		"img_sm": "7sm.png",
		"perspective": "front",
		"optics": "thermal",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "8.png",
		"img_sm": "8sm.png",
		"perspective": "side",
		"optics": "thermal",
		"classification": "computer",
		"distance": "far",
		"source": "Steel Beasts"
	}]
}];


let luchs = [{
	"name": "SPz Luchs 2A2",
	"side": ["western"],
	"type": "ground vehicle",
	"class": "reconnaissance vehicle",
	"nationality": ["Germany"],
	"era": ["cold war"],
	"image_dir": "img/ground/spzluchs",
	"images": [{
		"img_lg": "1.png",
		"img_sm": "1sm.png",
		"perspective": "side",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "2.png",
		"img_sm": "2sm.png",
		"perspective": "front",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "3.png",
		"img_sm": "3sm.png",
		"perspective": "oblique",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "4.png",
		"img_sm": "4sm.png",
		"perspective": "rear",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "5.png",
		"img_sm": "5sm.png",
		"perspective": "side",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "far",
		"source": "Steel Beasts"
	}, {
		"img_lg": "6.png",
		"img_sm": "6sm.png",
		"perspective": "side",
		"optics": "thermal",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "7.png",
		"img_sm": "7sm.png",
		"perspective": "front",
		"optics": "thermal",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "8.png",
		"img_sm": "8sm.png",
		"perspective": "side",
		"optics": "thermal",
		"classification": "computer",
		"distance": "far",
		"source": "Steel Beasts"
	}]
}];


let t90 = [{
	"name": "T-90",
	"side": ["eastern"],
	"type": "ground vehicle",
	"class": "main batle tank",
	"nationality": ["Soviet Union"],
	"era": ["modern"],
	"image_dir": "img/ground/t90",
	"images": [{
		"img_lg": "1.png",
		"img_sm": "1sm.png",
		"perspective": "side",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "2.png",
		"img_sm": "2sm.png",
		"perspective": "front",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "3.png",
		"img_sm": "3sm.png",
		"perspective": "oblique",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "4.png",
		"img_sm": "4sm.png",
		"perspective": "rear",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "5.png",
		"img_sm": "5sm.png",
		"perspective": "side",
		"optics": "naked eye",
		"classification": "computer",
		"distance": "far",
		"source": "Steel Beasts"
	}, {
		"img_lg": "6.png",
		"img_sm": "6sm.png",
		"perspective": "side",
		"optics": "thermal",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "7.png",
		"img_sm": "7sm.png",
		"perspective": "front",
		"optics": "thermal",
		"classification": "computer",
		"distance": "near",
		"source": "Steel Beasts"
	}, {
		"img_lg": "8.png",
		"img_sm": "8sm.png",
		"perspective": "side",
		"optics": "thermal",
		"classification": "computer",
		"distance": "far",
		"source": "Steel Beasts"
	}]
}];