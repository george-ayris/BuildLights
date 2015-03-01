var udp = require("dgram");
var client = udp.createSocket('udp4');

var port = 8899,
    address = '192.168.1.124';

var NO_COLOUR = 0x00,
    RED = 0xB0,
    VIOLET = 0x00,
    ROYAL_BLUE = 0x10,
    BABY_BLUE = 0x20,
    AQUA = 0x30,
    MINT = 0x40,
    SEAFOAM_GREEN = 0x50,
    GREEN = 0x60,
    LIME_GREEN = 0x70,
    YELLOW = 0x80,
    YELLOW_ORANGE = 0x90,
    ORANGE = 0xA0,
    RED = 0xB0,
    PINK = 0xC0,
    FUSIA = 0xD0,
    LILAC = 0xE0,
    LAVENDAR = 0xF0

var ON = 0x22,
    OFF = 0x21,
    CHANGE_COLOUR = 0x20,
    DISCO = 0x27

callback = function (err, bytes) {
    if (err) {
        console.log("udp error ", err);
    } else {
        console.log("bytes sent: ", buffer, "to: ", address, ":", port);
    }
    client.close();
}

function createMessage(command, colour) {
    var closeByte = 0x55;
    return new Buffer([command, colour, closeByte]);
}

var buffer = createMessage(CHANGE_COLOUR, FUSIA)
client.send(buffer, 0, buffer.length, port, address, callback);
