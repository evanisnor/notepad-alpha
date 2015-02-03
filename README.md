notepad-alpha
=============

A non-persistent, single-page, mobile-friendly notepad application. RequireJS, Handlebars, jQuery, LESS.

[View the demo!](http://evanisnor.github.io/notepad-alpha/)

Reflection
-------------

I have some experience in crafting modular Javascript with RequireJS and Node.js, but I am used to using Knockout.js for my DOM binding. In the past I have been guilty of cluttering my Knockout templates with more than just simple view logic: anonymous click functions, complex conditions for element visibility, etc. The simplicity of Handlebars templates really appeal to me, as it's not possible to encounter such pitfalls. I wanted to take my modular JS skills to the next level by having modules that define their own functionality, templates and stylesheets. I realize now that this is not beneficial as I have effectively coupled my view and my controller logic in the most cumbersome and inefficient of ways.

I realized about halfway though that even though the 'note.js' script encapsulates the state of a note, the view template that I assigned to it only renders as an item in the list of notes. This seems extra odd because now there is a disparity between the behavior of a note and how it is displayed -- the actual, editable note view is part of the 'notepad.html' template. Architecturally, not the best decision.

Since I decided not to use Knockout or something equally beefy for my DOM binding, I defaulted to jQuery. Since I decided to load Handlebars templates along with modules, I had to make calls to render them manually. Also, since Handlebars doesn't support template composition, I had to write an inline-helper to do it for me. So I had essentially built a relatively large (potentially unmaintainable) template tree that had to be re-rendered in its entirety every time something in any one of the child templates had changed. In addition to this, every time I wanted to update the view with one of these changes (such as changing the name of a note, or editing note content), I had to write a click handler with jQuery in order to call the only render function. To make things worse, since I wanted to update DOM elements that had to be re-rendered, I had to place the binding calls to these elements *within* my render function. My notepad.js file is full of click handlers that I really wish I didn't have to write in such a place.

Next time around I think I will avoid using Handlebars for apps that require frequent dynamic updates to the view. I think for most applications Knockout can be a bit overkill, so something in between would be nice. More to my own errors, though, having controller modules provide their own templates and stylesheets forces you to couple your view and your logic. I think in the future I might break out my view into a separate series of viewmodel modules that merely utilize controller modules to feed them data. Perhaps even something [Hexagonal](http://alistair.cockburn.us/Hexagonal+architecture)?
