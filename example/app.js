/*
Example Application for Ext.ux.callout.Callout - CSS styleable floating callout container with optional arrow for use with Ext JS 4.0+
http://github.com/CodeCatalyst/Ext.ux.callout.Callout

@author John Yanarella
@version: 1.0

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
*/

Ext.Loader.setConfig({
	enabled: true,
	paths: {
		'Ext.ux.callout': 'ux/callout'
	}
});

Ext.require([
	'Ext.ux.callout.Callout'
]);

Ext.onReady(function () {
	Ext.widget('viewport', {
		layout: 'border',
		padding: 10,
		items: [
			{
				xtype: 'form',
				itemId: 'configurationFormPanel',
				title: 'Configuration',
				region: 'west',
				width: 320,
				autoScroll: true,
				layout: 'anchor',
				defaults: {
					anchor: '100%',
					margin: 10
				},
				items: [
					{
						xtype: 'combobox',
						itemId: 'clsComboBox',
						labelAlign: 'top',
						fieldLabel: 'CSS Class',
						queryMode: 'local',
						editable: false,
						forceSelection: true,
						displayField: 'label',
						valueField: 'value',
						store: Ext.create( 'Ext.data.Store', {
							fields: [ 'label', 'value' ],
							data: [
								{
									label: 'default',
									value: 'default'
								},
								{
									label: 'cartoon',
									value: 'cartoon'
								},
								{
									label: 'fancy-blue',
									value: 'fancy-blue'
								},
								{
									label: 'gray',
									value: 'gray'
								},
								{
									label: 'yellow',
									value: 'yellow'
								}
							]
						}),
						value: 'default'
					},
					{
						xtype: 'numberfield',
						itemId: 'widthNumberField',
						labelAlign: 'top',
						fieldLabel: 'Width',
						value: '200'
					},
					{
						xtype: 'textarea',
						itemId: 'textTextArea',
						labelAlign: 'top',
						fieldLabel: 'Text',
						value: 'Click anywhere to dismiss this callout window.'
					},
					{
						xtype: 'combobox',
						itemId: 'arrowLocationComboBox',
						labelAlign: 'top',
						fieldLabel: 'Arrow Location',
						queryMode: 'local',
						editable: false,
						forceSelection: true,
						displayField: 'label',
						valueField: 'value',
						store: Ext.create( 'Ext.data.Store', {
							fields: [ 'label', 'value' ],
							data: [
								{
									label: '',
									value: ''
								},
								{
									label: 'top',
									value: 'top'
								},
								{
									label: 'bottom',
									value: 'bottom'
								},
								{
									label: 'left',
									value: 'left'
								},
								{
									label: 'right',
									value: 'right'
								},
								{
									label: 'top-right',
									value: 'top-right'
								},
								{
									label: 'top-left',
									value: 'top-left'
								},
								{
									label: 'bottom-right',
									value: 'bottom-right'
								},
								{
									label: 'bottom-left',
									value: 'bottom-left'
								},
								{
									label: 'right-top',
									value: 'right-top'
								},
								{
									label: 'right-bottom',
									value: 'right-bottom'
								},
								{
									label: 'left-top',
									value: 'left-top'
								},
								{
									label: 'left-bottom',
									value: 'left-bottom'
								}
							]
						}),
						value: 'top'
					},
					{
						xtype: 'combobox',
						itemId: 'targetComboBox',
						labelAlign: 'top',
						fieldLabel: 'Target',
						queryMode: 'local',
						editable: false,
						forceSelection: true,
						displayField: 'label',
						valueField: 'value',
						store: Ext.create( 'Ext.data.Store', {
							fields: [ 'label', 'value' ],
							data: [
								{
									label: '(none)',
									value: null
								},
								{
									label: 'Example Panel',
									value: '#examplePanel'
								},
								{
									label: 'Button',
									value: '#exampleButton'
								}
							]
						}),
						value: '#exampleButton',
						listeners: {
							select: function () {
								var targetPropertyFormComponentSelectors = [ '#relativePositionComboBox', '#relativeOffsetFieldsLabel', '#relativeOffsetFieldsContainer' ];
								var noTargetPropertyFormComponentSelectors = [ '#positionFieldsLabel', '#positionFieldsContainer' ];
								
								if (this.getValue() != null) {
									Ext.Array.forEach( targetPropertyFormComponentSelectors, function (selector) {
										Ext.ComponentQuery.query(selector)[0].show();
									});
									Ext.Array.forEach( noTargetPropertyFormComponentSelectors, function (selector) {
										Ext.ComponentQuery.query(selector)[0].hide();
									});
								}
								else {
									Ext.Array.forEach( targetPropertyFormComponentSelectors, function (selector) {
										Ext.ComponentQuery.query(selector)[0].hide();
									});
									Ext.Array.forEach( noTargetPropertyFormComponentSelectors, function (selector) {
										Ext.ComponentQuery.query(selector)[0].show();
									});
								}
							}
						}
					},
					{
						xtype: 'label',
						itemId: 'positionFieldsLabel',
						text: 'Position (x, y):',
						hidden: true
					},
					{
						xtype: 'container',
						itemId: 'positionFieldsContainer',
						layout:  'hbox',
						items: [
							{
								xtype: 'numberfield',
								itemId: 'xNumberField',
								width: '50%',
								margin: '0 5 0 0',
								value: '0'
							},
							{
								xtype: 'numberfield',
								itemId: 'yNumberField',
								width: '50%',
								margin: '0 0 0 5',
								value: '0'
							}
						],
						hidden: true
					},
					{
						xtype: 'combobox',
						itemId: 'relativePositionComboBox',
						labelAlign: 'top',
						fieldLabel: 'Relative Position - see <a href="http://docs.sencha.com/ext-js/4-1/#!/api/Ext.dom.Element-method-alignTo" target="_blank">Ext.dom.Element::alignTo()</a>',
						value: '',
						queryMode: 'local',
						displayField: 'label',
						valueField: 'value',
						store: Ext.create( 'Ext.data.Store', {
							fields: [ 'label', 'value' ],
							data: [
								{
									label: 'c-c',
									value: 'c-c'
								},
								{
									label: 't-b',
									value: 't-b'
								},
								{
									label: 'b-t',
									value: 'b-t'
								},
								{
									label: 'l-r',
									value: 'l-r'
								},
								{
									label: 'r-l',
									value: 'r-l'
								},
								{
									label: 't-t',
									value: 't-t'
								},
								{
									label: 'b-b',
									value: 'b-b'
								},
								{
									label: 'l-l',
									value: 'l-l'
								},
								{
									label: 'r-r',
									value: 'r-r'
								},
								{
									label: 'tr-bl',
									value: 'tr-bl'
								},
								{
									label: 'tl-br',
									value: 'tl-br'
								},
								{
									label: 'bl-tr',
									value: 'bl-tr'
								},
								{
									label: 'br-tl',
									value: 'br-tl'
								}
							]
						}),
						value: 't-b'
					},
					{
						xtype: 'label',
						itemId: 'relativeOffsetFieldsLabel',
						text: 'Relative Offsets (x, y):'
					},
					{
						xtype: 'container',
						itemId: 'relativeOffsetFieldsContainer',
						layout:  'hbox',
						items: [
							{
								xtype: 'numberfield',
								itemId: 'relativeOffsetXNumberField',
								width: '50%',
								margin: '0 5 0 0',
								value: '0'
							},
							{
								xtype: 'numberfield',
								itemId: 'relativeOffsetYNumberField',
								width: '50%',
								margin: '0 0 0 5',
								value: '0'
							}
						]
					},
					{
						xtype: 'numberfield',
						itemId: 'fadeInDurationNumberField',
						labelAlign: 'top',
						fieldLabel: 'Fade In Duration (ms)',
						value: '200'
					},
					{
						xtype: 'numberfield',
						itemId: 'fadeOutDurationNumberField',
						labelAlign: 'top',
						fieldLabel: 'Fade Out Duration (ms)',
						value: '200'
					},
					{
						xtype: 'numberfield',
						itemId: 'dismissDelayNumberField',
						labelAlign: 'top',
						fieldLabel: 'Dismiss Delay (ms)',
						value: '5000'
					}
				],
				bbar: [
					{
						xtype: 'button',
						itemId: 'createCalloutButton',
						cls: 'x-btn-default-small',
						style: 'border-color: #9D9D9D',
						text: 'Create Callout',
						maxWidth: 100,
						handler: function () {
							var configurationFormPanel = Ext.ComponentQuery.query('#configurationFormPanel')[0];
							
							Ext.widget( 'callout', {
								cls:                   configurationFormPanel.down('#clsComboBox').getValue(),
								width:                 configurationFormPanel.down('#widthNumberField').getValue(),
								html:                  configurationFormPanel.down('#textTextArea').getValue(),
								calloutArrowLocation:  configurationFormPanel.down('#arrowLocationComboBox').getValue(),
								x:                     configurationFormPanel.down('#xNumberField').getValue(),
								y:                     configurationFormPanel.down('#yNumberField').getValue(),
								target:                configurationFormPanel.down('#targetComboBox').getValue(),
								relativePosition:      configurationFormPanel.down('#relativePositionComboBox').getValue(),
								relativeOffsets:       [ configurationFormPanel.down('#relativeOffsetXNumberField').getValue(), configurationFormPanel.down('#relativeOffsetYNumberField').getValue() ],
								fadeInDuration:        configurationFormPanel.down('#fadeInDurationNumberField').getValue(),
								fadeOutDuration:       configurationFormPanel.down('#fadeOutDurationNumberField').getValue(),
								dismissDelay:          configurationFormPanel.down('#dismissDelayNumberField').getValue(),
								
								listeners: {
									hide: function () {
										this.destroy();
									}
								}
							}).show();
						}
					},
					{
						xtype: 'tbspacer',
						flex: 1
					},
					{
						xtype: 'button',
						cls: 'x-btn-default-small',
						style: 'border-color: #9D9D9D',
						text: 'View Config',
						handler: function () {
							var configurationFormPanel = Ext.ComponentQuery.query('#configurationFormPanel')[0];
							
							var exampleCode = "Ext.widget('callout', {\n";
							exampleCode += "	cls: '"                    + configurationFormPanel.down('#clsComboBox').getValue() + "',\n";
							exampleCode += "	width: "                   + configurationFormPanel.down('#widthNumberField').getValue() + ",\n";
							exampleCode += "	html: '"                   + configurationFormPanel.down('#textTextArea').getValue() + "',\n";
							exampleCode += "	calloutArrowLocation: '"   + configurationFormPanel.down('#arrowLocationComboBox').getValue() + "',\n";
							if (configurationFormPanel.down('#targetComboBox').getValue() != null) {
								exampleCode += "	target: '"             + configurationFormPanel.down('#targetComboBox').getValue() + "',\n";
								exampleCode += "	relativePosition: '"   + configurationFormPanel.down('#relativePositionComboBox').getValue() + "',\n";
								exampleCode += "	relativeOffsets: ["    + [ configurationFormPanel.down('#relativeOffsetXNumberField').getValue(), configurationFormPanel.down('#relativeOffsetYNumberField').getValue() ] + "],\n";
							}
							else {
								exampleCode += "	x: "                   + configurationFormPanel.down('#xNumberField').getValue() + ",\n";
								exampleCode += "	y: "                   + configurationFormPanel.down('#yNumberField').getValue() + ",\n";
							}
							exampleCode += "	fadeInDuration: "          + configurationFormPanel.down('#fadeInDurationNumberField').getValue() + ",\n";
							exampleCode += "	fadeOutDuration: "         + configurationFormPanel.down('#fadeOutDurationNumberField').getValue() + ",\n";
							exampleCode += "	dismissDelay: "            + configurationFormPanel.down('#dismissDelayNumberField').getValue() + ",\n";
							exampleCode += "});";
							
							Ext.widget( 'callout', {
								cls: 'gray',
								target: this,
								calloutArrowLocation: 'bottom',
								relativePosition: 'b-t',
								dismissDelay: 0,
								width: 500,
								html: '<pre class="example-code prettyprint">' + exampleCode + "</pre>",
								
								listeners: {
									hide: function () {
										this.destroy();
									}
								}
							}).show();
							
							prettyPrint();
						}
					}
				]
			},
			{
				xtype: 'panel',
				itemId: 'examplePanel',
				title: 'Example',
				region: 'center',
				layout: {
					type: 'hbox',
					padding:'5',
					pack:'center',
					align:'middle'
				},
				items: [
					{
						xtype: 'button',
						itemId: 'exampleButton',
						text: 'Button'
					},
					{
						xtype: 'callout',
						itemId: 'exampleCallout'
					}
				]
			},
		],
		
		listeners: {
			boxready: function () {
				Ext.defer( function () {
					Ext.widget( 'callout', {
						cls: 'yellow',
						html: 'Welcome to the <a href="https://github.com/CodeCatalyst/Ext.ux.callout.Callout">Ext.ux.callout.Callout</a> explorer, an example application where you can experiment with configuration values for this custom component and see the corresponding JavaScript code.',
						width: 340,
						target: 'viewport',
						relativePosition: 't-t',
						relativeOffsets: [0, 58]
					}).show();
					
					Ext.widget( 'callout', {
						cls: 'yellow',
						html: '<b>1.</b> Modify the configuration values here.',
						target: '#configurationFormPanel',
						calloutArrowLocation: 'left',
						relativePosition: 'l-r',
						dismissDelay: 0
					}).show();
					
					Ext.widget( 'callout', {
						cls: 'yellow',
						html: '<b>2.</b> Click here.',
						target: '#createCalloutButton',
						calloutArrowLocation: 'bottom-left',
						relativePosition: 'b-tr'
					}).show();
					
					Ext.widget( 'callout', {
						cls: 'yellow',
						html: '<b>3.</b> An example callout will be shown here.',
						target: '#examplePanel',
						relativePosition: 'b-b',
						relativeOffsets: [0, -25]
					}).show();
				}, 50 );
			}
		}
	});
});