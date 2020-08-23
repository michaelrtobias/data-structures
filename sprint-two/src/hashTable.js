//pseudoclassical

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  //hash function collision
  var tuple = [k, v];
  var doesContain = false;
  if (bucket.length === 0) {
    bucket.push(tuple);
  } else {
    for (var i = 0; i < bucket.length; i++) {
      var currentTuple = bucket[i];

      if (currentTuple[0] === k) {
        currentTuple.splice(1, 1);
        currentTuple.push(v);
        doesContain = true;
      }
    }
    if (!doesContain) {
      bucket.push(tuple);
    }
  }
  this._storage.set(index, bucket);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var targetBucket = this._storage.get(index);
  var result;
  for (var i = 0; i < targetBucket.length; i++) {
    if (targetBucket[i][0] === k) {
      result = targetBucket[i][1];
    }
  }
  return result;
};
//          1                           2
//[[[steven, seagal], [bob, chicken]], [[amber, alert],[sliver, sedan]]]
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var currentBucket = this._storage.get(index);
  for (var i = 0; i < currentBucket.length; i++) {
    var currentTuple = currentBucket[i];
    if (currentTuple[0] === k) {
      currentBucket.splice(i, 1);
    }

  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


