/*
 * File: app/view/OrderList.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Fulfill.view.OrderList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.orderlist',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        disableSelection: true,
        emptyText: 'No orders to fulfill.',
        store: 'ordersStore',
        itemTpl: Ext.create('Ext.XTemplate', 
            '<div class="order-list-element order-{category}">',
            '    <div class="customer">{name}</div>',
            '    <div class="orderId">{state}{orderId}</div>',
            '    <div class="total">{total:this.usMoney}</div>',
            '</div>',
            {
                usMoney: function(num) {
                    return '$' + num.toFixed(2);
                }
            }
        ),
        plugins: [
            {
                type: 'pullrefresh'
            }
        ],
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'segmentedbutton',
                        flex: 1,
                        id: 'segButton',
                        itemId: 'mysegmentedbutton',
                        allowMultiple: true,
                        items: [
                            {
                                xtype: 'button',
                                flex: 1,
                                pressed: true,
                                text: 'Enterprise'
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                pressed: true,
                                text: 'Individual'
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                pressed: true,
                                text: 'SMB'
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                pressed: true,
                                text: 'Team'
                            }
                        ]
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onButtonTap',
                event: 'tap',
                delegate: '#segButton button'
            },
            {
                fn: 'onSegButtonToggle',
                event: 'toggle',
                delegate: '#segButton'
            }
        ]
    },

    onButtonTap: function(button, e, eOpts) {
        var segButton = Ext.getCmp('segButton'),
            pressedButtons = segButton.getPressedButtons(),
            isPressed = segButton.isPressed(button);

        if (!isPressed && pressedButtons.length < 1) {
            return false;
        }
        this.fireEvent('segbuttontap', button.getText(), isPressed);
    },

    onSegButtonToggle: function(segmentedbutton, button, isPressed, eOpts) {
        var pressedButtons = segmentedbutton.getPressedButtons();
        if (pressedButtons.length === 1) {
            pressedButtons[0].disable();
        } else {
            var buttons = segmentedbutton.getItems();
            buttons.each(function(button) {
                button.enable();
            });
        }
    }

});