Ext.define('Gui.view.input.InputModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.input',

    // links: {
    //     input: {
    //         type: 'Gui.model.InputModel',
    //         create: true
    //     }
    // },

    data: {
        'inputStore': null
    },

    setInputStore: function (store) {
        this.set('inputStore', store)
    }
});
