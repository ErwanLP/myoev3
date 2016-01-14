/**
 * Created by Erwan on 07/01/2016.
 */
var controller_main = require('./../controller/controller_main');
var dl  = require('delivery');

module.exports = function (socket) {
    //You can declare all of your socket listeners in this file, but it's not required

	socket.on('connection', function (socket) {
		console.log('Client connected by socket');
	});
    socket.on('client_event', function(event) {
		console.log('Event from the client to the server: ' + event);
        controller_main.treatment(event);
    });
};