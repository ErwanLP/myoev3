/**
 * Created by Erwan on 07/01/2016.
 */
var controller_main = require('./../controller/controller_main');

module.exports = function (socket) {
    //You can declare all of your socket listeners in this file, but it's not required

    socket.on('login', function() {
        console.log('logged in')
    });
    socket.on('client_event', function(client_event) {
        controller_main.treatment(client_event);
    });
};