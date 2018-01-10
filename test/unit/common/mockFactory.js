var expect = require('chai').expect;
var sinon = require('sinon');

var contextGetVariableMethod,
	contextSetVariableMethod,
	contextProperties,
	httpClientSendMethod,
	requestConstr,
	globalProperties,
	printMethod;

function setProperty(object, property, value) {
	var dotIndex = property.indexOf(".");
	if (dotIndex == -1) {
		object[property] = value;
	} else {
		var thisProperty = property.slice(0, dotIndex);
		if (!object.hasOwnProperty(thisProperty)) {
			object[thisProperty] = {};
		}
		setProperty(object[thisProperty], property.slice(dotIndex + 1), value)
	}
}

beforeEach(function() {

	global.context = {
		getVariable: function(s) {},
		setVariable: function(a, b) {},
		setProperty: function(name, value) {
			setProperty(global.context, name, value)
		}
	};

	global.properties = {
		setProperty: function(name, value) {
			setProperty(global.properties, name, value)
		}
	};

	global.httpClient = {
		send: function(s) {}
	};

	global.Request = function(s) {};

	global.print = function (s) {
		console.log(s);
	}

	contextGetVariableMethod = sinon.stub(global.context, 'getVariable');
	contextSetVariableMethod = sinon.spy(global.context, 'setVariable');
	contextProperties = sinon.spy(global.context, 'setProperty');
	httpClientSendMethod = sinon.stub(httpClient, 'send');
	requestConstr = sinon.spy(global, 'Request');
	printMethod = sinon.spy(global, 'print');
	globalProperties = sinon.spy(global.properties, 'setProperty');

});

afterEach(function() {
	contextGetVariableMethod.restore();
	contextSetVariableMethod.restore();
	contextProperties.restore();
	httpClientSendMethod.restore();
	requestConstr.restore();
	globalProperties.restore();
});

exports.getMock = function() {
	return {
		contextGetVariableMethod: contextGetVariableMethod,
		contextSetVariableMethod: contextSetVariableMethod,
		withContextProperty: contextProperties,
		httpClientSendMethod: httpClientSendMethod,
		requestConstr: requestConstr,
		withProperty: globalProperties,
		printMethod: printMethod
	};
}
