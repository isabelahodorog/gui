Ext.define('Gui.util.RestApiUrlUtil', {
    statics: {
        getEnv: function() {
            return (Ext.manifest['ENV']) ? Ext.manifest['ENV'] : "";
        },
        getBasePath: function() {
            var basePath = window.location.protocol + "//" + window.location.host + "/" + this.getEnv()['remoteBaseUrl'];
            if(window.location.host.indexOf("localhost") !== -1) {
                basePath = "http://localhost:8090/" + this.getEnv()['remoteBaseUrl'];
            }
            return basePath + '/v1';
        },

        getAddInputUrl: function () {
            return this.getBasePath() + "/in";
        },

        getGetInputUrl: function () {
            return this.getBasePath() + "/get_input";
        },

        getGetSingleInput: function () {
            return this.getBasePath() + "/get_single_input";
        },

        getGetAddProviderUrl: function () {
            return this.getBasePath() + "/add_provider";
        },

        getGetProviderUrl: function () {
            return this.getBasePath() + "/get_provider";
        },

        getGetSingleProviderUrl: function () {
            return this.getBasePath() + "/get_single_provider";
        }
    }
});