var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');

var wifiinfo = {
    lastPosition:null
    , // reference to last known (cached) position returned
    test:function(){alert('in wifiiinfo.test, // reference to last known (cached) position returned')},
    getWifiInfo:function(success, fail) {
//        alert('calling : exec(success, fail, "WifiInfoPlugin", null, [] );')
		exec(success, fail, 'WifiInfoPlugin', null, [] );
//	    alert('called : exec(success, fail, "WifiInfoPlugin", null, [] );')
		}
	};

module.exports = wifiinfo;