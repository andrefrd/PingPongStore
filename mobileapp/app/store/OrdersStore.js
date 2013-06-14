/*
 * File: app/store/OrdersStore.js
 *
 * This file was generated by Sencha Architect version 2.3.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Fulfill.store.OrdersStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Fulfill.model.Orders'
    ],

    config: {
        autoLoad: true,
        model: 'Fulfill.model.Orders',
        storeId: 'ordersStore',
        proxy: {
            type: 'direct',
            directFn: Fulfill.ss.DXOrders.getPendingOrders,
            reader: {
                type: 'json'
            }
        }
    }
});