Ext.define('Gui.view.provider.ProviderController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.provider',

    requires: [
        'Gui.util.RestApiUrlUtil'
    ],

    // init: function() {
    //
    // }

    onProviderReset: function () {

        var record = this.lookupReference('form-provider').getForm();
        record.findField('p_name').setValue(null);
        record.findField('p_fiscalCode').setValue(null);
        record.findField('p_country').setValue(null);
        record.findField('p_county').setValue(null);
        record.findField('p_address').setValue(null);
        record.findField('p_bankAccount').setValue(null);
        record.reset();
    },

    onProviderSave: function(button) {
        var record = this.lookupReference('form-provider').getForm();
        var name = record.findField('p_name').getValue();
        var fiscalCode = record.findField('p_fiscalCode').getValue();
        var country = record.findField('p_country').getValue();
        var county = record.findField('p_county').getValue();
        var address = record.findField('p_address').getValue();
        var bankAccount = record.findField('p_bankAccount').getValue() ? record.findField('p_bankAccount').getValue() : '';

        Ext.Ajax.request({
            url: Gui.util.RestApiUrlUtil.getAddProviderUrl() + '?name=' + name + '&fiscalCode=' + fiscalCode + '&country=' + country + '&county=' + country + '&address=' + address + '&bankAccount=' + bankAccount,
            timeout: 60000,
            method: 'POST',
            scope: this,
            headers: {
                'Content-Type' : 'application/json'
            },
            success: function(response, opts) {
                var result = Ext.decode(response.responseText);
                console.log(result);
                Ext.MessageBox.show({
                    title: 'Feedback',
                    msg: 'Provider successfully added!',
                    buttons: Ext.MessageBox.OK,
                    icon: Ext.MessageBox.INFO
                });
            },
            failure: function (response, opts) {
                console.log('server-side failure with status code ' + response.status);
                Ext.MessageBox.show({
                    title: 'Error',
                    msg: response.getValue(),
                    buttons: Ext.MessageBox.OK,
                    icon: Ext.MessageBox.INFO
                });
            }
        })
    }
});