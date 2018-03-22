Ext.define('Gui.Application', {
    extend: 'Ext.app.Application',

    name: 'Gui',

    models: [
        'InputModel',
        'ProviderModel'
    ],

    stores: [
        'InputStore'
    ],

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
