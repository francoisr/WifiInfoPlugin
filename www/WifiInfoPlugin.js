var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');

var wifiinfo = {
    getWifiInfo:function(success, fail) {
        alert('calling : exec(success, fail, "WifiInfoPlugin", null, [] );')
		exec(success, fail, 'WifiInfoPlugin', null, [] );
	    alert('called : exec(success, fail, ·WifiInfoPlugin", null, [] );')
		}
	}

module.exports = wifiinfo;