/* jslint node: true */
'use strict';
var calloutApickli = require('apickli');
var atob = require("atob");

module.exports = function () { 
    this.Given(/^I have a valid access token$/, function (callback) {
        var domain = this.apickli.scenarioVariables["tokenDomain"];
        var basepath = this.apickli.scenarioVariables["tokenBasepath"];

        var clientId = this.apickli.scenarioVariables["clientId"];
        var clientSecret = this.apickli.scenarioVariables["clientSecret"];

        var payload = {
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: "client_credentials"
        };
        
        var callout = new calloutApickli.Apickli('https', domain + basepath);

        callout.addRequestHeader("Content-Type", "application/json");
        callout.setRequestBody(JSON.stringify(payload));
        
        var self = this;
        // console.log( "Edge: " + domain + basepath );
        callout.post("/token", function (error, response) {
            // console.log( "RESPONSE: " + JSON.stringify(response));
            if (error) {
                callback(new Error(error));
            }

            var jwt = callout.getAccessTokenFromResponseBodyPath("$.access_token");

            var tokenData=jwt.split('.')[1];
            console.log(tokenData);
            var tokenData=JSON.parse(atob(tokenData));
            var token=tokenData.access_token;
            console.log(token);

            // console.log( "EDGE TOKEN: " + token);
            self.apickli.setAccessToken(token);
            self.apickli.setBearerToken();
            callback();
        });
    });

    // this.Given(/^I have a valid access token from Ping$/, function (callback) {
    //     var domain = this.apickli.scenarioVariables["pingTokenDomain"];
    //     var basepath = this.apickli.scenarioVariables["pingTokenBasepath"];
    //
    //     var pingClientId = this.apickli.scenarioVariables["pingClientId"];
    //     var pingClientSecret = this.apickli.scenarioVariables["pingClientSecret"];
    //
    //     var callout = new calloutApickli.Apickli('https', domain + basepath);
    //     callout.addHttpBasicAuthorizationHeader(pingClientId,pingClientSecret);
    //     callout.addRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //     callout.setRequestBody("grant_type=client_credentials");
    //
    //     var self = this;
    //     // console.log( "PING: " + domain + basepath );
    //     callout.post("/token.oauth2", function (error, response) {
    //         // console.log( "RESPONSE: " + JSON.stringify(response));
    //         if (error) {
    //             callback(new Error(error));
    //         }
    //         var token = callout.getAccessTokenFromResponseBodyPath("$.access_token");
    //         // console.log( "PING TOKEN: " + token);
    //         self.apickli.setAccessToken(token);
    //         self.apickli.setBearerToken();
    //         callback();
    //     });
    // });
};
