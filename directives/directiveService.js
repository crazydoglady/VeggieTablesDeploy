(function () {
"use Strict";
angular.module('members')
.factory('MemberService', function($http, $rootScope, $routeParams){
	
	var server = 'http://tiy-fee-rest.herokuapp.com/collections/commonground';
	

	var getMembers = function () {
		return $http.get(server);
	};

	var getOneMember = function (id) {
		return $http.get(server + '/' + id);
	};

	var addMember = function (newMember) {
		console.log(newMember.name);
		$http.post(server, newMember);
	};

	var deleteMember = function (id) {
		$http.delete(server + '/' + id);
	};

	var editMember = function (member, id) {
		$http.put(server + '/' + id, member)
	};
	return	{
		//public : private
		getProfiles: getMembers,
		getSingleProfile: getOneMember,
		addProfile: addMember,
		deleteProfile: deleteMember,
		editProfile: editMember
	}
});



})();//end big function