/**
 * Created by Erwan on 14/01/2016.
 */
var myoApp = angular.module('myoApp',[]);

myoApp.controller('MainController', ['$scope', 'displayService', function($scope, displayService) {
    $scope.greeting = 'Hola!';
    console.log('Main controller init');
}]);