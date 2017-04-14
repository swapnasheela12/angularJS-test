
(function (){
  'use strict';

  angular.module('myFirstApp',[])
.controller('MyFirstController',function($scope){
      $scope.name = "swapnasheela khandagale";
      $scope.sayHello = function (){
          return "hello type function !";
      };
});
})();
