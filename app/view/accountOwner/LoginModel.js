Ext.define('Gui.view.accountOwner.LoginModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.login',

    data: {
        'errorCode': undefined,
        'exception': undefined
    },

    setErrorCode: function (errorCode) {
        this.set('errorCode', errorCode);
    },

    setException: function (exception) {
        this.set('exception', exception);
    }

});