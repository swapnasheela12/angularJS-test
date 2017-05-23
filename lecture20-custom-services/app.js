(function(){
  'use strict';

  angular.module('ShoppingListApp',[])
  .controller('ShoppingListAddController',ShoppingListAddController)
  .controller('ShoppingListShowController',ShoppingListShowController)
  .service('ShoppingListService',ShoppingListService);//created new service

  ShoppingListAddController.$inject = ['ShoppingListService'];//injected new services in controller add item
  function ShoppingListAddController(ShoppingListService) {//controller function created for add item
    var itemAdder = this;

    itemAdder.itemName = "";
    itemAdder.itemQuantity = "";

    itemAdder.addItem = function(){//add team function
      ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);//services created function call here using services name
    }
  }

  ShoppingListShowController.$inject = ['ShoppingListService'];//injected new services in controller show item
  function ShoppingListShowController(ShoppingListService) {//controller function created for show item

    var showList = this;

    showList.items = ShoppingListService.getItems();//services created function call here using services name

    showList.removeItem = function (itemIndex) {//services created function call here using services name
      ShoppingListService.removeItem(itemIndex);
    }
  }

  function ShoppingListService() {
    var service = this;

    //List of shopping items
    var items = [];//array list name

    service.addItem = function (itemName, itemQuantity) {
      var item = {
        name: itemName,
        quantity: itemQuantity
      };
      items.push(item);//it will add data in array using push method
      console.log(items,"fffff");
    };
    service.getItems= function () {
      return items;//it will return a array list
    };
    service.removeItem = function (itemIndex) {
        items.splice(itemIndex,1);//splice use for add and remove items.1 will be denoted how much item remove from array.

    }
  }

})();
