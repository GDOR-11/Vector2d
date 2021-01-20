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
receives as an argument a Vector object, adds v.x to this.x and v.y to this.y
<h4>addAngle(a)</h4>
receives as an argument a Number, adds a to this.angle
<h4>addLength(l)</h4>
receives as an argument a Number, adds l to this.length
<h4>addScalar(value)</h4>
receives as an argumente a Number, adds value to this.x and this.y
<h4>ceil()</h4>
receives no arguments, round up this.x and this.y
