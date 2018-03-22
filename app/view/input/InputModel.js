Ext.define('Gui.view.input.InputModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.input',

    data: {
        'inputStore': null
    },

    setInputStore: function (store) {
        this.set('inputStore', store)
    }
});
