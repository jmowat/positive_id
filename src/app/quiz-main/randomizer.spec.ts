import { Randomizer } from './randomizer';

describe('Randomizer', () => {
	it('verify static class exists', () => {
    	expect(Randomizer).toBeTruthy();
  	});

  	describe('gerRandomInt', () => {
  		it('should choose a random number between 1 and 10',() => {
		  	let x = Randomizer.getRandomInt(1,10);
		  	expect(x >= 1 && x <= 10).toBeTruthy();
		  })
  	});

  	describe('isEqual test helper', () => {
  		var arr1 = [1, 2, 3, 4, 5];
  		var arr2 = [1, 2, 3, 4, 5];
		var arr3 = [5, 4, 3, 2, 1];
		var arr4 = [5, 4, 3, 2, 1];
  		it('should verify two arrays are equal if in the same order', () => {
  			expect(isEqual(arr1, arr2)).toBeTruthy();
  			expect(isEqual(arr4, arr3)).toBeTruthy();
  		});

  		it('should verify two arrays are unequal if not in the same order', () => {
			expect(isEqual(arr1, arr3)).toBeFalsy();
			expect(isEqual(arr4, arr2)).toBeFalsy();
  		});
  	});

	describe('shuffle', () => {
		let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

	    it('should return the same number of elements',()=> {
	  		let y = Randomizer.shuffle(x);
	  		expect(x.length).toEqual(y.length);
	    });

	    it('should return the same values',()=> {
		  	let y = Randomizer.shuffle(x);
		  	expect(arrayContainsAnotherArray(x,y)).toBeTruthy();
	    });

	    it('should mix the original elements up',()=> {
		  	let y = x.slice();
		  	Randomizer.shuffle(x).slice();
		  	expect(isEqual(x,y)).toBeFalsy();
	    });
	});
});

function arrayContainsAnotherArray(needle, haystack){
  for(var i = 0; i < needle.length; i++){
    if(haystack.indexOf(needle[i]) === -1)
       return false;
  }
  return true;
}

var isEqual = function (value, other) {
	// Get the value type
	var type = Object.prototype.toString.call(value);

	// If the two objects are not the same type, return false
	if (type !== Object.prototype.toString.call(other)) return false;

	// If items are not an object or array, return false
	if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

	// Compare the length of the length of the two items
	var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
	var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
	if (valueLen !== otherLen) return false;

	// Compare two items
	var compare = function (item1, item2) {
		// Get the object type
		var itemType = Object.prototype.toString.call(item1);

		// If an object or array, compare recursively
		if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
			if (!isEqual(item1, item2)) return false;
		}

		// Otherwise, do a simple comparison
		else {
			// If the two items are not the same type, return false
			if (itemType !== Object.prototype.toString.call(item2)) return false;

			// Else if it's a function, convert to a string and compare
			// Otherwise, just compare
			if (itemType === '[object Function]') {
				if (item1.toString() !== item2.toString()) return false;
			} else {
				if (item1 !== item2) return false;
			}
		}
	};

	// Compare properties
	if (type === '[object Array]') {
		for (var i = 0; i < valueLen; i++) {
			if (compare(value[i], other[i]) === false) return false;
		}
	} else {
		for (var key in value) {
			if (value.hasOwnProperty(key)) {
				if (compare(value[key], other[key]) === false) return false;
			}
		}
	}

	// If nothing failed, return true
	return true;
};