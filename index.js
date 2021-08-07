// require your server and launch it here
const server = require('./api/server');

server.listen(5500, () => {
  console.log('Server listening on port 5500');
});