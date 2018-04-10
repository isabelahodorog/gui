Ext.define('Gui.util.FormUtil', {

    statics: {
        performAsyncSave: function(postUrl, formData, callback) {
            var data = formData || new FormData();

            var xhr = new XMLHttpRequest();
            xhr.open('POST', postUrl, true);

            xhr.onload = function () {
                callback(xhr);
            };

            xhr.send(data);
        },

        performAsyncUpdate: function(putUrl, formData, callback) {
            var data = formData || new FormData();

            var xhr = new XMLHttpRequest();
            xhr.open('PUT', putUrl, true);

            xhr.onload = function () {
                callback(xhr);
            };

            xhr.send(data);
        }
    }
});