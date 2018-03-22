Ext.define('Gui.view.input.InputView', {
    extend: 'Ext.Container',
    xtype: 'form-input',

    title: 'Input',

    controller: 'controller.input',
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

    items: [
        {
            xtype: 'form',
            reference: 'inputForm',
            layout: {
                type: 'hbox'
            },

            items: [
                {
                    id: 'add_type',
                    xtype: 'combo',
                    fieldLabel: 'Tip',
                    store: {
                        type: 'array',
                        field: ['tip'],
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
                    plugins: {
                        fieldreplicator: true
                    },
                    anchor: '0',
                    // width: '30%',
                    enableKeyEvents: true,
                    forceSelection: true,
                    selectOnTab: false,
                    onReplicate: function () {
                        this.getStore().clearFilter();
                    }
                },
                {
                    id: 'add_docNo',
                    xtype: 'textfield',
                    fieldLabel: 'Nr. doc.',
                    // width: '30%',
                    enableKeyEvents: true
                },
                {
                    id: 'add_providerId',
                    xtype: 'textfield',
                    fieldLabel: 'Cod furnizor',
                    // width: '30%',
                    enableKeyEvents: true
                },
                {
                    id: 'add_providerName',
                    xtype: 'textfield',
                    fieldLabel: 'Nume furnizor',
                    // width: '30%',
                },
                {
                    id: 'add_releasDate',
                    xtype: 'textfield',
                    fieldLabel: 'Data',
                    // width: '30%',

                },
                {
                    id: 'add_dueDate',
                    xtype: 'textfield',
                    fieldLabel: 'Data scadenta'
                    // width: '30%',

                },
                {
                    id: 'add_value',
                    xtype: 'textfield',
                    fieldLabel: 'Valoare'
                    // width: '30%',

                },
                {
                    id: 'add_tva',
                    xtype: 'textfield',
                    fieldLabel: 'TVA'
                    // width: '30%',

                },
                {
                    id: 'add_total',
                    xtype: 'textfield',
                    fieldLabel: 'Total',
                    // width: '30%',

                },
                {
                    id: 'add_toPay',
                    xtype: 'textfield',
                    fieldLabel: 'Neachitat',
                    // width: '30%',
                    enableKeyEvents: true,
                    listeners: {
                        'keypress': function(form, event) {
                            if(event.getKey() == event.ENTER) {
                                var myBtn = Ext.getCmp('add_saveButton');
                                myBtn.fireHandler();
                            }
                        }
                    }
                },
                {
                    id: 'add_saveButton',
                    xtype: 'button',
                    text: 'Save',
                    margin: '0 0 0 420',
                    width: 70,
                    formBind: true,
                    handler: 'onISave'
                },
                {
                    xtype: 'button',
                    text: 'Reset',
                    margin: '-32 25 0 500',
                    width: 70,
                    formBind: true,
                    handler: 'onIReset'
                }
            ]
        },
        {
            xtype: 'gridpanel',

            columnWidth: 1,
            flex: 1,

            bind: {
                store: '{inputStore}'
            },

            tbar: {
                xtype: 'pagingtoolbar',
                displayInfo: true,
                displayMsg: 'Display input {0} - {1} of {2}',
                emptyMsg: 'No input to display'
            },

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
                    flex: 1
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
