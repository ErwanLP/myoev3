/**
 * Created by Erwan on 14/01/2016.
 */
//var socket = io.connect('http://localhost:3000');
var myoApp = angular.module('myoApp',[]);

myoApp.controller('MainController', ['$scope', 'displayService', 'myoInfo', function($scope, displayService, myoInfo) {
	$scope.event = 'up';
	$scope.displayService = displayService;
    console.log('Main controller init');

	myoInfo.getMyoInfo(function(data){
		var text = 'Battery = '+data.battery_level + '\n\b Bluetooth = ' + data.bluetooth_strength;
		document.getElementById('myoInfo').innerHTML += text;
	});
	displayService.callbackController = function (current_event) {
		console.log('event from the client to the server : '+ current_event);
		socket.emit('client_event', current_event);
	};

	socket.on('server_event', function(current_event){
		console.log('event from the server to the client:' + current_event);
		change_event(current_event);
		displayService.mode = current_event;
	});

	var change_event = function(current_event){
		if(!current_event){
			current_event = 'stop';
		}
		document.getElementById("imageEvent").src="images/events/"+current_event+".png";
	}

}]);
