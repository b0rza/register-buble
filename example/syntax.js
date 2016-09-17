'use strict';

class SuperMath {
	static max(...args) {
		return Math.max(...args);
	}
}

const identity = arg => arg;

let values = [ 1, 2, 3, 4, 5 ];
let data = {
	[ `meaningOf${ identity('Life') }` ]: 42,
	code: 0b1101,
	values,
};

let max = SuperMath.max( ...values );
console.log(`As far as I know, max is ${ max }`);

module.exports = () => ({ data, max });
