/* jslint node: true */
'use strict';

// Increase timeout from default of 5 seconds to 30 seconds
var configure = function () {
  this.setDefaultTimeout(30 * 1000);
};

module.exports = configure;
