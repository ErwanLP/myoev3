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
		if(data.battery_level && data.bluetooth_strength){
			var text = 'Battery = '+data.battery_level ;
			document.getElementById('myoInfo_battery').innerHTML += text;
			document.getElementById('myoInfo_battery_progressBar').value = parseInt(data.battery_level);

			var text2 = 'Bluetooth = ' + data.bluetooth_strength;
			document.getElementById('myoInfo_BT').innerHTML += text2;
			document.getElementById('myoInfo_BT_progressBar').value = parseInt(data.bluetooth_strength);

		}
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
