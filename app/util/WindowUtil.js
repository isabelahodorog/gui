Ext.define('Gui.util.WindowUtil', {

    requires: [
        'Ext.window.Window'
    ],
    statics: {
        closeActiveWindowIfAny: function () {
            var win = Ext.WindowManager.getActive();
            if (win) {
                win.close();
            }
        }
    }
});