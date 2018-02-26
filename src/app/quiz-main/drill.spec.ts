import { Drill, DrillOptions } from './drill';

describe('Drill', () => {
  it('create an instance', () => {
    const obj = new Drill(five,drillParms);
    expect(obj).toBeTruthy();
  });

});

let drillParms:DrillOptions = {
    optionsToShow: 5,
    numberOfQuestions: 20,
    distances: ["near"],
    profiles: ["side"],
    optics: ["naked eye"],
    platforms: ["ground vehicle"],
    originalValues: ["T-90","T-80","T-72"],
    randomizeQuestions: false
};

let five: any[] = [{
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
}, {
	"name": "T-80",
	"side": ["eastern"],
	"type": "ground vehicle",
	"class": "main batle tank",
	"nationality": ["Soviet Union"],
	"era": ["cold war", "modern"],
	"image_dir": "img/ground/t80",
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
}, {
	"name": "T-72",
	"side": ["eastern", "Warsaw Pact"],
	"type": "ground vehicle",
	"class": "main battle tank",
	"nationality": ["Soviet Union"],
	"era": ["cold war", "modern"],
	"image_dir": "img/ground/t72",
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
}, {
	"name": "T-62",
	"side": ["eastern", "Warsaw Pact"],
	"type": "ground vehicle",
	"class": "medium tank",
	"nationality": ["Soviet Union"],
	"era": ["cold war"],
	"image_dir": "img/ground/t62",
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
}, {
	"name": "T-55",
	"side": ["eastern", "Warsaw Pact"],
	"type": "ground vehicle",
	"class": "medium tank",
	"nationality": ["Soviet Union"],
	"era": ["cold war"],
	"image_dir": "img/ground/t55",
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

let challenger2: any[] =  [{
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


let luchs: any[] = [{
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

let bmp2: any[] = [{
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