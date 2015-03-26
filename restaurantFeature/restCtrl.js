(function () {
  "use strict";
  angular.module('restaurant')
    .controller('RestaurantController', function (RestaurantService, $location, $routeParams) {
      var restCtrl = this;
       
       RestaurantService.getEateries().success(function(data){
       	restCtrl.getEateries = data;
       });
      
      RestaurantService.getSingleEatery($routeParams.itemId).success(function(data){
      	restCtrl.SingleEatery = data;
      });

      restCtrl.addEatery = function (newRest){
      	console.log(newRest);
      	RestaurantService.addEatery(newRest);
      	$location.path('/restaurants');
      }

      restCtrl.deleteEatery = function (restaurant) {
      	RestaurantService.deleteEatery(restaurant);
      }

      restCtrl.editEatery = function(restaurant){
      	RestaurantService.editEatery(restaurant, $routeParams.eateryId);
      }

	});

})();