Ext.define('Gui.view.input.InputView', {
    extend: 'Ext.panel.Panel',
    xtype: 'form-input',

    requires: [
        'Gui.store.InputStore',
        'Gui.view.input.InputController',
        'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'Ext.layout.container.VBox',
        'Ext.toolbar.Paging'
    ],

    controller: 'input',

    viewModel: {
        type: 'input'
    },

    initComponent: function () {
        this.callParent();
        var store = Ext.getStore('inputStore');
        store.getProxy().setConfig('extraParams', {
            startDate: Ext.Date.format(new Date(new Date().getFullYear(), new Date().getMonth(), 1), 'd.m.Y')
        });
        store.reload();
        this.getViewModel().set('inputStore', store);
    },

    title: 'Input',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    bodyPadding: '10 10 0',

    defaults: {
        anchor: '100%',
        allowBlank: false,
        msgTarget: 'side'
    },

    fieldDefaults: {
        labelWidth: 70
    },

    listeners: {
        resize: function(me, width, height) {
            var gridHeight = height-300;
            me.getViewModel().set('height', gridHeight);
        }
    },

    items: [
        {
            xtype: 'form',
            reference: 'inputForm',
            items: [{
                layout: 'hbox',
                items: [
                    {
                        id: 'get_providerId',
                        xtype: 'textfield',
                        fieldLabel: 'Cod furnizor',
                        margin: '0 30 0 5',
                        queryMode: 'local',
                        enableKeyEvents: true,
                        valueField: 'id',
                        bind:'{providerId}',
                        store: 'providerStore',
                        listeners: {
                            'focusenter' : function() {
                                this.setValue("");
                            },
                            'change': 'onIdChange'
                        }
                    },
                    {
                        id: 'get_providerName',
                        xtype: 'textfield',
                        fieldLabel: 'Nume furnizor',
                        margin: '0 30 0 0',
                        bind:'{providerName}',
                        store: 'providerStore',
                    },
                    {
                        id: 'get_releaseDate',
                        xtype: 'datefield',
                        fieldLabel: 'Eliberat intre',
                        margin: '0 10 5 0'
                    },
                    {
                        id: 'get_end_releaseDate',
                        xtype: 'datefield',
                        margin: '0 30 5 0'
                    },
                    {
                        id: 'get_dueDate',
                        xtype: 'datefield',
                        fieldLabel: 'Data scadenta',
                        margin: '0 30 5 0'
                    }]
            }
            ],
            buttons: [
                {
                    xtype: 'button',
                    text: 'Reset',
                    handler: 'onIReset'
                },
                {
                    xtype: 'button',
                    text: 'Search',
                    handler: 'onISearch'
                },
                {
                    xtype: 'button',
                    text: 'New',
                    handler: 'onCreateInputEntry'
                },
                {
                    xtype: 'button',
                    text: 'Provider',
                    handler: 'onProviderClick'
                }
            ]
        },
        {
            xtype: 'gridpanel',

            columnWidth: 1,
            flex: 1,

            bind: {
                store: '{inputStore}',
                maxHeight: '{height}'
            },

            tbar: {
                xtype: 'pagingtoolbar',
                displayInfo: true,
                displayMsg: 'Display input {0} - {1} of {2}',
                emptyMsg: 'No input to display'
            },

            columnLines: true,

            columns: [
                {
                    text: 'Tip',
                    dataIndex: 'type',
                    resizable: true,
                    flex: 1
                },
                {
                    text: 'Nr. int.',
                    dataIndex: 'inputId',
                    resizable: true,
                    flex: 1
                },
                {
                    text: 'Nr. doc.',
                    dataIndex: 'docNo',
                    resizable: true,
                    flex: 1
                },
                {
                    text: 'Cod furnizor',
                    dataIndex: 'providerId',
                    resizable: true,
                    flex: 1
                },
                {
                    text: 'Furnizor',
                    dataIndex: 'providerName',
                    resizable: true,
                    flex: 1
                },
                {
                    text: 'Data',
                    dataIndex: 'releaseDate',
                    resizable: true,
                    flex: 1,
                    renderer: function(value) {
                        return Ext.Date.format(new Date(value), 'd.m.Y');
                    }
                },
                {
                    text: 'Data scadenta',
                    dataIndex: 'dueDate',
                    resizable: true,
                    renderer: function(value) {
                        return Ext.Date.format(new Date(value), 'd.m.Y');
                    },
                    flex: 1
                },
                {
                    text: 'Valoare',
                    dataIndex: 'value',
                    resizable: true,
                    flex: 1
                },
                {
                    text: 'TVA',
                    dataIndex: 'tva',
                    resizable: true,
                    flex: 1
                },
                {
                    text: 'Total',
                    dataIndex: 'total',
                    resizable: true,
                    flex: 1
                },
                {
                    text: 'Neachitat',
                    dataIndex: 'toPay',
                    resizable: true,
                    flex: 1
                }
            ],

            viewConfig: {
                enableTextSelection: true
            }
        }
    ]
});
