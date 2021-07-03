### What Socket.IO is ?
Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server. 

### Documentation
Please see the documentation [here](https://socket.io/docs/)

### socket.io-website

Socket.IO website and blog at [socket.io](https://socket.io/).

### this project use conjunction with Express

Starting with **3.0**, express applications have become request handler functions that you pass to `http` or `http` `Server` instances. You need to pass the `Server` to `socket.io`, and not the express application function. Also make sure to call `.listen` on the `server`, not the `app`.

```js
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', () => { /* … */ });
server.listen(3333);
io.listen(3333);
```

### install dependencies

```shell
yarn install
```

### watch in localhost

```shell
yarn start
```

### standalone (coming soon...)

```js
const io = require('socket.io')();
io.on('connection', client => { ... });
io.listen(3000);
```



