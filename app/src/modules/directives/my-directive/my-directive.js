/**
@toc

@param {Object} scope (attrs that must be defined on the scope (i.e. in the controller) - they can't just be defined in the partial html). REMEMBER: use snake-case when setting these on the partial!
	@param {string} scopeOne A scope property

@param {Object} attrs REMEMBER: use snake-case when setting these on the partial! i.e. my-attr='1' NOT myAttr='1'
	@param {string} customText Some special text
	@param {function} funcOne Custom function

@dependencies
TODO

@usage
partial / html:
<div app-my-directive></div>
TODO

controller / js:
TODO

//end: usage
*/

'use strict';

angular.module('app').directive('appMyDirective', [ function () {

	return {
		restrict: 'A',
		scope: { 
			scopeOne: '=',
			funcOne: '&?'
		},

		// replace: true,
		template: function(element, attrs) {
			var defaultsAttrs ={
			};
			for(var xx in defaultsAttrs) {
				if(attrs[xx] ===undefined) {
					attrs[xx] =defaultsAttrs[xx];
				}
			}
			
			if(!attrs.customText) {
				attrs.customText = '';
			}

			var html ="<div class='app-my-directive-cont'>"+
				"my-directive"+
				"<br/>line 2"+
				"<br/>custom text: "+attrs.customText+
				"<br/> scope one: {{scopeOne}}"+
				"<br/> scope two: {{scopeTwo}}"+
				"<br/>"+
				"<div class='btn' ng-click='emitEvt()'>emitEvt</div>"+
				"<div class='btn' ng-click='funcOne()'>Func One</div>"+
			"</div>";
			return html;
		},
		
		link: function(scope, element, attrs) {
		},
		
		controller: function($scope, $element, $attrs) {
			$scope.scopeTwo = "scope two";

			$scope.emitEvt = function() {
				$scope.$emit('appMyDirectiveEvt1', {});
				console.log('directive emit event');
			};
		}
	};
}]);