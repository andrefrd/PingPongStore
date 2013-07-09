/*
 * File: app/store/PunchesStore.js
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

Ext.define('Timecard.store.PunchesStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Timecard.model.Punch'
    ],

    config: {
        autoSync: true,
        model: 'Timecard.model.Punch',
        storeId: 'punchesStore',
        proxy: {
            type: 'direct',
            api: {
                create: 'Fulfill.ss.DXPunches.createPunch',
                read: 'Fulfill.ss.DXPunches.getPunches',
                destroy: 'Fulfill.ss.DXPunches.destroyPunch'
            },
            reader: {
                type: 'json'
            },
            writer: {
                type: 'json'
            }
        }
    }
});