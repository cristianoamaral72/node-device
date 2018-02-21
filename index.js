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
    if (typeof window !== 'undefined') {
        userAgent = userAgent || window.navigator.userAgent;
    } else if (!userAgent) {
        userAgent = 'Node.js';
    }

    return detector.detect(userAgent);
};
