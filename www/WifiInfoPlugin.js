cordova.define("org.apache.cordova.plugin.wifiinfo.WifiInfo", function(require, exports, module) {
var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');

var wifiinfo = {
    lastPosition:null
    , // reference to last known (cached) position returned
    test:function(){alert('in wifiiinfo.test, // reference to last known (cached) position returned')},
    getWifiInfo: function (successCallback, errorCallback) {
		var win = function (p) {
            console.debug('win, info: ' + JSON.stringify(p));
		    successCallback(p);
            };

		var fail = function (p) {
		    console.debug('fail');
		    errorCallback(p);
            };
            
        exec(win, fail, 'WifiInfoPlugin', null, [] );
        }
	};

module.exports = wifiinfo;
});