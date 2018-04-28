Ext.define('Gui.view.accountOwner.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    requires: [
        // 'CsvParser.view.accountOwner.AddAccountOwnerView',
        'Gui.util.RestApiUrlUtil',
        'Ext.util.Cookies'
    ],

    onLoginClick: function (button, e) {
        var form = button.up('form').getForm();
        var formValues = form.getFieldValues();
        var email = formValues.email;
        var password = formValues.password;

        var store = Ext.getStore('accountOwnerStore');
        store.proxy.url = Gui.util.RestApiUrlUtil.getLoginUrl();
        store.getProxy().setConfig('extraParams', {
            email: email,
            password: password
        });

        var that = this;

        store.load({
            callback: function(response, operation, success) {
                if (success == true) {
                    var now =  new Date();
                    var expiry = new Date(now.getTime() + 24*60*60*1000);
                    Ext.util.Cookies.set('myCookie', email, expiry);
                    that.getView().destroy();

                    Ext.create('Gui.view.main.Main', {email: email});
                } else {
                    that.getViewModel().setErrorCode(Ext.JSON.decode(operation.error.response.responseText).status);
                    that.getViewModel().setException(Ext.JSON.decode(operation.error.response.responseText).message);
                }
            }
        });
    },

    getResponseData: function (respose) {
        try {
            var data = Ext.decode(response.responseText);
        }
        catch (ex) {
            Ext.Error.raise({
                response: response,
                json: response.responseText,
                parseError: ex,
                msg: 'Unable to parse the JSON returned by the server: ' + ex.toString()
            });
        }
        return data;
    },

    onRegisterClick: function() {
        this.getView().destroy();
        Ext.create({
            xtype: 'form-register'
        }).show();
    }
});
