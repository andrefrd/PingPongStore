/*
 * File: app/view/CustomerDetail.js
 *
 * This file was generated by Sencha Architect version 2.3.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Orders.view.CustomerDetail', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.customerdetail',

    requires: [
        'Orders.view.ContactInfo',
        'Orders.view.MoneyColumn'
    ],

    layout: {
        align: 'stretch',
        padding: 10,
        type: 'vbox'
    },
    title: '{name}',

    initComponent: function() {
        var me = this;

        me.addEvents(
            'orderselect',
            'neworder'
        );

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    height: 173,
                    layout: {
                        align: 'stretch',
                        padding: 10,
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype: 'contactinfo',
                            border: 1,
                            margin: '0 20 0 0',
                            padding: 10
                        },
                        {
                            xtype: 'chart',
                            flex: 1,
                            width: 400,
                            animate: true,
                            insetPadding: 5,
                            store: 'PeriodTotals',
                            axes: [
                                {
                                    type: 'Numeric',
                                    fields: [
                                        'total'
                                    ],
                                    label: {
                                        renderer: Ext.util.Format.currency
                                    },
                                    position: 'left'
                                },
                                {
                                    type: 'Category',
                                    fields: [
                                        'quarter'
                                    ],
                                    label: {
                                        field: 'quarter',
                                        renderer: function(val) {
                                            // reformat: 2013-Q1 -> Q1 2013
                                            return val.split('-').reverse().join(' ');
                                        }
                                    },
                                    position: 'bottom'
                                }
                            ],
                            series: [
                                {
                                    type: 'line',
                                    shadowAttributes: [
                                        
                                    ],
                                    tips: {
                                        trackMouse: true,
                                        renderer: function(storeItem, item) {
                                            this.update(
                                                storeItem.get('quarter').split('-').reverse().join(' ') + ': ' +
                                                Ext.util.Format.currency(storeItem.get('total'))
                                            );
                                        }
                                    },
                                    axis: 'left',
                                    xField: 'quarter',
                                    yField: 'total',
                                    fill: true,
                                    markerConfig: {
                                        type: 'circle',
                                        radius: 5,
                                        fill: '#4db8ed',
                                        stroke: 'none'
                                    },
                                    style: {
                                        stroke: '#4db8ed',
                                        'stroke-width': 3,
                                        fill: '#a6dcf6'
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    margins: '10 0',
                    layout: {
                        align: 'stretch',
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype: 'button',
                            iconCls: 'icon-add',
                            text: 'New Order',
                            listeners: {
                                click: {
                                    fn: me.onNewOrderClick,
                                    scope: me
                                }
                            }
                        }
                    ]
                },
                {
                    xtype: 'gridpanel',
                    flex: 1,
                    itemId: 'ordersGrid',
                    disableSelection: true,
                    store: 'Orders',
                    listeners: {
                        itemclick: {
                            fn: me.onOrdersGridItemClick,
                            scope: me
                        }
                    },
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'orderNo',
                            text: 'Orders',
                            flex: 1
                        },
                        {
                            xtype: 'datecolumn',
                            dataIndex: 'orderDate',
                            text: 'Order Date'
                        },
                        {
                            xtype: 'datecolumn',
                            dataIndex: 'shippedDate',
                            text: 'Ship Date'
                        },
                        {
                            xtype: 'moneycolumn',
                            dataIndex: 'total',
                            text: 'Total'
                        },
                        {
                            xtype: 'moneycolumn',
                            dataIndex: 'balance',
                            text: 'Balance'
                        }
                    ],
                    viewConfig: {
                        stripeRows: false
                    }
                }
            ]
        });

        me.callParent(arguments);
    },

    onNewOrderClick: function(button, e, eOpts) {
        this.fireEvent('neworder', this.customer);
    },

    onOrdersGridItemClick: function(dataview, record, item, index, e, eOpts) {
        this.fireEvent('orderselect', this, this.customer, record);
    },

    setCustomer: function(customer) {
        this.setTitle(customer.get('name'));
        this.down('contactinfo').update(customer.getData());
        this.customer = customer;
    }

});