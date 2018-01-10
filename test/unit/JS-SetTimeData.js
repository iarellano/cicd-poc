var expect = require('chai').expect;
var sinon = require('sinon');

var moduleLoader = require('./common/moduleLoader.js');
var mockFactory = require('./common/mockFactory.js');
var json = require('./common/jsonComparer.js');

var js = '../../../apiproxy/resources/jsc/JS-SetTimeData.js';

describe('feature: Expiry time adjustment', function() {

	it('should be multiplied by 1000', function(done) {
		var mock = mockFactory.getMock();

		mock.contextGetVariableMethod.withArgs('flow.ping.expires.in').returns(42);
		mock.contextGetVariableMethod.withArgs('flow.ping.refresh.expires.in').returns(4242);

		moduleLoader.load(js, function(err) {
			expect(err).to.be.undefined;

			expect(mock.contextSetVariableMethod.calledWith('flow.ping.expires.in','42000')).to.be.true;
			expect(mock.contextSetVariableMethod.calledWith('flow.ping.refresh.expires.in','4242000')).to.be.true;

			done();

		});
	});

});