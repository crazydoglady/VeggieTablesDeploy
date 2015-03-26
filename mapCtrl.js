(function () {
  "use strict";
  angular.module('farmApp')
    .controller('MapController', function(RestaurantService, FarmService, MainService, $location, $routeParams, $route, $scope) {
      var mapCtrl = this;

      // mapCtrl.places=[];

      // mapCtrl.getPlaces = function() {
      //   console.log(mapCtrl.places.length);
      //   mapCtrl.places.push(FarmService.getProducers());
      //   console.log(mapCtrl.places.length);
      //   mapCtrl.places.push(farmCtrl.producers);
      //   console.log(mapCtrl.places.length);
      //   for( var i = 0; i < mapCtrl.places.length; i++){
      //       console.log(mapCtrl.places[i]);
      //       MainService.getPlaceCoords(mapCtrl.places[i]);
      //     }
      // }

      // $scope.map = {
      //   center: {latitude: 32.8, longitude: -79.8},
      //   zoom: 4
      // };

    $scope.markers=[];
    $scope.map = {center: {latitude: 32.8, longitude: -79.8 }, zoom: 4 };
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
    })

})();
