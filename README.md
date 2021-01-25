<h1>Vector2d</h1>
<h6>a simple library for 2d vectors (still in testing phase and no minimized version, and documentation is not complete)</h6>
<br>
<br>
<h2>global variables:</h2>
	<h3>COORDINATE.MODE</h3>
		<h5>getter/setter in COORDINATE class, you can set it ONLY to CARTESIAN or POLAR, it represents if Vector2d constructor get cartesian or polar coordinates as arguments</h5>
	<h3>CARTESIAN</h3>
		<h5>an constant that represents cartesian geometry to COORDINATE.MODE</h5>
	<h3>POLAR</h3>
		<h5>an constant that represents polar geometry to COORDINATE.MODE</h5>
<h2>Vector2d constructor:</h2>
	<h3>constructor(x, y)</h3>
		<h5>receives as arguments three numbers<br>x and y are the coordinates of the vector to be created (in cartesian or polar coordinate system, see COORDINATE.MODE for more information)</h4>
<h2>Vector2d properties:</h2>
	<h3>#x</h3>
		<h5>private. the x coordinate</h5>
	<h3>#y</h3>
		<h5>private. the y coordinate</h5>
	<h3>#length</h3>
		<h5>private. the length of the vector</h5>
	<h3>#angle</h3>
		<h5>private. the angle that the vector makes with the x-axis</h5>
<h2>Vector2d getters & setters:</h2>
	<h3>getters:</h3>
		<h4>get x()</h4>
			<h6>public. returns this.#x</h6>
		<h4>get y()</h4>
			<h6>public. returns this.#y</h6>
		<h4>get length()</h4>
			<h6>public. returns this.#length</h6>
		<h4>get angle()</h4>
			<h6>public. returns this.#angle</h6>
	<h3>setters:</h3>
		<h4>set x(x)</h4>
			<h6>public. sets this.#x to x and adjusts this.#length and this.#angle to fit the new x</h6>
		<h4>set y(y)</h4>
			<h6>public. sets this.#y to y and adjusts this.#length and this.#angle to fit the new y</h6>
		<h4>set length(l)</h4>
			<h6>public. sets this.#length to l and adjusts this.#x and this.#y to fit the new length</h6>
		<h4>set angle(a)</h4>
			<h6>public. sets this.#angle to a and adjusts this.#x and this.#y to fit the new angle</h6>
