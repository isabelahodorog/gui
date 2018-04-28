Ext.define('Gui.store.AccountOwnerStore', {
    extend: 'Ext.data.Store',

    alias: 'store.accountOwner',
    storeId: 'accountOwnerStore',

    requires: [
        'Ext.data.proxy.Rest',
        'Gui.util.RestApiUrlUtil',
        'Ext.data.reader.Json'
    ],

    model: 'Gui.model.AccountOwnerModel',
    autoLoad: false,
    remoteFilter: true,
    remoteSort: true

});