var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.qsize = 0;


  extend(someInstance, queueMethods);
  // console.log(someInstance);
  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }

};

var queueMethods = {};


queueMethods.enqueue = function(value){
  //add value to storage
  this.storage[this.getSize() +1] = value;
  //increase size of storage
  this.increaseSize();
};

queueMethods.dequeue = function(){
  // if (this.getSize == 0){

  // }
  var result = this.storage[1];
  // console.log(this.size);
   for ( var i = 1; i < this.getSize(); i++){
    this.storage[i] = this.storage[i + 1];
  }
  delete this.storage[this.getSize()];
  if (this.getSize() > 0){
    // this.size--;
    this.decreaseSize();
  } else {
    this.resetSize();
  }
  return result;
};

queueMethods.size = function(){
  // console.log(this);
  return this.getSize();
};

queueMethods.getSize = function(){
  return this.qsize;
};

queueMethods.increaseSize = function(){
  return this.qsize++;
};

queueMethods.decreaseSize = function(){
  return this.qsize--;
};

queueMethods.resetSize = function(){
  return this.qsize = 0;
};
