/**
*/

'use strict';

angular.module('myApp').controller('MyPageCtrl', ['$scope', 'appItemsList',
function($scope, appItemsList) {
	var items=[
		{
			title: 'title 1'
		},
		{
			title: 'title 2'
		},
		{
			title: 'title 3'
		},
		{
			title: 'title 4'
		}
	];
	appItemsList.save(items, {});
	$scope.items=appItemsList.load({});
}]);