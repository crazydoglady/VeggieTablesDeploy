(function () {
  "use strict";

  angular.module('farm', [
    'ngRoute',
    'ngAnimate'
    // 'consumer',
    // 'producer',
    // 'restaurant',
    // 'admin'
  ])
  .config(function ($routeProvider){
  	$routeProvider
    .when('/farmers', {
      templateUrl: 'farmerFeature/farmers.html',
      controller: 'FarmController as farmCtrl'
    })
    .when('/farmers/:farmerId', {
      templateUrl:'farmerFeature/farmProfile.html',
      controller:'FarmController as farmCtrl'
    })
  });//end config
  })();//end farm.js