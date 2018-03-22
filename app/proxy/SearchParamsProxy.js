Ext.define('Gui.proxy.SearchParamsProxy', {
    extend: 'Ext.data.proxy.Rest',
    alias: 'proxy.SearchParams',

    requires: [
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    startParam: false, // remove startParam as we do not use it
    limitParam: 'size',
    noCache: false, // remove param '_dc',
    sortParam: 'sort',
    filterParam: 'filters',

    getParams: function (operation) {
        if(!operation.isReadOperation) {
            return this.callParent(arguments);
        }

        var me = this,
            paramsArr = this.callParent(arguments),
            sorters = operation.getSorters(),
            filters = operation.getFilters(),
            sortParam = me.getSortParam(),
            filterParam = me.getFilterParam();
        delete paramsArr[sortParam];
        delete paramsArr[filterParam];

        if(sorters) {
            for(var i = 0; i< filters.length; i++) {
                var filter = filters[i];
                var prefix = filterParam + '[' + i + '].';
                paramsArr[prefix + 'property'] = filter.getProperty();
                paramsArr[prefix + 'value'] = filter.getValue();
            }
        }

        return paramsArr;
    },

    reader: {
        type: 'json',
        transform: {
            fn: function (obj) {
                return obj;
            }
        }
    },

    writer: {
        type: 'json',
        writeAllFields: true,
        transform: {
            fn: function (data, request) {
                return data;
            }
        }
    }
});