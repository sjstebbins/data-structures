var makeQueue = function(){
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    //add value to storage

    storage[size+1] = value;
    //increase size of storage
    size++;
  };

  someInstance.dequeue = function(){
    var result = storage[1];
    for ( var i = 1; i < size; i++){
      storage[i] = storage[i + 1];
    }
    delete storage[size];
    if (size > 0){
      size--;
    } else {
      size = 0;
    }
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
