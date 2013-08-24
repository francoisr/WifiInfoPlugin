var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec'),
    PositionError = require('./PositionError'),
    Position = require('./Position');

var WifiInfo= function() {
};

WifiInfo.prototype.get = function(success, fail) {
		exec(success, success, 'WifiInfoPlugin', null, [] );
};

module.exports = WifiInfo;