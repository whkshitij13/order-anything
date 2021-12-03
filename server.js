const http= require('http')
const App= require('./App')

const port =process.env.Port||3000;
 
const server=http.createServer(App);

server.listen(port);