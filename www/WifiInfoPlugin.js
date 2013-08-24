var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');

var wifiinfo = {
    get:function(success, fail) {
		exec(success, success, 'WifiInfoPlugin', null, [] );
		}
	};

module.exports = wifiinfo;