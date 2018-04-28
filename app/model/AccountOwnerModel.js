Ext.define('Gui.model.AccountOwnerModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.proxy.Rest',
        'Gui.util.RestApiUrlUtil',
        'Ext.data.reader.Json'
    ],

    fields: [
        { name: 'name', type: 'string'},
        { name: 'email', type: 'string'},
        { name: 'password', type: 'string'}
        // { name: 'confirmPassword', type: 'string'}
    ],

    proxy: {
        type: 'rest',
        url: Gui.util.RestApiUrlUtil.getLoginUrl(),
        reader: {
            type: 'json',
            rootProperty: 'content',
            totalProperty: 'totalElements',
            model: 'Gui.model.AccountOwnerModel',
            transform: {
                fn: function (data) {
                    return data;
                },
                scope: this
            }
        },
        writer:{
            type:'json',
            model: 'Gui.model.AccountOwnerModel',
            rootProperty: 'content'
        },
        actionMethods:  {create: "POST", read: "GET", update: "PUT", destroy: "DELETE"}
    }
});