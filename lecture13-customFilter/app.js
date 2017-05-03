(function (){
    'use strict';

    angular.module('msgApp', [])
    .controller('msgController', msgController)
    .filter('specific',specificFilter)//specific will be custome filter factory function (register name)name
    .filter('truth',truthFilter);

    msgController.inject = ['$scope','specificFilter','truthFilter'];

    function msgController($scope,specificFilter,truthFilter){
        $scope.name = "swapnasheela";
          $scope.sayMessage = function(){
            var msg = "I like to eat all type of snacks";
            return msg;
          };
          $scope.saySpecificMessage = function(){
            var msg = "I like to eat all type of snacks";
            msg = specificFilter(msg)
            return msg;
          };
    }
    function specificFilter(){
        return function (input){
          input = input || "";
          input = input.replace("all","specific");//all will be replace by specific
          return input;
        }
    }

    function truthFilter(){//this filter you will pass the argument to the filter
      return function(input, target, replace){//(target and replace are the factory filter argument)target is targeted string replace is want to replace string.
        input = input || "";
        input = input.replace(target, replace);
        return input;
      }
    }

})();
