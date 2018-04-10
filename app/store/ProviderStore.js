Ext.define('Gui.store.ProviderStore', {
    extend: 'Ext.data.Store',

    alias: 'store.provider',
    storeId: 'providerStore',

    requires: [
        'Ext.data.proxy.Rest',
        'Gui.util.RestApiUrlUtil',
        'Ext.data.reader.Json'
    ],

    autoLoad: true,
    model: 'Gui.model.ProviderModel',

    proxy: {
        type: 'ajax',
        url: Gui.util.RestApiUrlUtil.getGetProviderUrl(),
        reader: {
            type: 'json',
            rootProperty: 'content'
        }
    }
});