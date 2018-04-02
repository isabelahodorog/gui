Ext.define('Gui.store.InputStore', {
    extend: 'Ext.data.Store',

    alias: 'store.input',
    storeId: 'inputStore',

    requires: [
        'Ext.data.proxy.Rest',
        'Gui.util.RestApiUrlUtil',
        'Ext.data.reader.Json'
    ],

    autoLoad: true,
    model: 'Gui.model.InputModel',

    proxy: {
        type: 'ajax',
        url: Gui.util.RestApiUrlUtil.getGetInputUrl(),
        reader: {
            type: 'json',
            rootProperty: 'content'
        }
    }
});