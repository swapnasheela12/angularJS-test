//** prototypal inheritance
var parent = {
  value: "parentValue",
  obj:{
    objValue:"parentObjValue"
  },
  walk: function(){     //method in parent
    console.log("walking!");
  }
};

var child = Object.create(parent);//parent object is prototypal for child object
//the child don't have type value and object
console.log("CHILD - child.value : ",child.value);
console.log("CHILD - child.obj.objValue : ",child.obj.objValue);
console.log("PARENT - parent.value : ",parent.value);
console.log("PARENT - parent.obj.objValue : ",parent.obj.objValue);
console.log("parent : ",parent);
console.log("child : ",child);
//the child have type value and object
child.value = "childValue";
child.obj.objValue = "childObjValue";
console.log("***CHANGED - child.value : ",child.value);
console.log("***CHANGED - child.obj.objValue : ",child.obj.objValue);
console.log("CHILD - child.value : ",child.value);
console.log("CHILD - child.obj.objValue : ",child.obj.objValue);
console.log("PARENT - parent.value : ",parent.value);
console.log("PARENT - parent.obj.objValue : ",parent.obj.objValue);
console.log("parent : ",parent);
console.log("child : ",child);

//the child and parant object value are same or not
console.log("child.obj === parent.obj ?", child.obj === parent.obj);
//grand Child have child value and object. child have parent method walk so grand Child also have parent method because of it will inheretaed the method from child
var grandChild = Object.create(child);
console.log("GRAND CHILD : ",grandChild);
grandChild.walk();
console.log("GRAND CHILD - grandChild.value : ",grandChild.value);
console.log("GRAND CHILD - grandChild.obj.objValue : ",grandChild.obj.objValue);


//** Function Constructors
//** Function Constructors
function Dog(name) {
  this.name = name;
  console.log("'this' is: ",this);
  }

  var myDog = new Dog("Max");
  console.log("my dog :",myDog);

//Not being used as a function constructor
  Dog("Max2");
