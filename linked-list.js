/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.head === null) {
      throw new Error("List is empty.");
    }
    let poppedVal = this.tail.val;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      let current = this.head;
      let previous = null;
      while (current.next !== null) {
        previous = current;
        current = current.next;
      }
      previous.next = null;
      this.tail = previous;
    }
    this.length--;
    return poppedVal;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) {
      throw new Error("List is empty.");
    }
    let shiftedVal = this.head.val;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this.length--;
    return shiftedVal;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index. Index is out of range.")
    }
    let currentNode = this.head;
    let currentIdx = 0;
    while (currentIdx < idx) {
      currentNode = currentNode.next;
      currentIdx++;
    }
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index. Index is out of range.")
    }
    let currentNode = this.head;
    let currentIdx = 0;
    while (currentIdx !== idx) {
      currentNode = currentNode.next;
      currentIdx++;
    }
    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error("Invalid index. Index is out of range.")
    }
    if (idx === 0) {
      let newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;
      if (this.length === 0) {
        this.tail = newNode;
      }
    } else if (idx === this.length) {
      this.push(val);
    } else {
      let newNode = new Node(val);
      let currentNode = this.head;
      let currentIdx = 0;
      while (currentIdx < idx - 1) {
        currentNode = currentNode.next;
        currentIdx++;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index. Index is out of range.")
    }
    if (idx === 0) {
      if (this.length === 1) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
      }
    } else {
      let currentNode = this.head;
      let currentIdx = 0;
      let prevNode = null;
      while (currentIdx !== idx) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        currentIdx++;
      }
      prevNode.next = currentNode.next;
      if (currentNode === this.tail) {
        this.tail = prevNode;
      }
    }
    this.length--;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0;
    }
    let currentNode = this.head;
    let sum = 0;
    while (currentNode !== null) {
      sum += currentNode.val;
      currentNode = currentNode.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;
