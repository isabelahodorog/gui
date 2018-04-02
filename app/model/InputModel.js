Ext.define('Gui.model.InputModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.Ajax',
        'Gui.util.RestApiUrlUtil'
    ],

    fields: [
        { name: 'type', type: 'string'},
        { name: 'inputId', type: 'int'},
        { name: 'docNo', type: 'int'},
        { name: 'providerId', type: 'int'},
        { name: 'providerName', type: 'string'},
        { name: 'releaseDate', type: 'auto'},
        { name: 'dueDate', type: 'auto'},
        { name: 'value', type: 'float'},
        { name: 'tva', type: 'float'},
        { name: 'total', type: 'float'},
        { name: 'toPay', type: 'float'}
    ]
});