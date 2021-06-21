# minecraft-ping-js

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-yellowgreen.svg)](http://standardjs.com/)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

A Minecraft Server Pinger in Node.js

## Example
```javascript
const pinger = require('minecraft-ping-js');

// Promise
pinger.pingWithPromise('localhost', 25565).then(console.log).catch(console.error);

// Async
pinger.ping('localhost', 25565, (error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});
```

## Output
```json
{
  "version": { "name": "Requires MC 1.8 / 1.16", "protocol": 754 },
  "players": { "max": 200000, "online": 86460, "sample": [] },
  "description": "             §aHypixel Network  §c[1.8-1.16]\n              §e§lEASTER §b§lEVENT §c§l+ §a§lSALE",
  "favicon": "data:image/png;base64,<LONG_DATA>",
  "ping": 100
}
```

## License
[MIT](LICENSE.md)
