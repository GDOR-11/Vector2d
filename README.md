# Vector2d
a simple library for 2d vectors (still in testing phase and no minimized version)
<br>
<br>
<h1>properties:</h1>
<h4>x</h4>
the x coordinate
<h4>y</h4>
the y coordinate
<h4>length</h4>
length of the vector
<h4>angle</h4>
angle that the vector makes with the x-axis
<h1>methods:</h1>
<h2>static:</h2>
<h4>random()</h4>
returns a new random Vector with range x: [0, 1) y: [0, 1)
<h2>non-static:</h2>
<h4>add(v)</h4>
receives as an argument a Vector object<br>adds v.x to this.x and v.y to this.y
<h4>addAngle(a)</h4>
receives as an argument a Number<br>adds a to this.angle
<h4>addLength(l)</h4>
receives as an argument a Number<br>adds l to this.length
<h4>addScalar(value)</h4>
receives as an argumente a Number<br>adds value to this.x and this.y
<h4>ceil()</h4>
receives no arguments<br>round up this.x and this.y
<h4>ceilAngle()</h4>
receives no arguments<br>round up this.angle
<h4>ceilLength()</h4>
receives no arguments<br>round up this.length
<h4>clamp(min, max)</h4>
receives as arguments two Vector objetcs<br>if this.x is greater than max.x, it is replaced by max.x, if it is less than min.x, it is replaced by min.x. the same for this.y, max.y and min.y
<h4>clampAngle(min, max)</h4>
receives as arguments two numbers<br>if this.angle is greater than max, it is replaced by max, if it is less than min, it is replaced by min
<h4>clampLength(min, max)</h4>
receives as arguments two numbers<br>if this.length is greater than max, it is replaced by max, if it is less than min, it is replaced by min
<h4>clampScalar(min, max)</h4>
receives as arguments two numbers<br>if this.x is greater than max, it is replaced by max, if it is less than min, it is replaced by min. the same for this.y
<h4>clone()</h4>
receives no arguments<br>returns a new Vector with all properties equal to this Vector
<h4>copy(v)</h4>
receives as argument a Vector object<br>copies all v properties to this Vector
<h4>distanceTo(v)</h4>
receives as argument a Vector object<br>returns the distance from this Vector to v
<h4>manhattanDistanceTo(v)</h4>
receives as argument a Vector object<br>returns the manhattan/taxicab distance from this Vector to v (see https://en.wikipedia.org/wiki/Taxicab_geometry for more details)
