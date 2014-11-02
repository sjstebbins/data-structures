var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

 // check if storage at i has bucket
  var bucket = this._storage.get(i);
    // if notteateatt a  bucket
    if (!bucket){
      bucket = [];
      //set storage at this index to bucket
      this._storage.set(i, bucket);

    }
    //found key variable
    var found = false;

   //iterate over bucket
    for (var j = 0; j < bucket.length; j++){
      var tuple = bucket[j];
      // if key exists, replace the value
      if (tuple[0] === k){
        tuple[1] = v;
        found = true;
      }
    }

    //if not, insert tuple
    if (!found){
      bucket.push([k,v]);
    }
    // set storage at i to new bucket
    this._storage.set(i,bucket);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  if (!bucket){
    return null;
  }

  for (var j = 0; j < bucket.length; j++){
      var tuple = bucket[j];
      if (tuple[0] === k){
        return tuple[1];
      }
    }

  return null;
};

HashTable.prototype.remove = function(k){
 var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  if (!bucket){
    return null;
  }

  for (var j = 0; j < bucket.length; j++){
      var tuple = bucket[j];
      if (tuple[0] === k){
       tuple[0] = null;
      }
    }

  return null;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */

