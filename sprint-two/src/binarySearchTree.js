var makeBinarySearchTree = function(value){
  var node = Object.create(binarySearchTreeMethods);

  node.value = value;
  node.right = null;
  node.left = null;

  return node;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value){

   // get the existing value
   var existingValue = this.value;
   // compare the new value with existing one
   var newValue = value;
   // if new value < existing one


   // check to see if new value is less than current node value
   if (newValue < existingValue && this.left === null) {
      // if left doesnt have a node, than create new node
      this.left = makeBinarySearchTree(value);
   } else if (this.left !== null){
      // if left does have a node, try to insert value here
      this.left.insert(value);
   }
    // check to see if new value is more than current node value
    if (newValue > existingValue && this.right === null){
     // if right doesnt have a node, than create new node
      this.right = makeBinarySearchTree(value);
    } else if (this.right !== null){
      // if right does have a node, try to insert value here
      this.right.insert(value);
   }
};

binarySearchTreeMethods.contains = function(target){
  //set node to particular node or top level node
  node = this;
  // check to see if node's current value is target
  if (node.value === target) {
    return true;
    // and both child nodes are null, then return false.
  } else if ( node.left === null && node.right === null){
    return false;
  }
  //if left child is not null and target is less parent value,
  if ( node.left !== null && target < node.value){
   // runs contains on left child
   return node.left.contains(target);
  }
  if ( node.right !== null && target > node.value){
    // runs contains on right child
    return node.right.contains(target);
  }

  return false;
};

binarySearchTreeMethods.depthFirstLog = function(func){
   func(this.value);
   // if left child exists,invoke function on left child
   if (this.left !== null){
    this.left.depthFirstLog(func);
   }
   // if right child exists,invoke function on right child
   if (this.right !== null){
    this.right.depthFirstLog(func);
   }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
