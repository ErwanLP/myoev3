/**
 * Created by Erwan on 14/01/2016.
 */
//var socket = io.connect('http://localhost:3000');
var myoApp = angular.module('myoApp',[]);

myoApp.controller('MainController', ['$scope', 'displayService', function($scope, displayService) {
	$scope.event = 'up';
	$scope.displayService = displayService;
    console.log('Main controller init');

	console.log(displayService);
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
		$scope.event = current_event;
	}

}]);
