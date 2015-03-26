(function () {
  "use strict";

  angular.module('restaurant', [
    'ngRoute',
    'ngAnimate'
    // 'consumer',    
    // 'admin'
  ])
  //.config(function($httpProvider){
  //   $httpProvider.defaults.headers.common['X-Csrf-Token'] = $("meta[name=csrf-token]").attr("content");
  // })//this needed to do CRUD on rails backend
  .config(function ($routeProvider) {
    $routeProvider
    .when('/restaurant', {
      templateUrl: 'restaurantFeature/restaurants.html',
      controller: 'RestaurantController as restCtrl'
    })
    .when('/restaurant/:memberId', {
      templateUrl: 'restaurantFeature/profile.html',
      controller: 'RestaurantController as restCtrl'
    })
    .when('/not_found', {
      templateUrl: 'views/not_found.html',
      controller: 'MainController as mainCtrl'
    })
    .otherwise ({
      redirectTo: '/not_found'
    })//end otherwise, this is equivalent to if/else statement in vanilla javascript
  });//end config

})(); //end Restaurant module =================
