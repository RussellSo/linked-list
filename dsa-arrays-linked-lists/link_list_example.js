class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(desired_number) {

    const desired_number_but_as_a_node = new Node(desired_number);

    // Add first item to list if head is empty
    if(this.head === null) {
        this.head = desired_number_but_as_a_node;
        return;
    }

    // Else head is not empty therefore we must traverse to end of list
    let current_node = this.head;
    while(current_node.next !== null) {
        current_node = current_node.next;
    }

    // Now that we are at the end of the list, append new node to it
    current_node.next = desired_number_but_as_a_node;
  }

  print() {
    let current_node = this.head; // Start from beginning of the list

    // Traverse through entire list and print it out
    while(current_node !== null) {
        console.log(current_node.val);
        current_node = current_node.next;
    }
  }
}

// Create Linklist
let linklist = new LinkedList();

// Append items 1 by 1 to link list
linklist.add(5);
linklist.add(1);
linklist.add(3);

// Print items 1 by 1 of link list
linklist.print();