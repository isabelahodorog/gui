Ext.define('Gui.view.provider.ProviderModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.provider',

    links: {
        provider: {
            type: 'Gui.model.ProviderModel',
            create: true
        }
    },

    data: {
        'providerStore': null,
        'providerName': null,
        'providerId': null
    },

    setProviderStore: function (store) {
        this.set('providerStore', store)
    },

    setProviderName: function (providerName) {
        this.set('providerName', providerName);
    },

    setProviderId: function (providerId) {
        this.set('providerId', providerId);
    }
});
