Ext.define('Gui.view.input.AddInputView', {
    extend: 'Ext.window.Window',
    xtype: 'form-addinput',

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

    title: 'Create entry',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    bodyPadding: 10,

    listeners: {
        resize: function(me, width, height) {
            var gridHeight = height-300;
            me.getViewModel().set('height', gridHeight);
        }
    },

    items: [
        {
            xtype: 'form',
            reference: 'form-addinput',
            items: [{
                layout: 'vbox',
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
                        margin: '5 30 5 0',
                        allowBlank: false
                    },
                    {
                        id: 'add_docNo',
                        xtype: 'textfield',
                        fieldLabel: 'Nr. doc.',
                        enableKeyEvents: true,
                        margin: '5 30 5 0',
                        allowBlank: false
                    },
                    {
                        id: 'add_providerId',
                        xtype: 'textfield',
                        fieldLabel: 'Cod furnizor',
                        queryMode: 'local',
                        enableKeyEvents: true,
                        margin: '5 30 5 0',
                        allowBlank: false,
                        valueField: 'id',
                        bind:'{providerId}',
                        store: 'providerStore',
                        listeners: {
                            'focusenter' : function() {
                                this.setValue("");
                            },
                            'change': 'onSelect'
                        }
                    },
                    {
                        id: 'add_providerName',
                        xtype: 'textfield',
                        queryMode: 'local',
                        fieldLabel: 'Nume furnizor',
                        margin: '5 30 5 0',
                        allowBlank: false,
                        bind:'{providerName}',
                        store: 'providerStore',
                        listeners: {
                            'focusenter' : function() {
                                this.setValue("");
                            },
                            'change': 'onSelectNext'
                        }
                    },
                    {
                        id: 'add_releaseDate',
                        xtype: 'datefield',
                        fieldLabel: 'Data',
                        margin: '5 30 5 0',
                        allowBlank: false
                    }]
            },
                {
                    layout: 'vbox',
                    items: [
                        {
                            id: 'add_dueDate',
                            xtype: 'datefield',
                            fieldLabel: 'Data scadenta',
                            margin: '5 30 5 0'
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
                    handler: 'onAIReset'
                },
                {
                    id: 'add_saveButton',
                    xtype: 'button',
                    text: 'Save',
                    width: 70,
                    formBind: true,
                    handler: 'onAISave'
                },
                {
                    xtype: 'button',
                    text: 'Provider',
                    width: 70,
                    handler: 'onProviderClick'
                }
            ]
        }
    ]
});
