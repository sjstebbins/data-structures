
var Queue = function(storage, qsize) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.qsize = 0;
};

Queue.prototype.enqueue = function(value){
  //add value to storage
  this.storage[this.getSize() +1] = value;
  //increase size of storage
  this.increaseSize();
};

Queue.prototype.dequeue = function(){
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

Queue.prototype.size = function(){
  // console.log(this);
  return this.getSize();
};

Queue.prototype.getSize = function(){
  return this.qsize;
};

Queue.prototype.increaseSize = function(){
  return this.qsize++;
};

Queue.prototype.decreaseSize = function(){
  return this.qsize--;
};

Queue.prototype.resetSize = function(){
  return this.qsize = 0;
};
