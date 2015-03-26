(function () {
  "use strict";
  angular.module('farmApp')
    .controller('MainController', function(MainService, FarmService, RestaurantService, $location, $routeParams, $route, $scope) {
      var mainCtrl = this;
      $scope.pageClass = 'page-main';

      $scope.restaurants= [];
      $scope.farmers=[];
          RestaurantService.getRestaurants().success(function(restaurants) {
            console.log(restaurants);
            $scope.restaurants = restaurants;
          });
          //   restaurants.forEach(function(i, idx, arr){
          // $scope.members.push(restaurants[i]);
          // console.log($scope.members.length , "member array Length");
          //   });
         
          FarmService.getProducers().success(function(producers){
            console.log(producers);
            $scope.farmers= producers;
          });

          // farmCtrl.producers.forEach(function(i, idx, arr){
          // members.push(producers[i]);
          // console.log(members.length() , "member array Length");
          // });
          // console.log(members, "members");
    

      // MainService.getConsumer().success(function(data){
      //  mainCtrl.members = data;
      //  });


      // MainService.getProfiles().success(function(data){
      //  mainCtrl.members = data;
      //  });

      // MainService.getSingleProfile($routeParams.memberId).success(function(data){
      // 	mainCtrl.SingleMember = data;
      // });
      // MainService.getConsumer().success(function(data){
      //  mainCtrl.members = data;
      //  });


      // MainService.getSingleConsumer($routeParams.memberId).success(function(data){
      // 	mainCtrl.SingleMember = data;
      // });

      mainCtrl.createProfile = function(newMember){
        if (newMember.type === producer) {
          FarmService.addProducer(newMember);
        }else if(newMember.type === restaurant) {
          RestaurantService.addRestaurant(newMember);
        }else if(newMember.type === consumer){
          MainService.addConsumer(newMember);
        }else {
          alert("Please select a membership category.");
        }
      }

      mainCtrl.addComment = function(newComment) {
        MainService.addComment(newComment);
        $location.path('/contact');
      }

      mainCtrl.addConsumer = function (newMember){
      	//console.log(newMember);
      	MainService.addConsumer(newMember);
      	// console.log(newMember);
      	//$location.path('/auth');
      }

      mainCtrl.deleteConsumer = function (member) {
      	MainService.deleteConsumer(member);

      }

      mainCtrl.editConsumer = function (member){
        //console.log(member , "edit Profile started");
        //console.log($routeParams.memberId);
      	MainService.editConsumer(member, $routeParams.memberId);
      }

	})
    .controller('RestaurantController', function (RestaurantService, $location, $routeParams, $scope) {
      var restCtrl = this;
      $scope.pageClass= 'page-restaurants';

       RestaurantService.getRestaurants().success(function(data){
        restCtrl.restaurants = data;
        restCtrl.restaurants.forEach(function(i, idx, arr){
          console.log(i , "element");
          console.log(idx , "index");
          console.log(arr , "array");
          RestaurantService.getRestCoords(i);

        });

       });

      RestaurantService.getSingleRestaurant($routeParams.restaurantId).success(function(data){
        restCtrl.SingleRestaurant = data;
      });

      restCtrl.addRestaurant = function (newRest){
        console.log(newRest);
        RestaurantService.addRestaurant(newRest);
        $location.path('/restaurant');
      }

      restCtrl.deleteRestaurant = function (restaurant) {
        console.log(restaurant, "deleted");
        console.log(restaurant._id);
        RestaurantService.deleteRestaurant(restaurant._id);
      }

      restCtrl.editRestaurant = function(restaurant){
        console.log(restaurant);
        console.log($routeParams, 'restCtrl');
        RestaurantService.editRestaurant(restaurant, $routeParams.restaurantId);
      }

  })
    .controller('FarmController', function (FarmService, $location, $routeParams, $scope) {
      var farmCtrl = this;
      $scope.pageClass='page-farmers';

      FarmService.getProducers().success(function(data){
        farmCtrl.producers = data;
        console.log(data);
        farmCtrl.producers.forEach(function(i, idx, arr){
          console.log(i , "element");
          console.log(idx , "index");
          console.log(arr , "array");
          FarmService.getFarmCoords(i);

        });
        //original code, refactored into forEach loop ^^
        // for( var i = 0; i < farmCtrl.producers.length ; i++) {
        // FarmService.getCoords(farmCtrl.producers[i]);
        // console.log(farmCtrl.producers[i]);
        // };
       });

      FarmService.getSingleProducer($routeParams.farmerId).success(function(data){
        farmCtrl.SingleProducer = data;
      });

      farmCtrl.addProducer = function (newFarm){
        console.log(newFarm);
        FarmService.addProducer(newFarm);
        $location.path('/farmers');
      }

      farmCtrl.deleteProducer = function (producer) {
        console.log(producer , "deleted");
        console.log(producer._id);
       FarmService.deleteProducer(producer._id);
      }

      farmCtrl.editProducer = function(producer){
        console.log(producer);
        console.log($routeParams.farmerId);
        FarmService.editProducer(producer, $routeParams.farmerId);
      }

  })

    .controller('GoogleMapsController', function(MainService, FarmService, RestaurantService, uiGmapGoogleMapApi, $scope, $location, $routeParams, $timeout, $log){
      var mapCtrl = this;
      // $scope.map = {
      //   center: {latitude: 32.8, longitude: -79.8},
      //   zoom: 4
      // };

    $scope.markers=[];
    uiGmapGoogleMapApi.then(function(maps){

    });
    $scope.map = {center: {latitude: 32.8, longitude: -79.8 }, zoom: 5 };
    $scope.options = {scrollwheel: false};
    $scope.coordsUpdates = 0;
    $scope.dynamicMoveCtr = 0;
    $scope.marker = {
      id: 0,
      coords: {
        latitude: $scope.map.center.latitude,
        longitude: $scope.map.center.longitude
      },
      options: { draggable: true },
      events: {
        dragend: function (marker, eventName, args) {
          $log.log('marker dragend');
          var lat = marker.getPosition().lat();
          var lon = marker.getPosition().lng();
          $log.log(lat);
          $log.log(lon);

          $scope.marker.options = {
            draggable: false,
            labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
            labelAnchor: "100 0",
            labelClass: "marker-labels"
          };
        }
      }
    };
    // $scope.$watchCollection("marker.coords", function (newVal, oldVal) {
    //   if (_.isEqual(newVal, oldVal))
    //     return;
    //   $scope.coordsUpdates++;
    // });
    // $timeout(function () {
    //   $scope.marker.coords = {
    //     latitude: 42.1451,
    //     longitude: -100.6680
    //   };
    //   $scope.dynamicMoveCtr++;
    //   $timeout(function () {
    //     $scope.marker.coords = {
    //       latitude: 43.1451,
    //       longitude: -102.6680
    //     };
    //     $scope.dynamicMoveCtr++;
    //   }, 2000);
    // }, 1000);


    });

})();
