Ext.application({
    extend: 'Gui.Application',

    name: 'Gui',

    // appFolder: 'app',
    // autoCreateViewport: true,
    // stores: ['InputStore'],
    requires: [
        // This will automatically load all classes in the Gui namespace
        // so that application classes do not need to require each other.
        'Gui.store.InputStore',
        'Gui.util.RestApiUrlUtil',
        'Gui.*'
    ],
    // The name of the initial view to create.
    mainView: 'Gui.view.main.Main'
});
