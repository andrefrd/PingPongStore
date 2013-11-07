/*
 * File: app/model/Item.js
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

Ext.define('Fulfill.model.Item', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'itemId',
                type: 'int'
            },
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'description',
                type: 'string'
            },
            {
                name: 'imgUrl',
                type: 'string'
            },
            {
                name: 'quantityInStock',
                type: 'int'
            },
            {
                name: 'bin',
                type: 'string'
            },
            {
                name: 'lot',
                type: 'int'
            },
            {
                name: 'perUnitPrice',
                type: 'float'
            }
        ]
    }
});