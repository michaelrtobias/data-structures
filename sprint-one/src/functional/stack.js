var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var position = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    //Object.assign({position: value}, storage);
    position++;
    storage[position] = value;
  };

  someInstance.pop = function() {
    var deletedValue = storage[Object.keys(storage).length];
    delete storage[position];
    position--;
    return deletedValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
