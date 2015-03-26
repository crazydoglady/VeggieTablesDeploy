(function () {
"use Strict";
angular.module('farm')
.factory('FarmService', function($http, $rootScope, $routeParams){
	
	var server = 'http://tiy-fee-rest.herokuapp.com/collections/vtfarmers';

	var getFarms = function () {
		return $http.get(server);
	};
	var getOneFarm = function (id) {
		console.log(id);
		return $http.get(server + '/' + id);
	};
	var addFarm = function (newProducer) {
		console.log(newProducer);
		$http.post(server, newProducer);
	};

	// var deleteFarm = function (id) {
	// 	$http.delete(server + '/' + id);
	// };

	var editFarm = function (producer, id) {
		console.log(producer);
		console.log(id, "editFarmSVC")
		$http.put(server + '/' + id, producer)
	};
	return	{
		//public : private
		getProducers: getFarms,
		getSingleProducer: getOneFarm,
		addProducer: addFarm,
		// deleteProducer: deleteFarm,
		editProducer: editFarm
	}
});
})();//end big function