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
            return basePath + 'licenta/v1';
        },

        getAddInputUrl: function () {
            return this.getBasePath() + "/input/in";
        },

        getGetInputUrl: function () {
            return this.getBasePath() + "/input/get_input";
        },

        getGetSingleInput: function () {
            return this.getBasePath() + "/input/get_single_input";
        },

        getAddProviderUrl: function () {
            return this.getBasePath() + "/input/add_provider";
        },

        getGetProviderUrl: function () {
            return this.getBasePath() + "/input/get_provider";
        },

        getGetSingleProviderUrl: function () {
            return this.getBasePath() + "/input/get_single_provider";
        },

        getRegisterUrl: function () {
            return this.getBasePath() + "/register";
        },

        getLoginUrl: function () {
            return this.getBasePath() + "/login";
        }
    }
});