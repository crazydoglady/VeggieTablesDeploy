(function () {
"use Strict";
angular.module('farmApp')
.factory('RestaurantService', function( $http, $rootScope, $routeParams){
	
	var server = 'http://tiy-fee-rest.herokuapp.com/collections/vtrestaurants';
	
	var getRests = function () {
		return $http.get(server);
	};

	var getOneRest = function (id) {
		console.log(id , 'RestServId');
		return $http.get(server + '/' + id);
	};

	var addRest = function (newEats) {
		console.log(newEats.name);
		$http.post(server, newEats);
	};

	var deleteRest = function (id) {
		$http.delete(server + '/' + id);
	};

	var editRest = function (producer, id) {
		$http.put(server + '/' + id, producer)
	};
	return	{
		//public : private
		getRestaurants: getRests,
		getSingleRestaurant: getOneRest,
		addRestaurant: addRest,
		deleteRestaurant: deleteRest,
		editRestaurant: editRest
	}
});



})();//end big function