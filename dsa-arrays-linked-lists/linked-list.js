/** Node: node for a singly linked list. */

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;

    // for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */


  //deconstruction:
  //probably the first method we want to make
  // first line creates a new node with method argument
  // makes a head and a tail if theres no head/tail
  // one level up - node has a this.val which is the argument
  // if there is a head then - then tail.next is the new node, and that becomes the tail
  push(val) {
    let newNode = new Node(val) //constant

    if(this.head === null) { // constant and easy
      this.head = newNode
      this.tail = newNode
      this.length += 1
      return; // if not returned then next while loop will continue forever because there is no .next when creating the first node in a linked list.
      // this.tail = newNode
    } 
    
    let currentNode = this.head // must set currentnode each time for traversal
    while(currentNode.next !== null) { // add the traversal, while next node is not empty - keep moving forward(keep making current node next)
      currentNode = currentNode.next // template to move forward with "currentNode" as our vehicle. Will keep taking identity of the .next until its null/ while not null
      // look at next code
    }
    currentNode.next = newNode // the act of "pushing" onto the next - this is the line that pushes newNode onto the end of the list.
    this.tail = newNode // basically whenever we "push" a new val(newNode), push will always set a new this.tail as well i guess because a push always pushes to the END of the list, and that would also be the new tail.
    

    this.length += 1
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val)

    if(this.head === null) {
      this.head = newNode
      this.length += 1
      console.log(this.length)
      return;
    } 
    else { // easier bc no traversal is required
      let oldHead = this.head // saving a place of the linked list at the head
      this.head = newNode // setting the newhead with our new node
      newNode.next = oldHead // linking the new head with the old head
      this.length += 1
      console.log(this.length)

    }
  
  }

  /** pop(): return & remove last item. */

  pop() {
    //traverse till we ~are at the node before the tail, the next node is not tail~ // different that traversing till we are at the end and the next is not null
    let currentNode = this.head
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next // Traverse: again to move down the list: keep setting currentNode to the next every while iteration
    }

    currentNode.next = null
    
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) {
      console.log('undefined')
      return undefined
    }
    // let currentNode = this.head // would set the head. then make head the next
    // this.head = currentNode.next
    this.head = this.head.next // fastest way of setting a new head
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    // normal for loop iteration
    let currentNode = this.head
    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next
    }
    console.log(currentNode)
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    // for loop iteration with replacing the val
    let currentNode = this.head
    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next
    }
    currentNode.val = val
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let currentNode = this.head // traversal node
    for (let i = 0; i < idx - 1; i++) {
      currentNode = currentNode.next // iterating till we are at the idx
    }

    let nextLinkSaved = currentNode.next // saving second half of linked list
    let newNode = new Node(val) //set the new node
    currentNode.next = newNode // make the next node of idx the new node, but its not linked to anything
    currentNode = currentNode.next // traverse to the newNode
    currentNode.next = nextLinkSaved // set next node of currentnode to our saveLink
  
  


    // let nextLinkHolder = currentNode // placeholder for the prev link
    // currentNode = newNode // replacing currentnode
    // currentNode.next = nextLinkHolder //making replacement next, the old placeholder and linking the chain

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

    let currentNode = this.head // traversal node starting at the this.head
    for (let i = 0; i < idx - 1; i++) {
      currentNode = currentNode.next
    }
      let placeHolder = currentNode // saving first part of link - this block shops removing idx but we're really just skipping it.
      currentNode = currentNode.next // skips to idx
      currentNode = currentNode.next // skips past idx
      placeHolder.next = currentNode // now resets the first link to skip idx and move to next link. Not sure if this is the fastest way of doing this.



  }

  /** average(): return an average of all values in the list */

  average() {
    let currentNode = this.head
    let sum = 0
    let values = 0
    while (currentNode !== null)  { // when theres no idx, this is the shortest way of writing traversal
      values += 1
      sum += currentNode.val
      currentNode = currentNode.next
    }

    console.log(sum / values)
    
  }

  print() {
    let current_node = this.head; // Start from beginning of the list

    // Traverse through entire list and print it out
    while(current_node !== null) {
        console.log(current_node.val); // .val is same as hpBooks.head.val > hpBooks.nextnode.val
        current_node = current_node.next;
    }
  }

}


let hpBooks = new LinkedList()
hpBooks.push("sorcerers stone")
hpBooks.push('chamber of secrets')
hpBooks.push('prisoner of azkaban')
hpBooks.unshift("crimes of grindewald")
hpBooks.unshift("fantastic beasts")
// hpBooks.shift()
// hpBooks.pop()
// hpBooks.getAt(2)
hpBooks.setAt(0, "fantastic beasts and where to find themmmmmm")
hpBooks.insertAt(3, "pottermore")
hpBooks.removeAt(2)
hpBooks.print()
// console.log(hpBooks)

let avgTest = new LinkedList()
avgTest.push(1)
avgTest.push(2)
avgTest.push(3)
avgTest.push(4)
avgTest.average()

module.exports = LinkedList;

// ## **Further Study**
// ### **Doubly Linked Lists**
// Doubly Linked Lists are just like Singly Linked Lists, but each node has a pointer to the previous node as well as the next one. Implement a class for ***DoublyLinkedList*** with the same methods as above (be mindful of opportunities to speed up your code now that each node has two pointers!)

// ### **Reverse In Place*
// Write a function that reverses a linked list *in place* — not by creating a new list or new nodes.

// ### **Sort Sorted Linked Lists**
// Write a function that is passed two linked lists, ***a*** and ***b***, both of which are already sorted.
// It should return a *new* linked list, in sorted order.

// Pivot Around Value
// Circular Arrays
// REFER TO SPRINBGOARD FOR FURTHER EXPLANAITION ON ABOVE TWO EXAMPLES.