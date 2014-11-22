
var Stack = function(storage, qsize) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.qsize = 0;
};


Stack.prototype.push = function(value){
  //add value to storage
  this.storage[this.getSize()] = value;
  //increase size of storage
  this.increaseSize();
};

Stack.prototype.pop = function(){

  var value = this.storage[this.getSize() - 1];
  delete this.storage[this.getSize() - 1];

  if (this.getSize() > 0){
    this.decreaseSize();
  } else {
    this.resetSize();
  }
  return value;
};

Stack.prototype.size = function(){
  return this.getSize();
};

Stack.prototype.getSize = function(){
  return this.qsize;
};

Stack.prototype.increaseSize = function(){
  return this.qsize++;
};

Stack.prototype.decreaseSize = function(){
  return this.qsize--;
};

Stack.prototype.resetSize = function(){
  return this.qsize = 0;
};

