var Queue = function() {
  var que = Object.create(queueMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  que.storage = {};
  return que;
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
    this.remove++;
    return deletedValue;
  },
  size: function () {
    return Object.keys(this.storage).length;
  }
};
