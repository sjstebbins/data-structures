var Graph = function(value, edgeNodes){
  this.value = value;
  this.edgeNodes = [];
};

Graph.prototype.addNode = function(newNode, toNode){

    newNode.value = newNode;
    newNode.edgeNodes = [];
    toNode.edgeNodes = [];
    // add toNode to edgeNodes array of newNode
    newNode.edgeNodes.push(toNode);
    //if new node exists
    if (this.edgeNodes.contains(toNode))
      // add newNode to edgeNodes array of toNode
      toNode.edgeNodes.push(newNode);
    //
};

Graph.prototype.contains = function(node){
};

Graph.prototype.removeNode = function(node){
};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
