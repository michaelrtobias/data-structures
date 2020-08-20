var Queue = function() {
  var queue = {};
  queueMethods.extend(queue, queueMethods);
  queue.storage = {};

  return queue;
};


var queueMethods = {
  position: 1,
  remove: 1,
  enqueue: function (value) {
    this.storage[this.position] = value;
    this.position++;
  },
  dequeue: function () {
    var deletedValue = this.storage[this.remove];
    delete this.storage[this.remove];
    this.remove += 1;
    return deletedValue;
  },
  size: function () {
    return Object.keys(this.storage).length;
  },
  extend: function(obj1, obj2) {
    for (var key in obj2) {
      obj1[key] = obj2[key];
    }
  }
};










