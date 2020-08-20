var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var stack = Object.create(stackMethods);
  stack.storage = {};
  return stack;
};

var stackMethods = {
  storage: {},
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
  }
};


