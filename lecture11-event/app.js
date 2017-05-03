(function (){

  'use strict';

  angular.module('msgApp',[])
  .controller('msgController',msgController);

  msgController.$inject = ['$scope'];

  function msgController($scope){
    $scope.name = "swapnasheela khandagale";

    $scope.stateOfBeing = "hungry";

    $scope.sayMessage = function(){
      return "I like my name .....very much...!"
    };

    $scope.feeddogs = function(){
        $scope.stateOfBeing = "fed";
    };
}
})();
