var http = require('http');
var ip = '192.168.12.184';
var vfs = require('vfs-local')({
  root: __dirname + "/public/"
});

var server = http.createServer(
	require('vfs-http-adapter')('/', vfs)
);

server.listen(8000, ip);
console.log('editing live2');
console.log('http://'+ ip + ':8000');
