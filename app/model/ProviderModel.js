Ext.define('Gui.model.ProviderModel', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'auto'},
        { name: 'name', type: 'string'},
        { name: 'fiscalCode', type: 'string'},
        { name: 'country', type: 'string'},
        { name: 'county', type: 'string'},
        { name: 'address', type: 'string'},
        { name: 'bankAccount', type: 'string'}
    ]

});