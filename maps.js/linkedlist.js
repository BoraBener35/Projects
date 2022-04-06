class Node {
    constructor(element) {
       this.element = element;
       this.next = null
    }
 }
 
 class LinkedList {
    constructor() {
       this.head = null;
       this.size = 0;
    }
 
    // adds an element at the end of list
    add(element) {
       // creates a new node
 
 
       // to store current node
 
 
       // if list is Empty add the element and make it head
 
 
       // iterate to the end of the list
 
 
       // add node
 
 
       // increase size
 
    }
 
    // insert element at the position index of the list
    insertAt(element, index) {
 
       // creates a new node and variables for curr and prev
       let node = new Node(element);
       let curr, prev;
 
 
       // add the element to the first index
 
       // add it elsewhere
 
       // iterate over the list to find the position to insert
 
 
 
 
       // update size
 
    }
 
    // removes an element from the specified location and returns the element
    removeFrom(index) {
 
 
 
 
    }
 
    // removes a given element from the list and return it - if not there return -1
    removeElement(element) {
 
    }
 
    // finds the index of first element -1 if not there
    indexOf(element) {
 
 
 
    }
 
    // checks the list for empty
    isEmpty() {
 
    }
 
    // display the size of the list
    size_of_list() {
       console.log(this.size);
    }
 
 
    // prints the list items
    printList() {
 
    }
 
 }