'use strict';

const device = require('../index'),
      assert = require('unit.js');

describe('Entry-Point', () =>
{
    it('Detect without user agent in Node', done =>
    {
        const detected = device.detect();

        assert.object(detected)
            .hasProperty('browser', 'Unknow')
            .hasProperty('device' , 'Node.js')
            .hasProperty('os'     , 'Node.js')
        ;

        done();
    });

    it('Detect with user agent in Node', done =>
    {
        const userAgent = 'Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19';
        const detected  = device.detect(userAgent);

        assert.object(detected)
            .hasProperty('browser', 'Chrome')
            .hasProperty('device' , 'Mobile')
            .hasProperty('os'     , 'Android')
        ;

        done();
    });

    it('Detect without user agent in Browser', done =>
    {
        global.window = {
            navigator: {
                userAgent: 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:21.0) Gecko/20130331 Firefox/21.0'
            }
        };

        const detected = device.detect();

        assert.object(detected)
            .hasProperty('browser', 'Firefox')
            .hasProperty('device' , 'Desktop')
            .hasProperty('os'     , 'Linux')
        ;

        done();
    });

    it('Detect with user agent in Browser', done =>
    {
        global.window = {
            navigator: {
                userAgent: 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:21.0) Gecko/20130331 Firefox/21.0'
            }
        };

        const userAgent = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; en-US) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27';
        const detected  = device.detect(userAgent);

        assert.object(detected)
            .hasProperty('browser', 'Safari')
            .hasProperty('device' , 'Desktop')
            .hasProperty('os'     , 'macOS')
        ;

        done();
    });
});
