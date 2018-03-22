Ext.define('Gui.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Gui.view.main.MainController',
        'Gui.view.main.MainModel'
    ],

    viewModel: 'main',

    ui: 'navigation',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    controller: 'main',
    plugins: 'viewport',
    cls: 'sencha-dash-viewport',
    itemId: 'mainView',

    listeners: {
        render: 'onMainViewRender'
    },

    items: [
        {
            xtype: 'toolbar',
            cls: 'sencha-dash-dash-headerbar shadow',
            height: 100,
            itemId: 'headerBar',
            items: [
                {
                    xtype: 'displayfield',
                    reference: 'applicationName',
                    value: 'INPUT',
                    fieldStyle: 'font-size: 60px',
                    cls: 'application-name'
                }
            ]
        },
        {
            xtype: 'containerWrap',
            id: 'main-view-detail-wrap',
            reference: 'mainContainerWrap',
            flex: 1,

            items: [
                {
                    xtype: 'treelist',
                    reference: 'navigationTreeList',
                    itemId: 'navigationTreeList',
                    ui: 'navigation',
                    store: {
                        root: {
                            expanded: true,
                            children: [
                                {
                                    text: 'Input',
                                    iconCls: 'x-fa fas fa-inbox',
                                    rowCls: 'nav-tree-badge nav-tree-badge-hot',
                                    viewType: 'form-input',
                                    routeId: 'in',
                                    leaf: true
                                }
                            ]
                        }
                    },
                    width: 250,
                    expanderFirst: false,
                    expanderOnly: false,
                    listeners: {
                        selectionchange: 'onNavigationTreeSelectionChange'
                    }
                },
                {
                    xtype: 'container',
                    flex: 1,
                    reference: 'mainCardPanel',
                    cls: 'sencha-dash-right-main-container',
                    itemId: 'contentPanel',
                    layout: {
                        type: 'card',
                        anchor: '100%'
                    }
                }
            ]
        }
    ]
});
