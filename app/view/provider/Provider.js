Ext.define('Gui.view.provider.Provider', {
    extend: 'Ext.window.Window',
    xtype: 'form-provider',

    requires: [
        'Gui.store.ProviderStore',
        'Gui.view.provider.ProviderController',
        'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'Ext.layout.container.VBox',
        'Ext.toolbar.Paging'
    ],

    controller: 'provider',

    viewModel: {
        type: 'provider'
    },

    // initComponent: function () {
    //     this.callParent();
    //     var store = Ext.getStore('providerStore');
    //
    //     store.reload();
    //     this.getViewModel().setProviderStore(store);
    // },

    title: 'Add new Provider',

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
            reference: 'form-provider',
            items: [{
                layout: 'vbox',
                fieldDefaults: {
                    labelWidth: 40
                },
                items: [{
                    layout: 'hbox',
                    items: [
                    {
                        id: 'p_name',
                        xtype: 'textfield',
                        fieldLabel: 'Nume' + '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
                        margin: '0 30 5 5'
                    },
                    {
                        id: 'p_fiscalCode',
                        xtype: 'textfield',
                        margin: '0 30 5 5',
                        fieldLabel: 'Cod Fiscal' + '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>'
                    },
                    {
                        id: 'p_country',
                        xtype: 'textfield',
                        margin: '0 30 5 5',
                        fieldLabel: 'Tara' + '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>'
                    }]},
                    { layout: 'hbox',
                        items: [
                    {
                        id: 'p_county',
                        xtype: 'textfield',
                        margin: '0 30 5 5',
                        fieldLabel: 'Oras' + '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>'
                    },
                    {
                        id: 'p_address',
                        xtype: 'textfield',
                        margin: '0 30 5 5',
                        fieldLabel: 'Adresa' + '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>'
                    },
                    {
                        id: 'p_bankAccount',
                        xtype: 'textfield',
                        fieldLabel: 'Cont',
                        margin: '0 30 5 5',
                        required: 'false'
                    }]}
                ]
            }],
            buttons: [
                {
                    xtype: 'button',
                    text: 'Reset',
                    handler: 'onProviderReset'
                },
                {
                    xtype: 'button',
                    text: 'Save',
                    handler: 'onProviderSave'
                }
            ]
        }
        // {
        //     xtype: 'gridpanel',
        //
        //     columnWidth: 1,
        //     flex: 1,
        //
        //     bind: {
        //         store: '{providerStore}',
        //         maxHeight: '{height}'
        //     },
        //
        //         tbar: {
        //             xtype: 'pagingtoolbar',
        //             displayInfo: true,
        //             displayMsg: 'Display providers {0} - {1} of {2}',
        //             emptyMsg: 'No providers to display'
        //         },
        //
        //         columnLines: true,
        //
        //         columns: [
        //             {
        //                 text: 'Cod Furnizor',
        //                 dataIndex: 'id',
        //                 resizable: true,
        //                 flex: 1
        //             },
        //             {
        //                 text: 'Nume',
        //                 dataIndex: 'name',
        //                 resizable: true,
        //                 flex: 1
        //             },
        //             {
        //                 text: 'Cod Fiscal',
        //                 dataIndex: 'fiscalCode',
        //                 resizable: true,
        //                 flex: 1
        //             },
        //             {
        //                 text: 'Tara',
        //                 dataIndex: 'country',
        //                 resizable: true,
        //                 flex: 1
        //             },
        //             {
        //                 text: 'Oras',
        //                 dataIndex: 'county',
        //                 resizable: true,
        //                 flex: 1
        //             },
        //             {
        //                 text: 'Adresa',
        //                 dataIndex: 'address',
        //                 resizable: true,
        //                 flex: 1
        //             },
        //             {
        //                 text: 'Cont Bancar',
        //                 dataIndex: 'bankAccount',
        //                 resizable: true,
        //                 flex: 1
        //             }
                ],

                viewConfig: {
                    enableTextSelection: true
                }

        // }
    // ]
});