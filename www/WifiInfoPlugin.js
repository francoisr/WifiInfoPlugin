var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');

var wifiinfo = {
    lastPosition:null
    , // reference to last known (cached) position returned
    test:function(){alert('in wifiiinfo.test, // reference to last known (cached) position returned')},
    getWifiInfo: function (successCallback, errorCallback) {
		exec(win, fail, 'WifiInfoPlugin', null, [] );

		var win = function (p) {
		    successCallback(pos);
            };

		var fail = function (p) {
		    errorCallback(pos);
            };
        }
	};

module.exports = wifiinfo;