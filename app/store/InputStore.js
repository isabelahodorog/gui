Ext.define('Gui.store.InputStore', {
    extend: 'Ext.data.Store',

    alias: 'store.input',
    storeId: 'inputStore',

    requires: [
        'Gui.model.InputModel',
        'Gui.util.RestApiUrlUtil',
        'Gui.proxy.SearchParamsProxy',
        'Ext.data.proxy.Rest'
    ],

    uses: ['Ext.data.proxy.Rest'],

    model: 'Gui.model.InputModel',
    autoLoad: false,
    remoteFilter: true,
    remoteSort: true,

    pageSize: 100,

    proxy: {
        type: 'SearchParams',
        url: Gui.util.RestApiUrlUtil.getGetInputUrl(),
        reader: {
            type: 'json',
            rootProperty: 'content',
            totalProperty: 'totalElements',
            model: 'Gui.model.InputModel'
        }
    }
});