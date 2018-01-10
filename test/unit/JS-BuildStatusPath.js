/**
 * Created by isaias on 8/11/17.
 */

/**
 * Created by isaias on 11/12/17.
 */

var expect = require('chai').expect;
var sinon = require('sinon');

var moduleLoader = require('./common/moduleLoader.js');
var mockFactory = require('./common/mockFactory.js');
var json = require('./common/jsonComparer.js');

var js = '../../../apiproxy/resources/jsc/JS-BuildStatusPath.js';

describe('feature: Test final status path', function() {

    it('should be speck-check${deployment.suffix}/status', function(done) {

        var mock = mockFactory.getMock();

        mock.contextGetVariableMethod.withArgs('flow.target.basepath').returns('api');
        mock.contextGetVariableMethod.withArgs('health.pathsuffix').returns('/status');

        moduleLoader.load(js, function(err) {

            expect(err).to.be.undefined;

            expect(mock.contextSetVariableMethod.calledWith('flow.target.basepath','api/status')).to.be.true;
            expect(mock.contextSetVariableMethod.calledWith('target.copy.pathsuffix', false)).to.be.true;

            done();
        });
    });
});