<h2>Vector2d methods:</h2>
	<h3>static:</h3>
		<h4>isVector2d(v)</h4>
			<h6>receives one argument<br>returns true if v is a Vector2d, else returns false</h6>
		<h4>random()</h4>
			<h6>receives no arguments<br>returns a new Vector2d with length 1 and random angle</h6>
	<h3>non-static:</h3>
		<h4>add(v)</h4>
			<h6>receives as an argument a Vector2d object<br>adds v.x to this.x and v.y to this.y</h6>
		<h4>addAngle(val)</h4>
			<h6>receives as an argument a number<br>adds val to this.angle</h6>
		<h4>addLength(val)</h4>
			<h6>receives as an argument a number<br>adds val to this.length</h6>
		<h4>addScalar(val)</h4>
			<h6>receives as an argumente a number<br>adds val to this.x and this.y</h6>
		<h4>ceil()</h4>
			<h6>receives no arguments<br>round up this.x and this.y</h6>
		<h4>ceilAngle()</h4>
			<h6>receives no arguments<br>round up this.angle</h6>
		<h4>ceilLength()</h4>
			<h6>receives no arguments<br>round up this.length</h6>
		<h4>clamp(min, max)</h4>
			<h6>receives as arguments two Vector2d objetcs<br>if this.x is greater than max.x, it is replaced by max.x, if it is less than min.x, it is replaced by min.x. the same for this.y, max.y and min.y</h6>
		<h4>clampAngle(min, max)</h4>
			<h6>receives as arguments two numbers<br>if this.angle is greater than max, it is replaced by max, if it is less than min, it is replaced by min</h6>
		<h4>clampLength(min, max)</h4>
			<h6>receives as arguments two numbers<br>if this.length is greater than max, it is replaced by max, if it is less than min, it is replaced by min</h6>
		<h4>clampScalar(min, max)</h4>
			<h6>receives as arguments two numbers<br>if this.x is greater than max, it is replaced by max, if it is less than min, it is replaced by min. the same for this.y</h6>
		<h4>clone()</h4>
			<h6>receives no arguments<br>returns a new Vector2d with all properties equal to this Vector2d</h6>
		<h4>copy(v)</h4>
			<h6>receives as argument a Vector2d object<br>copies all v properties to this Vector2d</h6>
		<h4>distanceTo(v)</h4>
			<h6>receives as argument a Vector2d object<br>returns the distance from this vector to v</h6>
		<h4>manhattanDistanceTo(v)</h4>
			<h6>receives as argument a Vector2d object<br>returns the manhattan/taxicab distance from this vector to v (see https://en.wikipedia.org/wiki/Taxicab_geometry for more details)</h6>
		<h4>distanceToSquared(v)</h4>
			<h6>receives as argument a Vector2d object<br>returns the distance from this vector to v squared, good to campare distances because it is slightly faster than distanceTo()</h6>
		<h4>divide(v)</h4>
			<h6>receives as argument a Vector2d object<br>divides this.x by v.x and this.y by v.y</h6>
		<h4>divideAngle(val)</h4>
			<h6>receives as argument a number<br>divides this.angle by val</h6>
		<h4>divideLength(val)</h4>
			<h6>receives as argument a number<br>divides this.length by val</h6>
		<h4>divideScalar(val)</h4>
			<h6>receives as argument a number<br>divides this.x and this.y by val</h6>
		<h4>dot(v)</h4>
			<h6>receives as argument a Vector2d object<br>return the dot product of this Vector and v</h6>
		<h4>cross(v)</h4>
			<h6>receives as argument a Vector2d object<br>return the z value of the cross product of this Vector and v</h6>
		<h4>equals(v)</h4>
			<h6>receives as argument a Vector2d object<br>returns true if the two vectors represent the same location, else returns false</h6>
		<h4>floor()</h4>
			<h6>receives no arguments<br>rounds down this.x and this.y</h6>
		<h4>floorAngle()</h4>
			<h6>receives no arguments<br>rounds down this.angle</h6>
		<h4>floorLength()</h4>
			<h6>receives no arguments<br>rounds down this.length</h6>
		<h4>lerp(v, amt)</h4>
			<h6>receives as arguments one Vector2d object and one number<br>sets this vector coordinates to the linear interpolation of this vector and v, where amt is the percent distance along the line connecting this vector and v, amt = 0 will be this Vector, amt = 1 will be v (for more details see https://en.wikipedia.org/wiki/Linear_interpolation)</h6>
		<h4>lerpBeetwen(v1, v2, amt)</h4>
			<h6>receives as arguments two Vector2d object and one number<br>sets this vector coordinates to the linear interpolation of v1 and v2, where amt is the percent distance along the line connecting v1 and v2, amt = 0 will be v1, amt = 1 will be v2 (for more details see https://en.wikipedia.org/wiki/Linear_interpolation)</h6>
		<h4>lerpAngle(a, amt)</h4>
			<h6>receives as arguments two numbers<br>sets this.angle to the linear interpolation beetwen this.angle and a, where amt is the percent distance beetwen this.angle and a, amt = 0 will be this.angle, amt = 1 will be a (for more details see https://en.wikipedia.org/wiki/Linear_interpolation)</h6>
		<h4>lerpAngleBeetwen(a1, a2, amt)</h4>
			<h6>receives as arguments three numbers<br>sets this.angle to the linear interpolation of a1 and a2, where amt is the percent distance beetwen v1 and v2, amt = 0 will be a1, amt = 1 will be a2 (for more details see https://en.wikipedia.org/wiki/Linear_interpolation)</h6>
		<h4>lerpLength(l, amt)</h4>
			<h6>receives as arguments two numbers<br>sets this.length to the linear interpolation beetwen this.length and l, where amt is the percent distance beetwen this.length and l, amt = 0 will be this.length, amt = 1 will be l (for more details see https://en.wikipedia.org/wiki/Linear_interpolation)</h6>
		<h4>lerpLengthBeetwen(l1, l2, amt)</h4>
			<h6>receives as arguments three numbers<br>sets this.length to the linear interpolation of l1 and l2, where amt is the percent distance beetwen l1 and l2, amt = 0 will be l1, amt = 1 will be l2 (for more details see https://en.wikipedia.org/wiki/Linear_interpolation)</h6>
		<h4>inverse()</h4>
			<h6>receives no arguments<br>multiply this.x and this.y by -1</h6>
		<h4>inverseAngle()</h4>
			<h6>receives no arguments<br>multiply this.angle by -1</h6>
		<h4>normalize()</h4>
			<h6>receives no arguments<br>sets this.length to 1, in others words, transforms this vector in a unit vector</h6>
		<h4>multiply(v)</h4>
			<h6>receives as argument one Vector2d object<br>multiplies this.x by v.x and this.y by v.y</h6>
		<h4>multiplyAngle(val)</h4>
			<h6>receives as argument one number<br>multiplies this.angle by val</h6>
		<h4>multiplyLength(val)</h4>
			<h6>receives as argument one number<br>multiplies this.length by val</h6>
		<h4>multiplyScalar(val)</h4>
			<h6>receives as argument one number<br>multiplies this.x and this.y by val</h6>
		<h4>rotateAround(center, angle)</h4>
			<h6>receives as argument one Vector2d object and one number<br>rotates this vector around center by angle degrees</h6>
		<h4>round()</h4>
			<h6>receives no arguments<br>rounds this.x and this.y to the nearest integer</h6>
		<h4>roundToZero()</h4>
			<h6>receives no arguments<br>rounds this.x and this.y towards 0 (up if negative, down if positive) to an integer value</h6>
		<h4>roundAwayFromZero()</h4>
			<h6>receives no arguments<br>rounds this.x and this.y away from 0 (up if positive, down if negative) to an integer value</h6>
		<h4>roundAngle()</h4>
			<h6>receives no arguments<br>rounds this.angle to the nearest integer</h6>
		<h4>roundAngleToZero()</h4>
			<h6>receives no arguments<br>rounds this.angle towards 0 (up if negative, down if positive) to an integer value</h6>
		<h4>roundAngleAwayFromZero()</h4>
			<h6>receives no arguments<br>rounds this.angle away from 0 (up if positive, down if negative) to an integer value</h6>
		<h4>roundLength()</h4>
			<h6>receives no arguments<br>rounds this.length to the nearest integer</h6>
		<h4>roundLengthToZero()</h4>
			<h6>receives no arguments<br>rounds this.length towards 0 (up if negative, down if positive) to an integer value</h6>
		<h4>roundLengthAwayFromZero()</h4>
			<h6>receives no arguments<br>rounds this.length away from 0 (up if positive, down if negative) to an integer value</h6>
		<h4>set(x, y)</h4>
			<h6>receives as arguments two numbers<br>sets this vector coordinates to (x, y)</h6>
		<h4>setScalar(val)</h4>
			<h6>receives as argument one number<br>sets this vector coordinates to (val, val)</h6>
		<h4>setPolar(r, theta)</h4>
			<h6>receives as arguments two numbers<br>sets this vector polar coordinates to (r, theta)</h6>
		<h4>setPolarScalar(val)</h4>
			<h6>receives as argument one number<br>sets this vector polar coordinates to (val, val)<h6>
		<h4>sub(v)</h4>
			<h6>receives as an argument a Vector2d object<br>subtracts v.x to this.x and v.y to this.y</h6>
		<h4>subAngle(val)</h4>
			<h6>receives as an argument a number<br>subtracts val to this.angle</h6>
		<h4>subLength(val)</h4>
			<h6>receives as an argument a number<br>subtracts val to this.length</h6>
		<h4>subScalar(val)</h4>
			<h6>receives as an argumente a number<br>subtracts val to this.x and this.y</h6>
