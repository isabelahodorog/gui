Ext.define('Gui.view.input.InputModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.input',

    links: {
        input: {
            type: 'Gui.model.InputModel',
            create: true
        }
    },

    data: {
        'inputStore': null,
        'providerName': null,
        'providerId': null
    },

    setInputStore: function (store) {
        this.set('inputStore', store)
    },

    setProviderName: function (providerName) {
        this.set('providerName', providerName);
    },

    setProviderId: function (providerId) {
        this.set('providerId', providerId);
    }
});
