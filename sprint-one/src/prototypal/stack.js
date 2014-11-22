var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(stackMethods);
  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.qsize = 0;

  return someInstance;

};

var stackMethods = {};


stackMethods.push = function(value){
  //add value to storage
  this.storage[this.getSize()] = value;
  //increase size of storage
  this.increaseSize();
};

stackMethods.pop = function(){

  var value = this.storage[this.getSize() - 1];
  delete this.storage[this.getSize() - 1];

  if (this.getSize() > 0){
    this.decreaseSize();
  } else {
    this.resetSize();
  }
  return value;
};

stackMethods.size = function(){
  return this.getSize();
};

stackMethods.getSize = function(){
  return this.qsize;
};

stackMethods.increaseSize = function(){
  return this.qsize++;
}

stackMethods.decreaseSize = function(){
  return this.qsize--;
}

stackMethods.resetSize = function(){
  return this.qsize = 0;
}

