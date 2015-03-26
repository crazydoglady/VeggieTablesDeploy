(function () {
  "use strict";

  angular.module('farmApp', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap',
    'uiGmapgoogle-maps'
    // 'farm',
    // 'consumer',    
    // 'admin'
  ])
  //.config(function($httpProvider){
  //   $httpProvider.defaults.headers.common['X-Csrf-Token'] = $("meta[name=csrf-token]").attr("content");
  // })//this needed to do CRUD on rails backend
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/consumer', {
      templateUrl: 'consumerFeature/consumers.html',
      controller: 'MainController as mainCtrl'
    })
     .when('/consumer/:custId', {
      templateUrl: 'consumerFeature/profile.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/createProfile', {
      templateUrl: 'views/createProfile.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'MainController as mainCtrl'
      })
    .when('/admin', {
      templateUrl:'views/admin.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/admin/:restaurantId', {
      templateUrl:'views/adminRestaurant.html',
      controller: 'RestaurantController as restCtrl'
    })
    .when('/adminfarm/:farmerId', {
      templateUrl:'views/adminFarm.html',
      controller: 'FarmController as farmCtrl'
    })
    .when('/restaurant', {
      templateUrl: 'restaurantFeature/restaurants.html',
      controller: 'RestaurantController as restCtrl'
    })
    .when('/restaurant/:restaurantId', {
      templateUrl: 'restaurantFeature/profile.html',
      controller: 'RestaurantController as restCtrl'
    })
    .when('/farmers', {
      templateUrl: 'farmerFeature/farmers.html',
      controller: 'FarmController as farmCtrl'
    })
    .when('/farmers/:farmerId', {
      templateUrl:'farmerFeature/farmProfile.html',
      controller:'FarmController as farmCtrl'
    })
    .when('/not_found', {
      templateUrl: 'views/not_found.html',
      controller: 'MainController as mainCtrl'
    })
    .otherwise ({
      redirectTo: '/not_found'
    })//end otherwise, this is equivalent to if/else statement in vanilla javascript
  });//end config

})(); //end main module =================



