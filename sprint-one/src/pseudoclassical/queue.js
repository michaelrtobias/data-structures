var Queue = function() {
  this.storage = {};
  this.position = 1;
  this.remove = 1;
};


Queue.prototype.enqueue = function (value) {
  this.storage[this.position] = value;
  this.position++;
};


Queue.prototype.dequeue = function () {
  var deletedValue = this.storage[this.remove];
  delete this.storage[this.remove];
  this.remove++;
  return deletedValue;
};


Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};

