// (function (){
//
//   'use strict';
//
//   angular.module('DIapp',[])
//   .controller('DIcontroller',DIcontroller);
//
//   DIcontroller.$inject = ['$scope', '$filter'];   //injected here the services
//   function DIcontroller($scope, $filter, $injector){
//     $scope.name = "swapnasheela khandagale";
//
//     $scope.upper = function(){
//         var upCase = $filter('uppercase');
//         $scope.name = upCase($scope.name);
//
//     };
// //console.log($injector.annonate(DIcontroller));
//   }
// function annonateMe (name,job,blah){
//   return "Blah!";
// }
//
// console.log(DIcontroller.toString());
// })();

//menified the code type2
!function(){"use strict";function e(e,n,a){e.name="swapnasheela khandagale",e.upper=function(){var a=n("uppercase");e.name=a(e.name)}}angular.module("DIapp",[]).controller("DIcontroller",e),e.$inject=["$scope","$filter"],console.log(e.toString())}();
