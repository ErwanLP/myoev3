/**
 * Created by Erwan on 06/01/2016.
 */
var controller_socket = {};

var socketMVC = require('socket.mvc');

/*Login logic*/
controller_socket.emit = function(event){
    console.log('Socket Emit ' + event);
    socketMVC.everyone('socket_event',event);
} ;

module.exports = controller_socket;
