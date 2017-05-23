(function() {
    'use strict';

 angular.module('inheritanceApp',[])
.controller('ParentController2',ParentController2)//controller('ParentController2' this name to inject it into other controller,ParentController2 this treated as a function constructor)
.controller('ChildController2',ChildController2);
    //** Controller As syntax

ParentController2.$inject = ['$scope'];

function ParentController2($scope) {
    var parent = this;
    parent.value = 1;
}
ChildController2.$inject = ['$scope'];

function ChildController2($scope) {
    var child = this;
    child.value = 5;
    console.log("ChildController2 $scope : ",$scope);
};

// myApp.controller('ParentController1',ParentController1);
//     //** Controller As syntax
//
// // ParentController2.$inject = ['$scope'];
//
// function ParentController1($scope) {
//
// };
// function ChildController1($scope) {
//
// };
})();
