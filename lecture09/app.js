(function (){

  'use strict';

  angular.module('DIapp',[])
  .controller('DIcontroller',['$scope', '$filter',DIcontroller]);

  function DIcontroller($scope, $filter, $injector){
    $scope.name = "swapnasheela khandagale";

    $scope.upper = function(){
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);

    };
//console.log($injector.annonate(DIcontroller));
  }
function annonateMe (name,job,blah){
  return "Blah!";
}

console.log(DIcontroller.toString());
})();
