(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./lib/detected":2,"./lib/detector":3}],2:[function(require,module,exports){
'use strict';

/**
 * Detected device.
 */
module.exports = class
{
    constructor()
    {
        this.browser = '';
        this.device  = '';
        this.os      = '';
    }
};

},{}],3:[function(require,module,exports){
'use strict';

const Detected = require('./detected');

/**
 * Detects a device info.
 *
 * @param {String} userAgent
 */
exports.detect = function(userAgent)
{
    const detected   = new Detected();
    detected.browser = detectBrowser(userAgent);

    if (userAgent.match(/(IEMobile)/)) {
        detected.device = 'WindowsPhone';
        detected.os     = 'WindowsMobile';
    } else if (userAgent.match(/(iPod)/)) {
        detected.device = 'iPod';
        detected.os     = 'iOS';
    } else if (userAgent.match(/(iPhone)/)) {
        detected.device = 'iPhone';
        detected.os     = 'iOS';
    } else if (userAgent.match(/(iPad)/)) {
        detected.device = 'iPad';
        detected.os     = 'iOS';
    } else if (userAgent.match(/(Android)/) && userAgent.match(/(Tablet)/)) {
        detected.device = 'Tablet';
        detected.os     = 'Android';
    } else if (userAgent.match(/(Android)/)) {
        detected.device = 'Mobile';
        detected.os     = 'Android';
    } else if (userAgent.match(/(Macintosh)/)) {
        detected.device = 'Desktop';
        detected.os     = 'macOS';
    } else if (userAgent.match(/(Windows)/)) {
        detected.device = 'Desktop';
        detected.os     = 'Windows';
    } else if (userAgent.match(/(Linux)/)) {
        detected.device = 'Desktop';
        detected.os     = 'Linux';
    } else if (userAgent.match(/(Node.js)/)) {
        detected.device = 'Node.js';
        detected.os     = 'Node.js';
    } else {
        detected.device = 'Unknow';
        detected.os     = 'Unknow';
    }

    return detected;
};

/**
 * @param {String} userAgent
 *
 * @return {String}
 */
function detectBrowser(userAgent)
{
    let browser = 'Unknow';

    if (userAgent.indexOf('Opera') > 0 || userAgent.indexOf('Presto') > 0) {
        browser = 'Opera';
    } else if (userAgent.indexOf('IEMobile') > 0) {
        browser = 'IEMobile';
    } else if (userAgent.indexOf('Edge') > 0) {
        browser = 'Edge';
    } else if (userAgent.indexOf('MSIE') > 0 || userAgent.indexOf('Trident') > 0) {
        browser = 'IE';
    } else if (userAgent.indexOf('Chrome') > 0 || userAgent.indexOf('CriOS') > 0) {
        browser = 'Chrome';
    } else if (userAgent.indexOf('Firefox') > 0) {
        browser = 'Firefox';
    } else if (userAgent.indexOf('Safari') > 0) {
        browser = 'Safari';
    }

    return browser;
}

},{"./detected":2}],4:[function(require,module,exports){
window.device = require('./index');

},{"./index":1}]},{},[4]);
