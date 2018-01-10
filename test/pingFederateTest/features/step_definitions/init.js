/* jshint node:true */
'use strict';

var apickli = require('apickli');
var config = require('../../test-config.json');

var domain = config.parameters.domain;
var basepath = config.parameters.basepath;

console.log('api parameters: [' + domain + ', ' + basepath + ']');

module.exports = function() {
    // cleanup before every scenario
    this.Before(function(scenario, callback) {
        this.apickli = new apickli.Apickli('https', domain + basepath);
        this.apickli.storeValueInScenarioScope("domain", domain);
        this.apickli.storeValueInScenarioScope("basepath", basepath);
        callback();
    });
};
