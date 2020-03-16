const http = require('http');

let app = require('../app');

//nodig voor websockets
let server = http.createServer(app);

server.listen(8080, () => {
    console.log('Listening on port 8080');
})