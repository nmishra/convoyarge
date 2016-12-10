require('angular');
var app = angular.module("app", [])
	.controller('MainController', function($scope){
		console.log("i am here");
  	  	$scope.message = 'Angular Works !!!';
});	