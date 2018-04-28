Ext.define('Gui.view.accountOwner.RegisterController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.register',


    init: function () {

    },

    onRSave: function(button) {
        var form = button.up('form').getForm();
        if(!form.isValid()) {
            return;
        }
        var email = form.findField('r_email').getValue();
        debugger;
        var password = form.findField('r_password').getValue();
        var name = form.findField('r_name').getValue();
        var confirmPassword = form.findField('r_confirmPassword').getValue();

        var user = Ext.create('Gui.model.AccountOwnerModel');

        user.proxy.url = Gui.util.RestApiUrlUtil.getRegisterUrl() + '?name=' + name + '&email=' + email + '&password=' + password + '&confirmPassword=' +confirmPassword;
        that = this;
        user.save({
            success: function() {
                Ext.MessageBox.show({
                                    title: 'Feedback',
                                    msg: 'Account Owner created successfully!',
                                    buttons: Ext.MessageBox.OK,
                                    icon: Ext.MessageBox.INFO
                                });
                // this.getView().destroy;
                // Ext.create({xtype: 'login'}).show();
            },
            failure: function(response, opts) {
                console.log('server-side failure with status code ' + response.status);
                var response = {
                    response: Ext.JSON.decode(response.responseText)
                };
                Ext.MessageBox.show({
                    title: 'Error',
                    msg: Ext.JSON.decode(opts.error.response.responseText).message,
                    buttons: Ext.MessageBox.OK,
                    icon: Ext.MessageBox.ERROR
                })
            }
        });
    },

    onRReset: function() {
        this.lookupReference('register-form').getForm().reset();
    },

    onBackToLogin: function() {
        this.getView().destroy();
        Ext.create({
            xtype: 'login'
        }).show();
    }
});
