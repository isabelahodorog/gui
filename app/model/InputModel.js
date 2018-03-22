Ext.define('Gui.model.InputModel', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'type', type: 'string'},
        { name: 'inputId', type: 'auto'},
        { name: 'docNo', type: 'auto'},
        { name: 'providerId', type: 'auto'},
        { name: 'providerName', type: 'string'},
        { name: 'releaseDate', type: 'date'},
        { name: 'dueDate', type: 'date'},
        { name: 'value', type: 'auto'},
        { name: 'tva', type: 'auto'},
        { name: 'total', type: 'auto'},
        { name: 'toPay', type: 'auto'}
    ]

});