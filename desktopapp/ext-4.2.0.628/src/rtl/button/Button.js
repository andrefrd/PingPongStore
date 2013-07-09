/*
This file is part of Ext JS 4.2

Copyright (c) 2011-2013 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial
Software License Agreement provided with the Software or, alternatively, in accordance with the
terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department
at http://www.sencha.com/contact.

Build date: 2013-03-03 19:44:55 (4511b3df5a49f7edc73910cac6c6c0327360cb8a)
*/
Ext.define('Ext.rtl.button.Button', {
    override: 'Ext.button.Button',

    getBtnWrapFrameWidth: function(side) {
        if (this.getHierarchyState().rtl && side === 'r') {
            side = 'l';
        }
        return this.callParent(arguments);
    },

    getTriggerRegion: function() {
        var me = this,
            region = me._triggerRegion;

        if (!Ext.rootHierarchyState.rtl !== !this.getHierarchyState().rtl
            && me.arrowAlign === 'right') {
            region.begin = 0;
            region.end = me.getTriggerSize();
        } else {
            region = me.callParent();
        }

        return region;
    }
});