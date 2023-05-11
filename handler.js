function home(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Welcome to the homepage!');
    res.end();
  }
  
  function about(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Welcome to the about page!');
    res.end();
  }
  
  function contact(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Welcome to the contact page!');
    res.end();
  }
  
  module.exports = {
    home,
    about,
    contact,
  };
  