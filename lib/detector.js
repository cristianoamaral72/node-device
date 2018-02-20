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

    if (userAgent.match(/(iPhone)/)) {
        detected.device = 'iPhone';
        detected.os     = 'iOS';
    } else if (userAgent.match(/(iPad)/)) {
        detected.device = 'iPad';
        detected.os     = 'iOS';
    } else if (userAgent.match(/(iPod)/)) {
        detected.device = 'iPod';
        detected.os     = 'iOS';
    } else if (userAgent.match(/(BlackBerry|BB10)/)) {
        detected.device = 'BlackBerry';
        detected.os     = 'BlackBerryOS';
    } else if (userAgent.match(/(IEMobile)/)) {
        detected.device = 'WindowsMobile';
        detected.os     = 'WindowsPhone';
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

    if (userAgent.indexOf('OPR') > 0 || userAgent.indexOf('Opera') > 0) {
        browser = 'Opera';
    } else if (userAgent.indexOf('Chrome') > 0 || userAgent.indexOf('CriOS') > 0) {
        browser = 'Chrome';
    } else if (userAgent.indexOf('Firefox') > 0) {
        browser = 'Firefox';
    } else if (userAgent.indexOf('Safari') > 0) {
        browser = 'Safari';
    } else if (userAgent.indexOf('MSIE') > 0) {
        browser = 'IE';
    }

    return browser;
}
