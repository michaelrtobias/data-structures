//functional shared

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  extend(newTree, treeMethods);

  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var addedValue = Tree(value);
  this.children.push(addedValue);
};

treeMethods.contains = function(target) {
  var doesContain = false;
  var amberAlert = function(obj) {
    if (obj.value === target) {
      doesContain = true;
    }
    if (obj.children.length > 0) {

      obj.children.forEach(element => amberAlert(element));
    }
  };

  amberAlert(this);
  return doesContain;
};

var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
// var testTree = Tree('test');

// console.log(testTree);