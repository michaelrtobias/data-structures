//Using functional method of classes


var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    var currentNode;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      currentNode = this.head;
      this.tail = newNode;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }

  };

  list.removeHead = function() {
    var currentHead = list.head.value;
    list.head = list.head.next;
    return currentHead;
  };

  list.contains = function(target) {
    var doesContain = false;
    var currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === target) {
        doesContain = true;
      }
      currentNode = currentNode.next;
    }
    return doesContain;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
