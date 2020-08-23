var BinarySearchTree = function(value) {
  var binaryTree = Object.create(binarySearchTreePrototypes);
  binaryTree.value = value;
  //less than
  binaryTree.left = null;
  //greater than
  binaryTree.right = null;

  return binaryTree;
};

var binarySearchTreePrototypes = {};

binarySearchTreePrototypes.insert = function(val) {

  if (val < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  }
  if (val > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  } else {

  }
};

binarySearchTreePrototypes.contains = function(val) {

  if (val === this.value) {
    return true;
  }

  if (val < this.value) {
    return !!(this.left && this.left.contains(val));
  }
  if (val > this.value) {
    return !!(this.right && this.right.contains(val));
  }

};

binarySearchTreePrototypes.depthFirstLog = function(callBack) {
  callBack(this.value);
  if (this.left) {
    this.left.depthFirstLog(callBack);
  }
  if (this.right) {
    this.right.depthFirstLog(callBack);
  }
};

console.log(binarySearchTreePrototypes);

/*
 * Complexity: What is the time complexity of the above functions?
 */
