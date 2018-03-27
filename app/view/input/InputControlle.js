Ext.define('Gui.view.input.InputController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.input',

    requires: [
        'Gui.util.RestApiUrlUtil'
    ],

    // init: function () {
    //     var store = Ext.getStore('inputStore');
    //     store.getProxy().setConfig('extraParams', {
    //         startDate: Ext.Date.format(new Date(new Date().getFullYear(), new Date().getMonth(), 1), 'd.m.Y')
    //     });
    //
    //     store.reload();
    // },

    onISave: function (button) {
        var form = button.up('form').getForm();
        if(!form.isValid()) {
            return;
        }
        var fieldValues = form.getFieldValues();
        Ext.Ajax.request({
            url: Gui.util.RestApiUrlUtil.getAddInputUrl(),
            timeout: 60000,
            method: 'POST',
            params: {
                type: fieldValues.type,
                docNo: fieldValues.docNo,
                providerId: fieldValues.providerId ? fieldValues.providerId : '',
                providerName: fieldValues.providerName? fieldValues.providerName : '',
                releaseDate: Ext.Date.format(new Date(fieldValues.releaseDate), 'd.m.Y'),
                dueDate: fieldValues.dueDate ? Ext.Date.format(new Date(fieldValues.dueDate), 'd.m.Y') : '',
                value: fieldValues.value,
                tva: fieldValues.tva ? fieldValue.tva : '',
                total: fieldValues.total,
                toPay: fieldValues.toPay
            },
            scope: this
        });
    },

    onIReset: function () {
        this.lookupReference('inputForm').getForm().reset();
    }
});