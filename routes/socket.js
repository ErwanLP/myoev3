/**
 * Created by Erwan on 07/01/2016.
 */
var controller_main = require('./../controller/controller_main');
var dl  = require('delivery');

module.exports = function (socket) {
    //You can declare all of your socket listeners in this file, but it's not required

    socket.on('login', function() {
        console.log('logged in')
    });
    socket.on('socket_event', function(event) {
        controller_main.treatment(event);
		  var delivery = dl.listen(event);
		  delivery.on('delivery.connect',function(delivery){

			delivery.send({
			  name: event +'.jpg',
			  path : './../../public/img/'+event+'.jpg',
			  params: {foo: 'bar'}
			});

			delivery.on('send.success',function(file){
			  console.log('File successfully sent to client!');
			});

		  });
    });
};