/* jshint node:true */
'use strict';

var apickli = require('apickli');
var config = require('../../test-config.json');

var domain = config.parameters.domain;
var apiproxy = config.parameters.apiproxy;
var basepath = config.parameters.basepath;
var clientId = config.parameters.clientId;
var clientSecret = config.parameters.clientSecret;
var tokenDomain = config.parameters.tokenDomain;
var tokenBasepath = config.parameters.tokenBasepath;
var pingTokenDomain = config.parameters.pingTokenDomain;
var pingTokenBasepath = config.parameters.pingTokenBasepath;
var pingClientId = config.parameters.pingClientId;
var pingClientSecret = config.parameters.pingClientSecret;


console.log('api parameters: [' + domain + ', ' + basepath + ']');

module.exports = function() {
    // cleanup before every scenario
    this.Before(function(scenario, callback) {
        this.apickli = new apickli.Apickli('https', domain + basepath);
        this.apickli.storeValueInScenarioScope("domain", domain);
        this.apickli.storeValueInScenarioScope("apiproxy", apiproxy);
        this.apickli.storeValueInScenarioScope("basepath", basepath);
        this.apickli.storeValueInScenarioScope("clientId", clientId);
        this.apickli.storeValueInScenarioScope("clientSecret", clientSecret);
        this.apickli.storeValueInScenarioScope("tokenDomain", tokenDomain );
        this.apickli.storeValueInScenarioScope("tokenBasepath", tokenBasepath);
        this.apickli.storeValueInScenarioScope("pingTokenDomain", pingTokenDomain );
        this.apickli.storeValueInScenarioScope("pingTokenBasepath", pingTokenBasepath);
        this.apickli.storeValueInScenarioScope("pingClientId", pingClientId);
        this.apickli.storeValueInScenarioScope("pingClientSecret", pingClientSecret);
        callback();
    });
};
