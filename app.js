/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Gui.Application',

    name: 'Gui',

    requires: [
        // This will automatically load all classes in the Gui namespace
        // so that application classes do not need to require each other.
        'Gui.util.RestApiUrlUtil',
        'Gui.*'
    ],

    // The name of the initial view to create.
    mainView: 'Gui.view.main.Main'
});
