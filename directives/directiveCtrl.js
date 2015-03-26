(function () {
  "use strict";
  angular.module('members')
    .controller('MemberController', function (MainService, $location, $routeParams) {
      var mainCtrl = this;

       MainService.getProfiles().success(function(data){
       	mainCtrl.members = data;
       });
      
      MainService.getSingleProfile($routeParams.memberId).success(function(data){
      	mainCtrl.SingleMember = data;
      });

      mainCtrl.addMember = function (newMember){      
      	console.log(newMember);
      	MainService.addProfile(newMember);
      	console.log(newMember);
      	$location.path('/auth');
      }

      mainCtrl.deleteMember = function (member) {
      	MainService.deleteProfile(member);
      }

      mainCtrl.editMember = function(member){
      	MainService.editProfile(member, $routeParams.memberId);
      }

	});




})();