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

  push(value){
     //var newNode = new Node(value);
     //this.head.next = newNode;
     //this.tail = newNode;

     const newNode = new Node(value)
      if (!this.head) {
          this.head = newNode
          this.tail = newNode
      } else {
          this.tail.next = newNode
          this.tail = newNode
      }
      this.length++
      return this
  }
  
  pop(value){
    while(this.head.next){
     console.log(this.head.next)
    }
  }
}

var ll = new LinkedList(56);
ll.push(45)
ll.push(90)
ll.push(9)
ll.pop()
console.log(ll);
