'use strict';

const detector = require('./lib/detector'),
      Detected = require('./lib/detected');

/**
 * Detects a device info.
 *
 * @param {String} [userAgent] If not provided, "window.navigator.userAgent" will be assumed.
 *
 * @return {Detected}
 */
exports.detect = function(userAgent)
{
    userAgent = userAgent || window.navigator.userAgent;

    return detector.detect(userAgent);
};
