(function(){
  'use strict';

  angular.module('CounterApp',[])
  .controller('CounterController',CounterController);

  CounterController.inject = ['$scope','$timeout'];

  function CounterController($scope){
    $scope.counter = 0;

    //use timeout service handal same functionality

    $scope.upCounter = function() {
        $timeout(function () {
          $scope.counter++;
          console.log("Counter incremented !");
        }, 2000);

    };
// //how to apply digestcycle
//     $scope.upCounter = function (){
//       setTimeout(function(){
//         $scope.$apply(function(){//apply will be wrap the function inside content and atomaticly call the digest cycle and show the increment count on perticular time out section
//           $scope.counter++;
//           console.log("Counter incremented !");
//         });
//       },2000);
//     };


//digest cycle it will mannualy added
    // $scope.upCounter = function (){
    //   setTimeout(function(){
    //     $scope.counter++;
    //     console.log("Counter incremented !");
    //     $scope.$digest();//we mannualy add the digest cycle and (it will check the counter will have change or not) because before it will not change the counter value acoordicting to increment button click
    //   },2000);
    // };
  }
})();
