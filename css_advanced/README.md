This is a project in advanced HTML and CSS
![alt text](image.png)

Tag vs Class vs Id (Selectors)
Nowadays developers tend to target less IDs in their CSS. The reason behind is that IDs should always be unique on a page. And for a maximum flexibility, the usage of only classes simplify the reusability of parts of the UI.

Cascading or order
* { } /* select all elements */
section /* select all section tags */
.my-class { } /* select all elements with that class */
.my-block > .my-title { }
.my-block + .my-title { }
.my-block ~ .my-title { }
#my-div /* select the element with that ID  */
Colors
The color CSS property sets the color value of a text HTML element.

Colors in CSS are represented most commontly represented by names, hexadecimal or RGB values.

Accessibility tip
When choosing colors for your design, you should always take accessibility into consideration. Modern browsers have now an easy way to show if a color is accessible or not

Code example
p { color: red; }
p { color: #f00; }
p { color: #ff0000; }
p { color: rgb(255,0,0); }
p { color: rgb(100%, 0%, 0%); }
p { color: hsl(0, 100%, 50%); }
Resources
color - CSS: Cascading Style Sheets | MDN
List of colors
Colors - A nicer color palette for the web.
Color Names — HTML Color Codes
CSS colour names
rgb(112, 128, 144) ✿ CSS.coloratum
CSS Variables
Custom properties or also called CSS variables represent custom properties that contain a value that can be reused across declarations.

Resources
var() - CSS: Cascading Style Sheets | MDN
Custom properties (–*): CSS variables - CSS: Cascading Style Sheets | MDN
Code example
:root {
  --main-bg-color: blue;
}
body {
  color: var(--main-bg-color);
}
Units and Values
Multiple CSS units can be used in your CSS. px (pixel) is the most used and an absolute lenght units, in contrast with relative lenght units.

Both (absolute and relative) are used in different contexts.

Rem: font size, padding, margin Em: media queries

Warning!
REM is relative to the root element: the <html> tag not <body> tag

Code example
font-size: 2rem;
padding: 1.2rem 2rem;
Resources
CSS values and units - Learn web development | MDN

Line-height
The line-height CSS property sets the height between lines of text.

Advanced HTML

![alt text](image-1.png)
