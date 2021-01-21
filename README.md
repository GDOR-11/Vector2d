<h1>Vector2d</h1>
<h6>a simple library for 2d vectors (still in testing phase and no minimized version, and documentation is not complete)</h6>
<br>
<br>
<h2>global variables:</h2>
	<h3>COORDINATE.MODE</h3>
		<h4>getter/setter in COORDINATE class, you can set it ONLY to CARTESIAN or POLAR, it represents if Vector constructors get cartesian or polar coordinates as arguments</h4>
	<h3>CARTESIAN</h3>
		<h4>an constant that represents cartesian geometry to COORDINATE.MODE</h4>
	<h3>POLAR</h3>
		<h4>an constant that represents polar geometry to COORDINATE.MODE</h4>
<h2>Vector constructor:</h2>
	<h3>constructor(x, y)</h3>
		<h4>receives as arguments three numbers<br>x and y are the coordinates of the Vector to be created (in cartesian or polar coordinate system, see COORDINATE.MODE for more information)</h4>
<h2>Vector properties:</h2>
	<h3>#x</h3>
		<h4>private. the x coordinate</h4>
	<h3>#y</h3>
		<h4>private. the y coordinate</h4>
	<h3>#length</h3>
		<h4>private. the length of the vector</h4>
	<h3>#angle</h3>
		<h4>private. the angle that the vector makes with the x-axis</h4>
<h2>Vector getters & setters:</h2>
	<h3>getters:</h3>
		<h4>get x()</h4>
			<h5>public. returns this.#x</h5>
		<h4>get y()</h4>
			<h5>public. returns this.#y</h5>
		<h4>get length()</h4>
			<h5>public. returns this.#length</h5>
		<h4>get angle()</h4>
			<h5>public. returns this.#angle</h5>
	<h2>setters:</h2>
		<h4>set x(x)</h4>
			<h5>public. sets this.#x to x and adjusts this.#length and this.#angle to fit the new x</h5>
		<h4>set y(y)</h4>
			<h5>public. sets this.#y to y and adjusts this.#length and this.#angle to fit the new y</h5>
		<h4>set length(l)</h4>
			<h5>public. sets this.#length to l and adjusts this.#x and this.#y to fit the new length</h5>
		<h4>set angle(a)</h4>
			<h5>public. sets this.#angle to a and adjusts this.#x and this.#y to fit the new angle</h5>
