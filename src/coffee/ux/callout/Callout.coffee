###
Ext.ux.callout.Callout - CSS styleable floating callout container with optional arrow for use with Ext JS 4.0+
http://github.com/CodeCatalyst/Ext.ux.callout.Callout

@author John Yanarella
@version: 1.0.1

Copyright (c) 2012 CodeCatalyst, LLC - http://www.codecatalyst.com/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
###

Ext.define( 'Ext.ux.callout.Callout',
	extend: 'Ext.Container'
	alias: 'widget.callout'
	
	cls: 'default'
	componentCls: 'x-ux-callout'
	floating: true
	shadow: false
	padding: 16
	
	config:
		###*
		@cfg {Ext.Component} Target {@link Ext.Component} (optional).
		###
		target: null
		
		###*
		@cfg {String} Position relative to {@link #target} - see {@link Ext.Element#alignTo} for valid values.
		###
		relativePosition: 'c-c'
		
		###*
		@cfg {Array} X and Y offset relative to {@link #target} (optional).
		###
		relativeOffsets: null
		
		###*
		@cfg {String} Callout arrow location - valid values: none, top, bottom, left, right, top-right, top-left, bottom-right, bottom-left, left-top, left-bottom, right-top, right-bottom
		###
		calloutArrowLocation: 'none'
		
		###*
		@cfg {Number} Duration in milliseconds for the fade in animation when a callout is shown.
		###
		fadeInDuration: 200
		
		###*
		@cfg {Number} Duration in milliseconds for the fade out animation when a callout is hidden.
		###
		fadeOutDuration: 200
		
		###*
		@cfg {Boolean] Indicates whether to automatically hide the callout after a mouse click anywhere outside of the callout.
		###
		autoHide: true
		
		###*
		@cfg {Number} Duration in milliseconds to show the callout before automatically dismissing it.  A value of 0 will disable automatic dismissal.
		###
		dismissDelay: 0
	
	###*
	@protected
	@property {Object} The dismissal timer id.
	###
	dismissTimer: null
	
	###*
	@inheritdoc
	###
	initComponent: ->
		# Workaround: Ext JS 4.0 doesn't apply our default configuration values.
		if Ext.getVersion( 'extjs' ) and Ext.getVersion( 'extjs' ).isLessThan( '4.1.0' )
			Ext.applyIf( @, @config )
		
		return @callParent( arguments )
	
	###*
	@inheritdoc
	###
	destroy: ->
		@clearTimers()
		return @callParent( arguments )
	
	###*
	@inheritdoc
	###
	show: ->
		@callParent( arguments )
		
		@removeCls( [ 'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left-top', 'left-bottom', 'right-top', 'right-bottom' ] )
		@addCls( @getCalloutArrowLocation() ) if @getCalloutArrowLocation() isnt 'none'
		
		if @getTarget()?
			elementOrComponent = if Ext.isString( @getTarget() ) then Ext.ComponentQuery.query( @getTarget() )[0] else @getTarget()
			@getEl().anchorTo( 
				elementOrComponent.el || elementOrComponent, 
				@getRelativePosition(), 
				@getRelativeOffsets() || [ 0, 0 ], 
				false, 
				50, 
				Ext.bind(
					->
						@afterSetPosition( @getEl().getLeft(), @getEl().getRight() )
						return
					@
				)
			)
		
		if not @dismissTimer? and @getDismissDelay() > 0
			@dismissTimer = Ext.defer( @hide, @getDismissDelay(), @ )
		return @
	
	###*
	@inheritdoc
	###
	hide: ->
		@clearTimers()
		if @rendered
			@getEl().removeAnchor()
		return @callParent( arguments )
	
	###*
	@protected
	@method
	Clear any timers that potentially be running.
	###
	clearTimers: ->
		clearTimeout( @dismissTimer ) if @dismissTimer?
		@dismissTimer = null
		return
	
	###*
	@inheritdoc
	###
	onShow: ->
		@callParent( arguments )
		
		@mon( Ext.getDoc(), 'mousedown', @onDocMouseDown, @ )
		
		if @getFadeInDuration() > 0
			@getEl().setOpacity( 0.0 )
			@getEl().fadeIn(
				duration: @getFadeInDuration()
			)
		return
	
	###*
	@inheritdoc
	###
	onHide: ( animateTarget, cb, scope ) ->
		@mun( Ext.getDoc(), 'mousedown', @onDocMouseDown, @ )
		
		if @getFadeOutDuration() > 0
			@getEl().fadeOut(
				duration: @getFadeOutDuration()
				callback: ->
					@getEl().hide()
					@afterHide( cb, scope )
					return
				scope: @
			)
		else
			@callParent( arguments )
		return
	
	###*
	@protected
	Handles a 'mousedown' event on the current HTML document.
	###
	onDocMouseDown: ( event ) ->
		if @getAutoHide() and not event.within( @getEl() )
			@hide()
		return
)
