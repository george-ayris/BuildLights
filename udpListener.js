var udp = require("dgram");
var server = udp.createSocket('udp4');
var port = 8899,
    ip = '192.168.43.89';

server.on("message", function(msg, rinfo) {
    console.log("message recieved:", msg, "from", rinfo.address)
});

server.on("listening", function () {
    console.log("Listening on port:", port);
});

server.on("error", function (err) {
    console.log("server error", err.stack);
    server.close();
});

server.bind(port, ip);
