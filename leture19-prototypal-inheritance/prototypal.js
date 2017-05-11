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

console.log("CHILD - child.value : ",child.value);
console.log("CHILD - child.obj.objValue : ",child.obj.objValue);
console.log("PARENT - parent.value : ",parent.value);
console.log("PARENT - parent.obj.objValue : ",parent.obj.objValue);
console.log("parent : ",parent);
console.log("child : ",child);
