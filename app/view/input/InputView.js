Ext.define('Gui.view.input.InputView', {
    extend: 'Ext.panel.Panel',
    xtype: 'form-input',

    controller: 'input',

    requires: [
        'Gui.store.InputStore',
        'Gui.view.input.InputController',
        'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'Ext.layout.container.VBox',
        'Ext.toolbar.Paging'
    ],

    viewModel: {
        type: 'input'
    },

    initComponent: function () {
        this.callParent();
        var store = Ext.getStore('inputStore');
        store.getProxy().setConfig('extraParams', {
            startDate: Ext.Date.format(new Date(new Date().getFullYear(), new Date().getMonth(), 1), 'd.m.Y')
        });

        this.getViewModel().set('inputStore', store);
        // store.reload();
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
                        id: 'add_type',
                        xtype: 'combo',
                        fieldLabel: 'Tip',
                        store: {
                            type: 'array',
                            fields: ['tip'],
                            data: [
                                ['Factura'],
                                ['Bon de casa'],
                                ['Bon de casa cu cod fiscal'],
                                ['Aviz'],
                                ['Taxare inversa']
                            ]

                        },
                        queryMode: 'local',
                        displayField: 'tip',
                        valueField: 'tip',
                        enableKeyEvents: true,
                        forceSelection: true,
                        selectOnTab: false,
                        onReplicate: function () {
                            this.getStore().clearFilter();
                        },
                        margin: '0 30 0 5',
                        allowBlank: false
                    },
                    {
                        id: 'add_docNo',
                        xtype: 'textfield',
                        fieldLabel: 'Nr. doc.',
                        enableKeyEvents: true,
                        margin: '0 30 0 0',
                        allowBlank: false
                    },
                    {
                        id: 'add_providerId',
                        xtype: 'textfield',
                        fieldLabel: 'Cod furnizor',
                        enableKeyEvents: true,
                        margin: '0 30 0 0',
                        allowBlank: false
                    },
                    {
                        id: 'add_providerName',
                        xtype: 'textfield',
                        fieldLabel: 'Nume furnizor',
                        margin: '0 30 0 0',
                        allowBlank: false
                    },
                    {
                        id: 'add_releasDate',
                        xtype: 'textfield',
                        fieldLabel: 'Data',
                        allowBlank: false
                    }]
            },
                {
                    layout: 'hbox',
                    items: [
                        {
                            id: 'add_dueDate',
                            xtype: 'textfield',
                            fieldLabel: 'Data scadenta',
                            margin: '5 30 5 5'
                        },
                        {
                            id: 'add_value',
                            xtype: 'textfield',
                            fieldLabel: 'Valoare',
                            margin: '5 30 5 0',
                            allowBlank: false
                        },
                        {
                            id: 'add_tva',
                            xtype: 'textfield',
                            fieldLabel: 'TVA',
                            margin: '5 30 5 0'
                        },
                        {
                            id: 'add_total',
                            xtype: 'textfield',
                            fieldLabel: 'Total',
                            margin: '5 30 5 0',
                            allowBlank: false
                        },
                        {
                            id: 'add_toPay',
                            xtype: 'textfield',
                            fieldLabel: 'Neachitat',
                            enableKeyEvents: true,
                            listeners: {
                                'keypress': function (form, event) {
                                    if (event.getKey() == event.ENTER) {
                                        var myBtn = Ext.getCmp('add_saveButton');
                                        myBtn.fireHandler();
                                    }
                                }
                            },
                            margin: '5 30 5 0',
                            allowBlank: false
                        }
                    ]
                }
            ],
            buttons: [
                {
                    xtype: 'button',
                    text: 'Reset',
                    width: 70,
                    handler: 'onIReset'
                },
                {
                    id: 'add_saveButton',
                    xtype: 'button',
                    text: 'Save',
                    width: 70,
                    formBind: true,
                    handler: 'onISave'
                },
                {
                    xtype: 'button',
                    text: 'Provider',
                    width: 70,
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
                    },
                },
                {
                    text: 'Data scadenta',
                    dataIndex: 'dueDate',
                    resizable: true,
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
