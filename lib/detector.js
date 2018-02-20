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
