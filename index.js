class Node{
 constructor(value){
   this.value = value,
   this.next = null
 }
}

class LinkedList{
  constructor(value){
    var newNode = new Node(value)
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  addNode(value){
     
  }
}

var ll = new LinkedList();
ll.addNode(45)
console.log(ll);
