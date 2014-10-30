var makeStack = function(){
  var someInstance = {};
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.pop = function(){
    var value = storage[size-1];
    delete storage[size-1];

    if (size > 0){
      size--;
    } else {
      size = 0;
    }
    return value;

  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
