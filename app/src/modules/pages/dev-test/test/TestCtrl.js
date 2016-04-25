'use strict';

angular.module('myApp').controller('TestCtrl', ['$scope', '$timeout', 'appHttp', 'UserModel', '$location', function($scope, $timeout, appHttp, UserModel, $location) {
	
	$scope.log=[];
	function logit(text, params) {
		console.log('logit: '+text);
		$scope.log.push(text);
	}

	$scope.scopeOne = 'scope one';

	$scope.$on('appMyDirectiveEvt1', function(evt, params) {
		logit("controller directive evt");
	});

	$scope.funcOne = function() {
		logit('funcOne called1');
	};

	$scope.myVar ='var1';
	$scope.user =UserModel.load();
	
	$scope.swipeIt =function(evt, direction, params) {
		logit('swipe: '+direction);
	};
	
	$scope.tapIt =function(evt, params) {
		logit('tap');
	};
}]);