(function () {
	"use strict";
	angular.module('member', [
	'ngRoute'
	])
	.directive('listingDirective', {
		return {
			restrict: 'E',
			scope: {
				product: '=',
				action: '&'
			},
			templateUrl: 'directives/listing-directive.html',
			link : function(scope, element, attrs) {

			}
		};

	});


	})();