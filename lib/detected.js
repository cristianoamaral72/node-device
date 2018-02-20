'use strict';

/**
 * Detected device.
 */
module.exports = class
{
    constructor()
    {
        this._browser = '';
        this._device  = '';
        this._os      = '';
    }

    set device(device)
    {
        this._device = device;
    }

    get device()
    {
        return this._device;
    }

    set browser(browser)
    {
        this._browser = browser;
    }

    get browser()
    {
        return this._browser;
    }

    set os(os)
    {
        this._os = os;
    }

    get os()
    {
        return this._os;
    }
};
