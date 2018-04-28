Ext.define('Gui.Application', {
    extend: 'Ext.app.Application',

    name: 'Gui',

    models: [
        'InputModel',
        'ProviderModel',
        'AccountOwnerModel'
    ],

    stores: [
        'InputStore',
        'ProviderStore',
        'AccountOwnerStore'
    ],

    launch: function () {
        var loggedIn = Ext.util.Cookies.get('myCookie');

        Ext.create({
            xtype: loggedIn ? 'app-main' : 'login'
            // xtype: 'login'
        });
    },

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
