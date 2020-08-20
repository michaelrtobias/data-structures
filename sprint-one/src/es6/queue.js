class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.position = 1;
    this.remove = 1;
  }

  enqueue(value) {
    this.storage[this.position] = value;
    this.position++;
  }
  dequeue() {
    var deletedValue = this.storage[this.remove];
    delete this.storage[this.remove];
    this.remove++;
    return deletedValue;
  }
  size() {
    return Object.keys(this.storage).length;
  }

}
