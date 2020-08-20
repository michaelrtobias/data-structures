var Stack = function() {
  var stack = {};
  stack.storage = {};
  stackMethods.extend(stack, stackMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return stack;
};

var stackMethods = {
  position: 0,


  push: function(value) {
    this.position++;
    this.storage[this.position] = value;
  },

  pop: function() {
    var deletedValue = this.storage[this.position];
    delete this.storage[this.position];
    this.position--;
    return deletedValue;
  },

  size: function() {
    return Object.keys(this.storage).length;

  },
  extend: function(obj1, obj2) {
    for (var key in obj2) {
      obj1[key] = obj2[key];
    }
  }

};


