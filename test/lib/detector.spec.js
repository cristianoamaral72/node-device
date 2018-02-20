'use strict';

const detector = require('../../lib/detector'),
      assert   = require('unit.js');

const devices = [
    {
        name     : 'chrome-linux-desktop',
        useragent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36',
        browser  : 'Chrome',
        device   : 'Desktop',
        os       : 'Linux',
    },
];

describe('Detector', () =>
{
    devices.forEach(info =>
    {
        it(`Detect: ${info.name}`, done =>
        {
            const detected = detector.detect(info.useragent);

            console.log(detected);

            assert.object(detected)
                .hasProperty('device' , info.device)
                .hasProperty('browser', info.browser)
                .hasProperty('os'     , info.os);

            done();
        });
    });
});
