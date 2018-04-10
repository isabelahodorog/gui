Ext.define('Gui.view.input.InputController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.input',

    requires: [
        'Gui.util.RestApiUrlUtil'
    ],

    onAISave: function (button, e) {
        var form = button.up('form').getForm();
        if (!form.isValid()) {
            return;
        }

        var formData = new FormData();
// var fieldValues = form.getFieldValues();
        formData.append('type', form.findField('add_type').getValue());
        formData.append('docNo', form.findField('add_docNo').getValue());
        formData.append('providerId', form.findField('add_providerId').getValue());
        formData.append('providerName', form.findField('add_providerName').getValue());
        formData.append('releaseDate', Ext.Date.format(new Date(form.findField('add_releaseDate').getValue()), 'd.m.Y'));
        formData.append('dueDate', form.findField('add_dueDate').getValue() ? Ext.Date.format(new Date(form.findField('add_dueDate').getValue()), 'd.m.Y') : '');
        formData.append('value', form.findField('add_value').getValue());
        formData.append('tva', form.findField('add_tva').getValue() ? form.findField('add_tva').getValue() : '');
        formData.append('total', form.findField('add_total').getValue());
        formData.append('toPay', form.findField('add_toPay').getValue());

        var callback = function(xhr) {
            if(xhr.status === 200) {
                Ext.MessageBox.show({
                    title: 'Feedback',
                    msg: 'Input successpfully created!',
                    buttons: Ext.MessageBox.OK,
                    icon: Ext.MessageBox.INFO
                });
            } else{
                Ext.MessageBox.show({
                    title: 'Feedback',
                    msg: 'An error occured!',
                    buttons: Ext.MessageBox.OK,
                    icon: Ext.MessageBox.INFO
                });
            }
        };

        Gui.util.FormUtil.performAsyncSave(Gui.util.RestApiUrlUtil.getAddInputUrl(), formData, callback);

        this.lookupReference('form-addinput').getForm().reset();
        this.getViewModel().data.input.toPay = null;
        this.getViewModel().data.input.dueDate = null;

        var store = Ext.getStore('inputStore');
        store.reload();
    },

    onIReset: function () {
        this.lookupReference('inputForm').getForm().reset();

    },

    onCreateInputEntry: function() {
        Ext.create({
            xtype: 'form-addinput'
        }).show();
    },

    onISearch: function(button) {
        var form = button.up('form').getForm();
        if (!form.isValid()) {
            return;
        }

        var startDate = form.findField('get_releaseDate').getValue() ? Ext.Date.format(form.findField('get_releaseDate').getValue(), 'd.m.Y') : '';
        var endDate = form.findField('get_end_releaseDate').getValue() ? Ext.Date.format(form.findField('get_end_releaseDate').getValue(), 'd.m.Y') : '';
        var dueDate = form.findField('get_dueDate').getValue() ? Ext.Date.format(form.findField('get_dueDate').getValue(), 'd.m.Y') : '';
        var providerName = form.findField('get_providerName').getValue() ? form.findField('get_providerName').getValue() : '';

        var store = Ext.getStore('inputStore');
        store.getProxy().setConfig('extraParams', {
            startDate: startDate,
            endDate: endDate,
            dueDate: dueDate,
            providerName: providerName
        });

        store.reload();
        this.getViewModel().set('inputStore', store);
    },

    onAIReset: function() {
        this.lookupReference('form-addinput').getForm().reset();
        this.getViewModel().data.input.toPay = null;
        this.getViewModel().data.input.dueDate = null;
    },

    onSelect: function() {
        var record = this.lookupReference('form-addinput').getForm();
        // var provider = record.data.input;
        var providerId = record.findField('add_providerId').getValue();
        Ext.Ajax.request({
            url: Gui.util.RestApiUrlUtil.getGetSingleProviderUrl() + "?id=" + providerId,
            timeout: 60000,
            method: 'GET',
            scope: this,
            headers: {
                'Content-Type:': 'application/json'
            },
            success: function (response, opts) {
                var result = Ext.decode(response.responseText);
                console.log(result);
                this.getViewModel().setProviderName(result.name);
            },
            failure: function(response, opts) {
                console.log('server-side failure with status code ' + response.status);
            }
        });
    },

    onSelectNext: function() {
        var record = this.lookupReference('form-addinput').getForm();
        var providerId = record.findField('add_providerId').getValue();
        if (providerId === ""){
            var providerName = record.findField('add_providerName').getValue();
        }
        Ext.Ajax.request({
            url: Gui.util.RestApiUrlUtil.getGetSingleProviderUrl() + "?name=" + providerName,
            timeout: 60000,
            method: 'GET',
            scope: this,
            headers: {
                'Content-Type': 'application/json'
            },
            success: function (response, opts) {
                var result = Ext.decode(response.responseText);
                console.log(result);
                this.getViewModel().setProviderId(result.id);
            },
            failure: function(response, opts) {
                console.log('server-side failure with status code ' + response.status);
            }
        });
    },

    onIdChange: function() {
        var record = this.lookupReference('inputForm').getForm();
        // var provider = record.data.input;
        var providerId = record.findField('get_providerId').getValue();
        Ext.Ajax.request({
            url: Gui.util.RestApiUrlUtil.getGetSingleProviderUrl() + "?id=" + providerId,
            timeout: 60000,
            method: 'GET',
            scope: this,
            headers: {
                'Content-Type': 'application/json'
            },
            success: function (response, opts) {
                var result = Ext.decode(response.responseText);
                console.log(result);
                this.getViewModel().setProviderName(result.name);
            },
            failure: function(response, opts) {
                console.log('server-side failure with status code ' + response.status);
            }
        });
    },

    onProviderClick: function() {
        Ext.create({
            xtype: 'form-provider'
        }).show();

        var store = Ext.getStore('providerStore');

        store.reload();
        // this.getViewModel().setProviderStore(store);
    }
});