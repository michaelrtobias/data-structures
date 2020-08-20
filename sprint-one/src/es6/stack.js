class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.position = 0;
  }


  push(value) {
    this.position++;
    this.storage[this.position] = value;
  }
  pop() {
    var deletedValue = this.storage[this.position];
    delete this.storage[this.position];
    this.position--;
    return deletedValue;
  }
  size() {
    return Object.keys(this.storage).length;
  }

}