(function(){
  'use strict';

  angular.module('BindingApp',[])
  .controller('BindingController',BindingController);

  BindingController.$inject = ['$scope'];

  function BindingController($scope) {
    $scope.firstName = "swapnasheela";
    // $scope.fullName = "";

    $scope.showNumberOfWatchers = function() {
        console.log("# of watchers", $scope.$$watchersCount);
    };

    $scope.setFullName = function () {
      $scope.fullName = $scope.firstName + " " + "khandagale";
    };

    $scope.logFirstName = function(){
      console.log("first Name is : ",$scope.firstName);
    };

    $scope.logFullName = function(){
      console.log("first Name is : ",$scope.fullName);
    };
  }
})();
