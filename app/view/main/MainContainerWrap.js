Ext.define('Gui.view.main.MainContainerWrap', {
    extend: 'Ext.container.Container',
    xtype: 'containerWrap',

    requires: [
        'Ext.layout.container.HBox'
    ],

    scrollable: 'y',

    layout: {
        type: 'hbox',
        align: 'stretchmax',
        animate: true,
        animatePolicy: {
            x: true,
            width: true
        }
    },

    beforeLayout: function () {
        // Dynamically ensure the height of the viewport minus the top toolbar
        var me = this,
            height = Ext.Element.getViewportHeight() - 64;
            navTree = me.getComponent('navigationTreeList');

        me.minHeight = height;

        navTree.setStyle({
            'min-height': height + 'px'
        });

        me.callParent(arguments);
    }
});