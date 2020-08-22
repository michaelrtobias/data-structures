//prototypal

var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this.storage.push(item);
  }
};

setPrototype.contains = function(item) {
  return this.storage.indexOf(item) !== -1;
};

setPrototype.remove = function(item) {
  var index = this.storage.indexOf(item);
  this.storage.splice(index, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
