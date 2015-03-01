var express = require('express');
var led = require('limitless-gem');

var app = express();

var con = led.createSocket({
        host: '10.10.100.254',
        port: 8899
    },
    'tcp',
    function () {
        console.log('connected');
    }
);

app.post('/people/build/:status', function (req, res) {
                if (!(req.params.status === "red" || req.params.status === "green")) {
                                res.status(400);
                                res.send('Incorrect status');
                } else {
                                app.status = req.params.status;
                                console.log("People build status is " + app.status);
                                res.status(200);
                                res.send('Status set to ' + app.status);
                                con.send(led.RGBW.ZONE_1_ON);
                }
});

app.listen(3000);
