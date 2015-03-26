(function () {
  "use strict";
  angular.module('farmApp')
    .controller('FarmController', function (FarmService, $location, $routeParams, $scope) {
      var farmCtrl = this;
       
      FarmService.getProducers().success(function(data){
       	farmCtrl.producers = data;
       });
      
      FarmService.getSingleProducer($routeParams.farmerId).success(function(data){
      	farmCtrl.SingleProducer = data;
      });

      farmCtrl.addProducer = function (newFarm){
      	console.log(newFarm);
      	FarmService.addProducer(newFarm);
        $location.path('/farmers');
      }

      // farmCtrl.deleteProducer = function (producer) {
      // 	FarmService.deleteProducer(producer);
      // }

      farmCtrl.editProducer = function(producer){
        console.log(producer);
        console.log($routeParams.farmerId);
      	FarmService.editProducer(producer, $routeParams.farmerId);
      }

	});

})();