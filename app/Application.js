Ext.define('Gui.Application', {
    extend: 'Ext.app.Application',

    name: 'Gui',

    models: [
        'InputModel',
        'ProviderModel'
    ],

    stores: [
        'InputStore',
        'ProviderStore'
    ],

    // launch: function() {
    //     Ext.create('app-main')
    // },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
