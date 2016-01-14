/**
 * Created by Erwan on 14/01/2016.
 */
var socket = io.connect('http://localhost:3000');
var myoApp = angular.module('myoApp',[]);

myoApp.controller('MainController', ['$scope', 'displayService', function($scope, displayService) {
    $scope.greeting = 'Hola!';
	$scope.event;
    console.log('Main controller init');
	$scope.socketEmit = function(event){
		socket.emit('client_event', event);
		console.log('emit : '+ event);
	}	
	socket.on('socket_event', function(){
		var delivery = new Delivery(socket);

		delivery.on('receive.start',function(fileUID){
		  console.log('receiving a file!');
		});

		delivery.on('receive.success',function(file){
		  var params = file.params;
		  if (file.isImage()) {
			$('img').attr('src', file.dataURL());
		  };
		});
	});
}]);


			// socket_data = socket_data + event;
			// var oldImg = document.getElementById('imgid');
			// var newImg = new Image();
			// newImg.src = socket_data;
			// newImg.id = 'imgid';
			// oldImg.parentNode.replaceChild(newImg, oldImg);
     