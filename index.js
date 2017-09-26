let express = require('express');
let compression = require('compression');

module.exports = () => {

  let app = express();

  let PORT = process.env.PORT || 3000;

  app.use(compression());
  app.use(express.static(__dirname + '/static'));

  //Redirect for front end routes
  app.get('*', (req, res) => {
    return res.redirect('/#!' + req.originalUrl);
  });

  let server = app.listen(PORT, () => {
    let host = server.address().address;
    let port = server.address().port;

    console.log('[Website] started listening at http://%s:%s', host, port);
  });

  return server;

};