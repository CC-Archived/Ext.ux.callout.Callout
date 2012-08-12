# Ext.ux.callout.Callout

A CSS styleable floating callout container with optional arrow for use with Ext JS 4.0+.

It is useful for creating:

* hint overlays
* interactive callout windows / popovers

# About

An `Ext.ux.callout.Callout` can be easily configured to:

* show its associated callout arrow at various locations, including:
	* top, bottom, left, right, top-left, top-right, bottom-left, bottom-right, left-top, left-bottom, right-top, right-bottom.
* position itself relative to a target `Ext.Element` or `Ext.Component`, and
	* it will maintain that relative position when that target moves or the browser resizes
* automatically hide itself in response to mouse clicks outside the callout bounds
* automatically dismiss itself after a configurable delay
* fade in when shown and fade out when hidden

Because an `Ext.ux.callout.Callout` is an `Ext.Container` subclass, its content is not limited to text.  An `Ext.ux.callout.Callout` can be configured with any standard container layout (via the `layout` config) and populated with `Ext.Component`s (via the `item` config). 

Its appearance and the associated callout arrow's appearance are configured through CSS.  This distribution includes several example CSS-based themes that can be applied to the `Ext.ux.callout.Callout` via the `cls` config.

Also included are the the original [LESS](http://lesscss.org/) source files and mixins used to generate those example CSS-based themes.  Leveraging the supplied mixins, you can easily create your own custom callout themes, by supplying alternate values for the:

* background color
* arrow size
* border color
* border size
* border radius
* drop shadow
* font, etc.

# Example

[![Screenshot](https://github.com/CodeCatalyst/Ext.ux.callout.Callout/raw/master/example/resource/image/screenshot.png)](http://lab.codecatalyst.com/Ext.ux.callout.Callout/)

Included in this distribution is an example application that demonstrates the use of `Ext.ux.callout.Callout` to present hint overlays and a popover window as part of its user interface.  Additionally, the application presents a "playground" for interactively experimenting with `Ext.ux.callout.Callout`; you can  create callouts, experiment with their available configuration values, and view and copy the JavaScript code necessary to create a callout with those configuration values.

You can try out a live deployment of this example application here: [http://lab.codecatalyst.com/Ext.ux.callout.Callout/](http://lab.codecatalyst.com/Ext.ux.callout.Callout/).

# Version History

* 1.0 - Initial release.

# License

Copyright (c) 2012 CodeCatalyst, LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


# Acknowledgements

* The sample LESS mixin and associated CSS themes provided were derived from the CSS arrow technique demonstrated by [http://cssarrowplease.com](http://cssarrowplease.com).
