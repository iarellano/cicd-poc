/**
 * Created by isaias on 11/12/17.
 */

var expect = require('chai').expect;
var sinon = require('sinon');

var moduleLoader = require('./common/moduleLoader.js');
var mockFactory = require('./common/mockFactory.js');
var json = require('./common/jsonComparer.js');

var js = '../../../apiproxy/resources/jsc/JS-BuildTargetPath.js';

describe('feature: Test final request path', function() {

    it('should be api/families.ashx', function(done) {

        var mock = mockFactory.getMock();

        mock.contextGetVariableMethod.withArgs('flow.target.basepath').returns('api');
        mock.contextGetVariableMethod.withArgs('proxy.pathsuffix').returns('families');

        moduleLoader.load(js, function(err) {

            expect(err).to.be.undefined;

            expect(mock.contextSetVariableMethod.calledWith('flow.target.basepath','api/families.ashx')).to.be.true;
            expect(mock.contextSetVariableMethod.calledWith('target.copy.pathsuffix', false)).to.be.true;

            done();
        });
    });
});