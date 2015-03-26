(function () {
"use Strict";
angular.module('farmApp')
.factory('MainService', function($http, $rootScope, $location, $routeParams){

	var server = 'http://tiy-fee-rest.herokuapp.com/collections/commonground';
	var comServe = 'http://tiy-fee-rest.herokuapp.com/collections/vtcomments';

	var getMembers = function () {
		return $http.get(server);
	};

	var getOneMember = function (id) {
		return $http.get(server + '/' + id);
	};

	var addMember = function (newMember) {
		console.log(newMember.name , "member name");
		$http.post(server, newMember);
		  $location.path('/consumer');
	};
	var addComment = function (newComment){
		console.log(newComment);
		$http.post(comServe, newComment);
	};

	var deleteMember = function (id) {
		console.log(id);
		$http.delete(server + '/' + id);
		//$location.path('#/admin');
	};

	var editMember = function (member, id) {
		console.log(id);
		console.log(member);
		$http.put(server + '/' + id, member);
		$location.path('/admin');
	};
	return	{
		//public : private
		getMembers: getMembers,
		getSingleMember: getOneMember,
		addConsumer: addMember,
		deleteConsumer: deleteMember,
		editConsumer: editMember,
		addComment: addComment
	}
})
//==============end MainService


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
		$rootScope.$apply();
	};

	var deleteRest = function (id) {
		console.log(restaurant[i]);
		$http.delete(server + '/' + id);
	};

	var editRest = function (producer, id) {
		$http.put(server + '/' + id, producer)
		$rootScope.$broadcast("Restaurant: edited");
		$location.path('/restaurants');
	};
	var getCoords = function (restaurant) {
  	  $http.get(server + restaurant._id).success(function(){
    	restaurant.coords = {};
    	console.log(restaurant.coords, "coords");
    	restaurant.coords.longitude = restaurant.longitude;
    	restaurant.coords.latitude = restaurant.latitude;
  	  });
  	};
  	var getRestCoords = function (restaurant) {
        var replacedStreet = restaurant.address.split(' ').join('+');
        var replacedCity = restaurant.city.split(' ').join('+');
        var replacedState = restaurant.state.split(' ').join('+');
        var address = replacedStreet + ',+' + replacedCity + ',+' + replacedState;
        var apiKey = 'AIzaSyD868dkR8g-WKXQy6fttPTlkExp4PvYPxM';
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + apiKey;
        console.log(address, "address");
        console.log(url);
        $http.get(url).success(function(dataset){
          console.log(dataset);

          var restGeo = dataset.results[0].geometry.location;
          restaurant.coords = {};
          restaurant.coords.longitude = restGeo.lng;

          restaurant.coords.latitude = restGeo.lat;
          editRest(restaurant, restaurant._id);
        });
      };

	return	{
		//public : private
		getRestaurants: getRests,
		getSingleRestaurant: getOneRest,
		addRestaurant: addRest,
		deleteRestaurant: deleteRest,
		editRestaurant: editRest,
		getCoords: getCoords,
		getRestCoords: getRestCoords
		
	}
})

//=============end RestaurantService


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

	var deleteFarm = function (id) {
		$http.delete(server + '/' + id);
	};

	var editFarm = function (producer, id) {
		console.log(producer);
		console.log(id, "editFarmSVC")
		$http.put(server + '/' + id, producer)
	};
	var getCoords = function (producer) {
  	  $http.get(server + producer._id).success(function(){
    	producer.coords = {};
    	console.log(producer.coords, "coords");
    	producer.coords.longitude = producer.longitude;
    	producer.coords.latitude = producer.latitude;
  	  });

	};
	var getFarmCoords = function (producer) {
        var replacedStreet = producer.address.split(' ').join('+');
        var replacedCity = producer.city.split(' ').join('+');
        var replacedState = producer.state.split(' ').join('+');
        var address = replacedStreet + ',+' + replacedCity + ',+' + replacedState;
        var apiKey = 'AIzaSyD868dkR8g-WKXQy6fttPTlkExp4PvYPxM';
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + apiKey;
        console.log(address, "address");
        console.log(url);
        $http.get(url).success(function(dataset){
          console.log(dataset);

          var farmGeo = dataset.results[0].geometry.location;
          producer.coords = {};
          producer.coords.longitude = farmGeo.lng;

          producer.coords.latitude = farmGeo.lat;
          editFarm(producer, producer._id);
        });
      };

	return	{
		//public : private
		getProducers: getFarms,
		getSingleProducer: getOneFarm,
		addProducer: addFarm,
		deleteProducer: deleteFarm,
		editProducer: editFarm,
		getCoords : getCoords,
		getFarmCoords: getFarmCoords
	}
});
})();//end big function


//==================end FarmService
