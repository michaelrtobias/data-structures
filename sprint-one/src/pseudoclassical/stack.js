var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.position = 0;
};


Stack.prototype.push = function (value) {
  this.position++;
  this.storage[this.position] = value;
};

Stack.prototype.pop = function () {
  var deteletedValue = this.storage[this.position];
  delete this.storage[this.position];
  this.position--;
  return deteletedValue;
};

Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
};