Ext.define('Gui.view.accountOwner.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'Gui.view.accountOwner.LoginController',
        'Gui.view.accountOwner.LoginModel',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Display'
    ],

    viewModel: {
        type: 'login'
    },

    controller: 'login',

    bodyPadding: 10,
    title: 'Login',
    closable: false,
    autoShow: true,

    items: [
        {
            xtype: 'form',
            reference: 'login-form',

            items: [{
                xtype: 'displayfield',
                hideEmptyLabel: false,
                value: 'Please sign in.'
            }, {
                xtype: 'textfield',
                name: 'email',
                fieldLabel: 'Email',
                allowBlank: false
            }, {
                xtype: 'textfield',
                name: 'password',
                inputType: 'password',
                fieldLabel: 'Parola',
                allowBlank: false,
                enableKeyEvents: true,
                listeners: {
                    'keypress': function (form, event) {
                        if (event.getKey() == event.ENTER) {
                            var myBtn = Ext.getCmp('loginButton');
                            myBtn.fireHandler();
                        }
                    }
                }
            }],

            buttons: [
                {
                    id: 'registerButton',
                    text: 'Register',
                    listeners: {
                        click: 'onRegisterClick'
                    }
                },
                {
                    id: 'loginButton',
                    text: 'Login',
                    formBind: true,
                    listeners: {
                        click: 'onLoginClick'
                    }
                }]
        }, {
            xtype: 'displayfield',
            name: 'errorCode',
            allowBlank: false,
            bind: '<span style="color: red">{errorCode}</span>'
        }, {
            xtype: 'displayfield',
            name: 'exception',
            bind: '<span style="color: red">{exception}</span>'
        }
    ]
});
