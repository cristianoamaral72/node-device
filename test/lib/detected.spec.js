'use strict';

const Detected = require('../../lib/detected'),
      assert   = require('unit.js');

describe('Detected', () =>
{
    it('Empty class', done =>
    {
        const detected = new Detected();

        assert.object(detected)
            .hasProperty('_browser', '')
            .hasProperty('_device', '')
            .hasProperty('_os', '');

        done();
    });

    it('get/set Browser', done =>
    {
        const detected   = new Detected();
        detected.browser = 'Browser Name';

        assert.string(detected.browser).isEqualTo('Browser Name');
        done();
    });

    it('get/set Device', done =>
    {
        const detected  = new Detected();
        detected.device = 'Device Name';

        assert.string(detected.device).isEqualTo('Device Name');
        done();
    });

    it('get/set OS', done =>
    {
        const detected = new Detected();
        detected.os    = 'OS Name';

        assert.string(detected.os).isEqualTo('OS Name');
        done();
    });
});
