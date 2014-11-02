var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    // create new node
    var newNode = makeNode(value);
    // if list is empty, assign list tail and list head to newNode
    if (list.tail === null){
      list.tail = newNode;
      list.head = newNode;
    } else {
      //have old list.tail point to new node
      list.tail.next = newNode;
      //assign nednode to be new list.tail
      list.tail = newNode;
    }

    return list.tail;
  };

  list.removeHead = function(){
    var original = list.head.value;
    var newHead = list.head.next;
    delete list.head;
    list.head = newHead;
    return original;
  };

  list.contains = function(target){
    var found = false;

    if (list.value === target){
      return true;
    }
    // set item to be the next node
    var node = list.head;
    //while the next node does not equal null
    while (node !== null){
      //check to see if node value is target
      if (node.value === target){
        return true;
      } else {
        //go to next node
        node = node.next;
      }
    }
    return false;
  }


  return list;

};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
