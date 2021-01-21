var CARTESIAN = 0;
var POLAR = 1;
class Vector {
	#x = 0;
	#y = 0;
	#length = 0;
	#angle = 0;
	constructor(x, y, mode) {
		var error;
		if(mode == 0) {
			this.x = x;
			this.y = y;
			if(Number(this.y) != this.y) {
				error = 'parameter 2 is not a number';
				this.y = 0;
			}
			if(Number(this.x) != this.x) {
				error = 'parameter 1 is not a number';
				this.x = 0;
			}
		} else if(mode == 1) {
			this.length = x;
			this.angle = y;
			if(Number(this.angle) != this.angle) {
				error = 'parameter 2 is not a number';
				this.angle = 0;
			}
			if(Number(this.length) != this.length) {
				error = 'parameter 1 is not a number';
				this.length = 0;
			}
		}
		if(error) {
			throw Error(error);
		}
	}
	static random() {
		return new Vector(1, Math.random() * 2 * Math.PI, POLAR);
	}
	add(vector) {
		if(vector.constructor.name != 'Vector') {
			throw Error('parameter is not a Vector');
		}
		this.x = this.x + vector.x;
		this.y = this.y + vector.y;
	}
	addAngle(value) {
		if(Number(value) != value) {
			throw Error('parameter is not a number');
		}
		this.angle = this.angle + value;
	}
	addLength(value) {
		if(Number(value) != value) {
			throw Error('parameter is not a number');
		}
		this.length = this.length + value;
	}
	addScalar(value) {
		if(Number(value) != value) {
			throw Error('parameter is not a number');
		}
		this.x = this.x + value;
		this.y = this.y + value;
	}
	ceil() {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
	}
	ceilAngle() {
		this.angle = Math.ceil(this.angle);
	}
	ceilLength() {
		this.length = Math.ceil(this.length);
	}
	clamp(min, max) {
		if(min.constructor.name != 'Vector') {
			throw Error('parameter 1 is not a Vector');
		}
		if(max.constructor.name != 'Vector') {
			throw Error('parameter 2 is not a Vector');
		}
		if(min.x < max.x && min.y < max.y) {
			this.x = Math.max(Math.min(this.x, max.x), min.x);
			this.y = Math.max(Math.min(this.y, max.y), min.y);
		} else {
			this.x = Math.max(Math.min(this.x, min.x), max.x);
			this.y = Math.max(Math.min(this.y, min.y), max.y);
		}
	}
	clampAngle(min, max) {
		if(Number(min) != min) {
			throw Error('parameter 1 is not a number');
		}
		if(Number(max) != max) {
			throw Error('parameter 2 is not a number');
		}
		if(min < max) {
			this.angle = Math.max(Math.min(this.angle, max), min);
		} else {
			this.angle = Math.max(Math.min(this.angle, min), max);
		}
	}
	clampLength(min, max) {
		if(Number(min) != min) {
			throw Error('parameter 1 is not a number');
		}
		if(Number(max) != max) {
			throw Error('parameter 2 is not a number');
		}
		if(min < max) {
			this.length = Math.max(Math.min(this.length, max), min);
		} else {
			this.length = Math.max(Math.min(this.length, min), max);
		}
	}
	clampScalar(min, max) {
		if(Number(min) != min) {
			throw Error('parameter 1 is not a number');
		}
		if(Number(max) != max) {
			throw Error('parameter 2 is not a number');
		}
		if(min < max) {
			this.x = Math.max(Math.min(this.x, max), min);
			this.y = Math.max(Math.min(this.y, max), min);
		} else {
			this.x = Math.max(Math.min(this.x, min), max);
			this.y = Math.max(Math.min(this.y, min), max);
		}
	}
	clone() {
		return new Vector(this.x, this.y);
	}
	copy(vector) {
		if(vector.constructor.name != 'Vector') {
			throw Error('parameter is not a Vector');
		}
		this.x = vector.x;
		this.y = vector.y;
	}
	distanceTo(vector) {
		if(vector.constructor.name != 'Vector') {
			throw Error('parameter is not a Vector');
		}
		return Math.hypot(this.x - vector.x, this.y - vector.y);
	}
	manhattanDistanceTo(vector) {
		if(vector.constructor.name != 'Vector') {
			throw Error('parameter is not a Vector');
		}
		return Math.abs(this.x - vector.x) + Math.abs(this.y - vector.y);
	}
	distanceToSquared(vector) {
		if(vector.constructor.name != 'Vector') {
			throw Error('parameter is not a Vector');
		}
		var offsetx = (this.x - vector.x);
		var offsety = (this.y - vector.y);
		return offsetx * offsetx + offsety * offsety;
	}
	divide(vector) {
		if(vector.constructor.name != 'Vector') {
			throw Error('parameter is not a Vector');
		}
		if(vector.x == 0) {
			throw Error('x coordinate of parameter is 0');
		}
		if(vector.y == 0) {
			throw Error('y coordinate of parameter is 0');
		}
		this.x = this.x / vector.x;
		this.y = this.y / vector.y;
	}
	divideAngle(value) {
		if(Number(value) != value) {
			throw Error('parameter is not a number');
		}
		this.angle = this.angle / value;
	}
	divideLength(value) {
		if(Number(value) != value) {
			throw Error('parameter is not a number');
		}
		this.length = this.length / value;
	}
	divideScalar(value) {
		if(Number(value) != value) {
			throw Error('parameter is not a number');
		}
		if(value == 0) {
			throw Error('parameter is 0');
		}
		this.x = this.x / value;
		this.y = this.y / value;
	}
	dot(vector) {
		if(vector.constructor.name != 'Vector') {
			throw Error('parameter is not a Vector');
		}
		return this.x * vector.x + this.y * vector.y;
	}
	cross(vector) {
		if(vector.constructor.name != 'Vector') {
			throw Error('parameter is not a Vector');
		}
		return this.x * vector.y - this.y * vector.x;
	}
	equals(vector) {
		if(vector.constructor.name != 'Vector') {
			throw Error('parameter is not a Vector');
		}
		return this.x == vector.x && this.y == vector.y;
	}
	floor() {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
	}
	floorAngle() {
		this.angle = Math.floor(this.angle);
	}
	floorLength() {
		this.length = Math.floor(this.length);
	}
	lerp(vector, fraction) {
		if(vector.constructor.name != 'Vector') {
			throw Error('parameter 1 is not a Vector');
		}
		if(Number(fraction) != fraction) {
			throw Error('parameter 2 is not a number');
		}
		this.x = this.x + (vector.x - this.x) * fraction;
		this.y = this.y + (vector.y - this.y) * fraction;
	}
	lerp(vector1, vector2, fraction) {
		if(vector1.constructor.name != 'Vector') {
			throw Error('parameter 1 is not a Vector');
		}
		if(vector2.constructor.name != 'Vector') {
			throw Error('parameter 2 is not a Vector');
		}
		if(Number(fraction) != fraction) {
			throw Error('parameter 3 is not a number');
		}
		this.x = vector1.x + (vector2.x - vector1.x) * fraction;
		this.y = vector1.y + (vector2.y - vector1.y) * fraction;
	}
	lerpAngle(angle, fraction) {
		if(Number(angle) != angle) {
			throw Error('parameter 1 is not a number');
		}
		if(Number(fraction) != fraction) {
			throw Error('parameter 2 is not a number');
		}
		this.angle = this.angle + (angle - this.angle) * fraction;
	}
	lerpAngle(angle1, angle2, fraction) {
		if(Number(angle1) != angle1) {
			throw Error('parameter 1 is not a number');
		}
		if(Number(angle2) != angle2) {
			throw Error('parameter 2 is not a number');
		}
		if(Number(fraction) != fraction) {
			throw Error('parameter 3 is not a number');
		}
		this.angle = angle1 + (angle2 - angle1) * fraction;
	}
	lerpLength(length, fraction) {
		if(Number(length) != length) {
			throw Error('parameter 1 is not a number');
		}
		if(Number(fraction) != fraction) {
			throw Error('parameter 2 is not a number');
		}
		this.length = this.length + (length - this.length) * fraction;
	}
	lerpLength(length1, length2, fraction) {
		if(Number(length1) != length1) {
			throw Error('parameter 1 is not a number');
		}
		if(Number(length2) != length2) {
			throw Error('parameter 2 is not a number');
		}
		if(Number(fraction) != fraction) {
			throw Error('parameter 3 is not a number');
		}
		this.length = length1 + (length2 - length1) * fraction;
	}
	inverse() {
		this.length = -this.length;
	}
	inverseAngle() {
		this.angle = -this.angle;
	}
	normalize() {
		this.length = 1;
	}
	multiply(vector) {
		if(vector.constructor.name != 'Vector') {
			throw Error('parameter is not a Vector');
		}
		this.x = this.x * vector.x;
		this.y = this.y * vector.y;
	}
	multiplyLength(value) {
		if(Number(value) != value) {
			throw Error('parameter is not a number');
		}
		this.length = this.length * value;
	}
	multiplyAngle(value) {
		if(Number(value) != value) {
			throw Error('parameter is not a number');
		}
		this.angle = this.angle * value;
	}
	multiplyScalar(value) {
		if(Number(value) != value) {
			throw Error('parameter is not a number');
		}
		this.x = this.x * value;
		this.y = this.y * value;
	}
	rotateAround(center, angle) {
		if(center.constructor.name != 'Vector') {
			throw Error('parameter 1 is not a Vector');
		}
		if(Number(angle) != angle) {
			throw Error('parameter 2 is not a number');
		}
		this.x = this.x - center.x;
		this.y = this.y - center.y;
		this.angle = this.angle + angle;
		this.x = this.x + center.x;
		this.y = this.y + center.y;
	}
	round() {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
	}
	roundToZero() {
		if(this.x < 0) {
			this.x = Math.ceil(this.x);
		}
		if(this.x > 0) {
			this.x = Math.floor(this.x);
		}
		if(this.y < 0) {
			this.y = Math.ceil(this.x);
		}
		if(this.y > 0) {
			this.y = Math.floor(this.x);
		}
	}
	roundAwayFromZero() {
		if(this.x < 0) {
			this.x = Math.floor(this.x);
		}
		if(this.x > 0) {
			this.x = Math.ceil(this.x);
		}
		if(this.y < 0) {
			this.y = Math.floor(this.x);
		}
		if(this.y > 0) {
			this.y = Math.ceil(this.x);
		}
	}
	roundAngle() {
		this.angle = Math.round(this.angle);
	}
	roundAngleToZero() {
		if(this.angle < 0) {
			this.angle = Math.ceil(this.angle);
		}
		if(this.angle > 0) {
			this.angle = Math.floor(this.angle);
		}
	}
	roundAngleAwayFromZero() {
		if(this.angle < 0) {
			this.angle = Math.floor(this.angle);
		}
		if(this.angle > 0) {
			this.angle = Math.ceil(this.angle);
		}
	}
	roundLength() {
		this.length = Math.round(this.length);
	}
	roundLengthToZero() {
		if(this.length < 0) {
			this.length = Math.ceil(this.length);
		}
		if(this.length > 0) {
			this.length = Math.floor(this.length);
		}
	}
	roundLengthAwayFromZero() {
		if(this.length < 0) {
			this.length = Math.floor(this.length);
		}
		if(this.length > 0) {
			this.length = Math.ceil(this.length);
		}
	}
	set(x, y) {
		if(Number(x) != x) {
			throw Error('parameter 1 is not a number');
		}
		if(Number(y) != y) {
			throw Error('parameter 2 is not a number');
		}
		this.x = x;
		this.y = y;
	}
	setScalar(value) {
		if(Number(value) != value) {
			throw Error('parameter is not a number');
		}
		this.x = value;
		this.y = value;
	}
	setPolar(r, teta) {
		this.length = r;
		this.angle = teta;
	}
	sub(vector) {
		if(vector.constructor.name != 'Vector') {
			throw Error('parameter is not a Vector');
		}
		this.x = this.x - vector.x;
		this.y = this.y - vector.y;
	}
	subAngle(value) {
		if(Number(value) != value) {
			throw Error('parameter is not a number');
		}
		this.angle = this.angle - value;
	}
	subLength(value) {
		if(Number(value) != value) {
			throw Error('parameter is not a number');
		}
		this.length = this.length - value;
	}
	subScalar(value) {
		if(Number(value) != value) {
			throw Error('parameter is not a number');
		}
		this.x = this.x - value;
		this.y = this.y - value;
	}
	get angle() {
		return this.#angle;
	}
	set angle(angle) {
		this.#angle = angle;
		this.#x = this.length * Math.cos(this.angle);
		this.#y = this.length * Math.sin(this.angle);
	}
	get length() {
		return this.#length;
	}
	set length(length) {
		this.#length = length;
		this.#x = this.length * Math.cos(this.angle);
		this.#y = this.length * Math.sin(this.angle);
	}
	get x() {
		return this.#x;
	}
	set x(x) {
		this.#x = x;
		this.#length = Math.hypot(this.x, this.y);
		this.#angle = this.length == 0 ? undefined : this.y < 0 ? -Math.acos(this.x / this.length) : Math.acos(this.x / this.length);
	}
	get y() {
		return this.#y;
	}
	set y(y) {
		this.#y = y;
		this.#length = Math.hypot(this.x, this.y);
		this.#angle = this.length == 0 ? undefined : this.y < 0 ? -Math.acos(this.x / this.length) : Math.acos(this.x / this.length);
	}
}
