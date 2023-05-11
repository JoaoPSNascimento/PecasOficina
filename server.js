const http = require('http');
const url = require('url');
const router = require('./router');

function onRequest(req, res) {
  const pathname = url.parse(req.url).pathname;
  console.log(`Request for ${pathname} received.`);

  router.route(pathname, req, res);
}

http.createServer(onRequest).listen(3000);
console.log('Server has started.');