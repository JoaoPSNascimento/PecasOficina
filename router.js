const handler = require('./handler');

function route(pathname, req, res) {
  if (pathname === '/') {
    handler.home(req, res);
  } else if (pathname === '/about') {
    handler.about(req, res);
  } else if (pathname === '/contact') {
    handler.contact(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not found');
    res.end();
  }
}

module.exports = {
  route,
};
