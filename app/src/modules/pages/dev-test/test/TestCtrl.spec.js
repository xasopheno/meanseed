'use strict';

describe('TestCtrl', function(){
	var $ctrl, $scope ={};
	
	beforeEach(module('myApp'));
	
	beforeEach(inject(function(_$rootScope_, _$controller_) {
		$scope = _$rootScope_.$new();
		$ctrl = _$controller_('TestCtrl', {$scope: $scope});
	}));
	
	it('it should have a funcOne function', function() {
		$scope.funcOne();
		expect($scope.log[($scope.log.length-1)]).toBe('funcOne called')
	});

	it('should have no user if not saved', function() {
		expect($scope.user._id).toBe(false);
	})
});