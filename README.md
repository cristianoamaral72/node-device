# Device Detector [![npm](http://img.shields.io/npm/v/node-device.svg)](https://www.npmjs.com/package/node-device) ![Downloads](https://img.shields.io/npm/dm/node-device.svg) [![Build Status](https://secure.travis-ci.org/leonardothibes/node-device.png)](http://travis-ci.org/leonardothibes/node-device) [![Package Quality](http://npm.packagequality.com/shield/node-device.svg)](http://packagequality.com/#?package=node-device) [![License](https://img.shields.io/npm/l/node-device.svg)](LICENSE)

Node.js device detector.

Installation
------------

```bash
npm install node-device --save
```

Examples
--------

* [Providing User Agent](#providing-user-agent)
* [Not Providing User Agent](#not-providing-user-agent)

Providing User Agent
--------------------

```js
const device = require('node-device');

const userAgent = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; en-US) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27';

device.detect(userAgent); // { browser: 'Safari', device: 'Desktop', os: 'macOS' }
```

Not Providing User Agent
------------------------

```js

// In Browser
<script src="dist/node-device.min.js"></script>

window.device.detect(); // { browser: 'Safari', device: 'Desktop', os: 'macOS' }

// In Node.js
const device = require('node-device');

device.detect() // { browser: 'Unknow', device: 'Node.js', os: 'Node.js' }

```

Test and development
--------------------

* Install external dependencies: **``npm install``**
* Run the test suite without coverage: **``npm test``**
* Run the test suite with coverage: **``npm run testdox``**

How to Contribute
-----------------

* Open a pull request or an issue about what you want to implement / change. We're glad for any help!
* Please be aware that we'll only accept fully tested code.

Contributors
------------

 * **Leonardo Thibes <leonardothibes@gmail.com>**

LICENSE
=======

Copyright (c) 2018 Leonardo Thibes

The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
