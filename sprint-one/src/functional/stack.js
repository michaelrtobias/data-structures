var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numberInLine = 1;
  // Implement the methods below
  someInstance.push = function(value) {
    Object.assign({1: value}, storage);
  };

  someInstance.pop = function() {
  };

  someInstance.size = function() {
  };

  return someInstance;
};