<h1>Vector methods:</h1>
	<h2>static:</h2>
		<h4>random()</h4>
			<h5>returns a new random Vector with length 1 and random angle</h5>
	<h2>non-static:</h2>
		<h4>add(v)</h4>
			<h5>receives as an argument a Vector object<br>adds v.x to this.x and v.y to this.y</h5>
		<h4>addAngle(val)</h4>
			<h5>receives as an argument a number<br>adds val to this.angle</h5>
		<h4>addLength(val)</h4>
			<h5>receives as an argument a number<br>adds val to this.length</h5>
		<h4>addScalar(value)</h4>
			<h5>receives as an argumente a number<br>adds value to this.x and this.y</h5>
		<h4>ceil()</h4>
			<h5>receives no arguments<br>round up this.x and this.y</h5>
		<h4>ceilAngle()</h4>
			<h5>receives no arguments<br>round up this.angle</h5>
		<h4>ceilLength()</h4>
			<h5>receives no arguments<br>round up this.length</h5>
		<h4>clamp(min, max)</h4>
			<h5>receives as arguments two Vector objetcs<br>if this.x is greater than max.x, it is replaced by max.x, if it is less than min.x, it is replaced by min.x. the same for this.y, max.y and min.y</h5>
		<h4>clampAngle(min, max)</h4>
			<h5>receives as arguments two numbers<br>if this.angle is greater than max, it is replaced by max, if it is less than min, it is replaced by min</h5>
		<h4>clampLength(min, max)</h4>
			<h5>receives as arguments two numbers<br>if this.length is greater than max, it is replaced by max, if it is less than min, it is replaced by min</h5>
		<h4>clampScalar(min, max)</h4>
			<h5>receives as arguments two numbers<br>if this.x is greater than max, it is replaced by max, if it is less than min, it is replaced by min. the same for this.y</h5>
		<h4>clone()</h4>
			<h5>receives no arguments<br>returns a new Vector with all properties equal to this Vector</h5>
		<h4>copy(v)</h4>
			<h5>receives as argument a Vector object<br>copies all v properties to this Vector</h5>
		<h4>distanceTo(v)</h4>
			<h5>receives as argument a Vector object<br>returns the distance from this Vector to v</h5>
		<h4>manhattanDistanceTo(v)</h4>
			<h5>receives as argument a Vector object<br>returns the manhattan/taxicab distance from this Vector to v (see https://en.wikipedia.org/wiki/Taxicab_geometry for more details)</h5>
		<h4>distanceToSquared(v)</h4>
			<h5>receives as argument a Vector object<br>returns th distance from this Vector to v squared, good to campare distances because it is slightly faster than distanceTo()</h5>
		<h4>divide(v)</h4>
			<h5>receives as argument a Vector object<br>divides this.x by v.x and this.y by v.y</h5>
		<h4>divideAngle(val)</h4>
			<h5>receives as argument a number<br>divides this.angle by val</h5>
		<h4>divideLength(val)</h4>
			<h5>receives as argument a number<br>divides this.length by val</h5>
		<h4>divideScalar(val)</h4>
			<h5>receives as argument a number<br>divides this.x and this.y by val</h5>
		<h4>dot(v)</h4>
			<h5>receives as argument a Vector object<br>return the dot product of this Vector and v</h5>
		<h4>cross(v)</h4>
			<h5>receives as argument a Vector object<br>return the z value of the cross product of this Vector and v</h5>
		<h4>equals(v)</h4>
			<h5>receives as argument a Vector object<br>returns true if the two vectors represent the same location, else returns false</h5>
		<h4>floor()</h4>
			<h5>receives no arguments<br>rounds down this.x and this.y</h5>
		<h4>floorAngle()</h4>
			<h5>receives no arguments<br>rounds down this.angle</h5>
		<h4>floorLength()</h4>
			<h5>receives no arguments<br>rounds down this.length</h5>
		<h4>lerp(v, amt)</h4>
			<h5>receives as arguments one Vector object and one number<br>sets this Vector coordinates to the linear interpolation of this Vector and v, where amt is the percent distance along the line connecting this Vector and v, amt = 0 will be this Vector, amt = 1 will be v (for more details see https://en.wikipedia.org/wiki/Linear_interpolation)</h5>
		<h4>lerpBeetwen(v1, v2, amt)</h4>
			<h5>receives as arguments two Vector object and one number<br>sets this Vector coordinates to the linear interpolation of v1 and v2, where amt is the percent distance along the line connecting v1 and v2, amt = 0 will be v1, amt = 1 will be v2 (for more details see https://en.wikipedia.org/wiki/Linear_interpolation)</h5>
		<h4>lerpAngle(a, amt)</h4>
			<h5>receives as arguments two numbers<br>sets this.angle to the linear interpolation beetwen this.angle and a, where amt is the percent distance beetwen this.angle and a, amt = 0 will be this.angle, amt = 1 will be a (for more details see https://en.wikipedia.org/wiki/Linear_interpolation)</h5>
		<h4>lerpAngleBeetwen(a1, a2, amt)</h4>
			<h5>receives as arguments three numbers<br>sets this.angle to the linear interpolation of a1 and a2, where amt is the percent distance beetwen v1 and v2, amt = 0 will be a1, amt = 1 will be a2 (for more details see https://en.wikipedia.org/wiki/Linear_interpolation)</h5>
		<h4>lerpLength(l, amt)</h4>
			<h5>receives as arguments two numbers<br>sets this.length to the linear interpolation beetwen this.length and l, where amt is the percent distance beetwen this.length and l, amt = 0 will be this.length, amt = 1 will be l (for more details see https://en.wikipedia.org/wiki/Linear_interpolation)</h5>
		<h4>lerpLengthBeetwen(l1, l2, amt)</h4>
			<h5>receives as arguments three numbers<br>sets this.length to the linear interpolation of l1 and l2, where amt is the percent distance beetwen l1 and l2, amt = 0 will be l1, amt = 1 will be l2 (for more details see https://en.wikipedia.org/wiki/Linear_interpolation)</h5>
