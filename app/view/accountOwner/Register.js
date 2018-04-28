Ext.define('Gui.view.accountOwner.Register', {
    extend: 'Ext.window.Window',
    xtype: 'form-register',

    requires: [
        'Gui.view.accountOwner.RegisterController',
        'Ext.form.Panel',
        'Ext.layout.container.VBox',
        'Ext.form.field.Text',
        'Ext.button.Button'
    ],

    controller: 'register',

    layout: {
        type: 'vbox',
        align: 'fit'
    },
    viewModel: {
        type: 'login'
    },

    bodyPadding: 10,
    closable: false,

    title: 'Create account owner',

    items: [{
        xtype: 'form',
        reference: 'register-form',

        items: [{
            id: 'r_name',
            xtype: 'textfield',
            fieldLabel: 'Name'
        }, {
            id: 'r_email',
            xtype: 'textfield',
            fieldLabel: 'Email'
        }, {
            id: 'r_password',
            xtype: 'textfield',
            fieldLabel: 'Password',
            enableKeyEvents: true,
            inputType: 'password'
        }, {
            id: 'r_confirmPassword',
            xtype: 'textfield',
            fieldLabel: 'Confirm password',
            enableKeyEvents: true,
            inputType: 'password',
            listeners: {
                'keypress': function (form, event) {
                    if (event.getKey() == event.ENTER) {
                        var myBtn = Ext.getCmp('r_saveButton');
                        myBtn.fireHandler();
                    }
                }
            }
        }],

        buttons: [{
            xtype: 'button',
            text: 'Back to Login',
            formBind: true,
            handler: 'onBackToLogin'
        }, {
            xtype: 'button',
            text: 'Reset',
            formBind: true,
            handler: 'onRReset'
        }, {
            id: 'r_saveButton',
            xtype: 'button',
            text: 'Save',
            formBind: true,
            handler: 'onRSave'
        }
        ]
    }]

});
