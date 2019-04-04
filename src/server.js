const app = require('./app');
const http = require('http');
const server = http.createServer(app);

server.listen(5000);

server.on('listening', () => {
    console.log('server is listening on port 5000');
})