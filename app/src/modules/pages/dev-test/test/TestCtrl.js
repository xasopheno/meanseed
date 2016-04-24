'use strict';

angular.module('myApp').controller('TestCtrl', ['$scope', '$timeout', 'appHttp', 'UserModel', '$location', function($scope, $timeout, appHttp, UserModel, $location) {
	
	$scope.scopeOne = 'scope one';

	$scope.$on('appMyDirectiveEvt1', function(evt, params) {
		console.log("controller directive evt");
	});

	$scope.funcOne = function() {
		console.log('funcOne controller');
	};

	$scope.myVar ='var1';
	$scope.user =UserModel.load();
	
	$scope.swipeIt =function(evt, direction, params) {
		console.log('swipe: '+direction);
	};
	
	$scope.tapIt =function(evt, params) {
		console.log('tap');
	};
}]);