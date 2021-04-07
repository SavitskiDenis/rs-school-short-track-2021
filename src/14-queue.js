const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor () {
    this.head = null;
  }

  get size() {
    let size = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      size++;
      currentNode = currentNode.next;
    }
    return size;
  }

  enqueue(element) {
    if (this.head !== null) {
      let currentNode = this.head;
      while (currentNode.next !== null) { currentNode = currentNode.next; }
      currentNode.next = new ListNode(element);
    } else {
      this.head = new ListNode(element);
    }
  }

  dequeue() {
    let result = null;
    if (this.head !== null) {
      result = this.head.value;
      this.head = this.head.next;
    }
    return result;
  }
}

module.exports = Queue;
