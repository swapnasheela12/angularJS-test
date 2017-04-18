(function (){

  'use strict';

  angular.module('msgApp',[])
  .controller('msgController',msgController);

  msgController.$inject = ['$scope','$filter'];

  function msgController($scope,$filter){
    $scope.name = "swapnasheela khandagale";
    $scope.costfood = .45;

    $scope.sayMessage = function(){
      var msg = "i like to eat healthy snacks at night!";
      var output = $filter('uppercase')(msg);
      return output;
    };

}
})();
