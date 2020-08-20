var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var position = 1;
  var remove = 1;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[position] = value;
    position++;
  };

  someInstance.dequeue = function() {
    var deletedValue = storage[remove];
    //delete deletedValue;
    delete storage[remove];
    remove += 1;

    return deletedValue;
  };

  someInstance.size = function() {

    if (Object.keys(storage).length < 0 ) {
      return 0;
    }

    return Object.keys(storage).length;
  };

  return someInstance;
};
