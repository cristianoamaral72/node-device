'use strict';

const detector = require('../../lib/detector'),
      assert   = require('unit.js');

const devices = [
    // Chrome
    {
        name     : 'chrome-linux-desktop',
        useragent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36',
        browser  : 'Chrome',
        device   : 'Desktop',
        os       : 'Linux',
    },
    {
        name     : 'chrome-windows-desktop',
        useragent: 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.94 Safari/537.36',
        browser  : 'Chrome',
        device   : 'Desktop',
        os       : 'Windows',
    },
    {
        name     : 'chrome-mac-desktop',
        useragent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36',
        browser  : 'Chrome',
        device   : 'Desktop',
        os       : 'macOS',
    },
    {
        name     : 'chrome-ios-iphone',
        useragent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_4 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) CriOS/27.0.1453.10 Mobile/10B350 Safari/8536.25',
        browser  : 'Chrome',
        device   : 'iPhone',
        os       : 'iOS',
    },
    {
        name     : 'chrome-ios-ipad',
        useragent: 'Mozilla/5.0 (iPad; CPU iPad OS 6_1_4 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) CriOS/27.0.1453.10 Mobile/10B350 Safari/8536.25',
        browser  : 'Chrome',
        device   : 'iPad',
        os       : 'iOS',
    },
    {
        name     : 'chrome-android-mobile',
        useragent: 'Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19',
        browser  : 'Chrome',
        device   : 'Mobile',
        os       : 'Android',
    },
    // Chrome

    // Firefox
    {
        name     : 'firefox-linux-desktop',
        useragent: 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:21.0) Gecko/20130331 Firefox/21.0',
        browser  : 'Firefox',
        device   : 'Desktop',
        os       : 'Linux',
    },
    {
        name     : 'firefox-windows-desktop',
        useragent: 'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:21.0) Gecko/20100101 Firefox/21.0',
        browser  : 'Firefox',
        device   : 'Desktop',
        os       : 'Windows',
    },
    {
        name     : 'firefox-mac-desktop',
        useragent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:21.0) Gecko/20100101 Firefox/21.0',
        browser  : 'Firefox',
        device   : 'Desktop',
        os       : 'macOS',
    },
    {
        name     : 'firefox-android-mobile',
        useragent: 'Mozilla/5.0 (Android; Mobile; rv:14.0) Gecko/14.0 Firefox/14.0',
        browser  : 'Firefox',
        device   : 'Mobile',
        os       : 'Android',
    },
    {
        name     : 'firefox-android-tablet',
        useragent: 'Mozilla/5.0 (Android; Tablet; rv:14.0) Gecko/14.0 Firefox/14.0',
        browser  : 'Firefox',
        device   : 'Tablet',
        os       : 'Android',
    },
    // Firefox

    // Safari
    {
        name     : 'safari-mac-desktop',
        useragent: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; en-US) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27',
        browser  : 'Safari',
        device   : 'Desktop',
        os       : 'macOS',
    },
    {
        name     : 'safari-iphone-ios',
        useragent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3',
        browser  : 'Safari',
        device   : 'iPhone',
        os       : 'iOS',
    },
    {
        name     : 'safari-ipad-ios',
        useragent: 'Mozilla/5.0 (iPad; CPU OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3',
        browser  : 'Safari',
        device   : 'iPad',
        os       : 'iOS',
    },
    {
        name     : 'safari-ipod-ios',
        useragent: 'Mozilla/5.0 (iPod; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B206 Safari/7534.48.3',
        browser  : 'Safari',
        device   : 'iPod',
        os       : 'iOS',
    },
    // Safari

    // IE
    {
        name     : 'ie-6-windows-desktop',
        useragent: 'Mozilla/4.0 (Windows; MSIE 6.0; Windows NT 5.2)',
        browser  : 'IE',
        device   : 'Desktop',
        os       : 'Windows',
    },
    {
        name     : 'ie-7-windows-desktop',
        useragent: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)',
        browser  : 'IE',
        device   : 'Desktop',
        os       : 'Windows',
    },
    {
        name     : 'ie-8-windows-desktop',
        useragent: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)',
        browser  : 'IE',
        device   : 'Desktop',
        os       : 'Windows',
    },
    {
        name     : 'ie-9-windows-desktop',
        useragent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)',
        browser  : 'IE',
        device   : 'Desktop',
        os       : 'Windows',
    },
    {
        name     : 'ie-10-windows-desktop',
        useragent: 'Mozilla/5.0 (compatible; WOW64; MSIE 10.0; Windows NT 6.2)',
        browser  : 'IE',
        device   : 'Desktop',
        os       : 'Windows',
    },
    {
        name     : 'ie-11-windows-desktop',
        useragent: 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv 11.0) like Gecko',
        browser  : 'IE',
        device   : 'Desktop',
        os       : 'Windows',
    },
    // IE

    // Edge
    {
        name     : 'edge-12-windows-desktop',
        useragent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246',
        browser  : 'Edge',
        device   : 'Desktop',
        os       : 'Windows',
    },
    {
        name     : 'edge-13-windows-desktop',
        useragent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586',
        browser  : 'Edge',
        device   : 'Desktop',
        os       : 'Windows',
    },
    // Edge

    // IEMobile
    {
        name     : 'iemobile-windowsmobile-7-windowsphone',
        useragent: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; LG; GW910)',
        browser  : 'IEMobile',
        device   : 'WindowsPhone',
        os       : 'WindowsMobile',
    },
    {
        name     : 'iemobile-windowsmobile-7.5-windowsphone',
        useragent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; SAMSUNG; SGH-i917)',
        browser  : 'IEMobile',
        device   : 'WindowsPhone',
        os       : 'WindowsMobile',
    },
    {
        name     : 'iemobile-windowsmobile-8-windowsphone',
        useragent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)',
        browser  : 'IEMobile',
        device   : 'WindowsPhone',
        os       : 'WindowsMobile',
    },
    // IEMobile

    // Opera
    {
        name     : 'opera-linux-desktop',
        useragent: 'Opera/9.80 (X11; Linux x86_64; Edition Linux Mint) Presto/2.12.388 Version/12.16',
        browser  : 'Opera',
        device   : 'Desktop',
        os       : 'Linux',
    },
    {
        name     : 'opera-mac-desktop',
        useragent: 'Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; en) Presto/2.9.168 Version/11.52',
        browser  : 'Opera',
        device   : 'Desktop',
        os       : 'macOS',
    },
    {
        name     : 'opera-windows-desktop',
        useragent: 'Opera/9.80 (Windows NT 6.1; WOW64; U; en) Presto/2.10.229 Version/11.62',
        browser  : 'Opera',
        device   : 'Desktop',
        os       : 'Windows',
    },
    // Opera

    // Unknow
    {
        name     : 'unknow',
        useragent: 'invalid',
        browser  : 'Unknow',
        device   : 'Unknow',
        os       : 'Unknow',
    },
    // Unknow
];

describe('Detector', () =>
{
    devices.forEach(info =>
    {
        it(`Detect: ${info.name}`, done =>
        {
            const detected = detector.detect(info.useragent);

            assert.object(detected)
                .hasProperty('device' , info.device)
                .hasProperty('browser', info.browser)
                .hasProperty('os'     , info.os);

            done();
        });
    });
});
