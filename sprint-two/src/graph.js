//psuedoclassical format

// Instantiate a new graph
var Graph = function() {

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

  this[node] = {
    edge: []
  };

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this[node]) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  for (var i = 0; i < this[node].edge.length; i += 2) {
    var currentElement = this[node].edge[i];
    this.removeEdge(node, currentElement);

  }

  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  return this[fromNode].edge.includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].edge.push(toNode, this[toNode]);
  this[toNode].edge.push(fromNode, this[fromNode]);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var searchingIndex = this[fromNode].edge.indexOf(toNode);
  var searchingIndexTwo = this[toNode].edge.indexOf(fromNode);
  this[fromNode].edge.splice(searchingIndex, 2);
  this[toNode].edge.splice(searchingIndexTwo, 2);

  // if (this[fromNode].edge.length === 0) {
  //   return true;///////////////////////
  // }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  var keys = Object.keys(this);
  for (var i = 0; i < keys.length; i++) {
    cb(keys[i]);

  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

