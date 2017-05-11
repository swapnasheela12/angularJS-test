var numberArray = [1,2,3,4,5,6,7,8,9,10];
console.log("number Array : ",numberArray);

function above5Filter(value) {
  return value > 5;
}

var filteredNumberArray = numberArray.filter(above5Filter);
console.log("Filtered number array",filteredNumberArray );

  var shoppingList = ["Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol(Chocolate flavor)", "Pepto Bismol (Cookie flavor)"];
console.log("shopping List : ",shoppingList );

var searchValue = "Bismol";
function containsFilter(value) {
  return value.indexOf(searchValue) !== -1;
}
var searchedShoppingList = shoppingList.filter(containsFilter);
console.log("Searching shopping List : ",searchedShoppingList);

// 1.Array has a special function call filter
//    create new array where each iteam satisfies some condition of the comparison function passed into the filter function.
// 2.Angular has a special filter call 'filter'
//    provided a string as 1st argument,it will filter array it's applied to ,matching all string items against the provided one.
// 3.ng-repeat="item in collection | filter : searchingString"
