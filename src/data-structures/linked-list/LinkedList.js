import ListNode from './ListNode';

export default class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  /**
   * @returns size of linked list
   */
  size() {
    if (this.head === null) {
      throw new Error('Linked list is null');
    }

    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  /**
   * @param {*} value
   * @param {*} index
   */
  insertAt(value, index) {
    if (this.head === null) {
      throw new Error('Linked list is null');
    }

    if (index < 0) {
      throw new Error('Position must be greater or equal 0');
    }

    if (index > this.size()) {
      throw new Error('Position out of size Linked list');
    }

    let count = 0;
    let curr, prev;
    const node = new ListNode(value);

    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      curr = this.head;

      while (count < index) {
        count++;
        prev = curr;
        curr = curr.next;
      }

      node.next = curr;
      prev.next = node;
    }
  }
}

// {"head":{"data":1,"next":{"data":2,"next":{"data":3,"next":null}}}}

// curr = {"data":1,"next":{"data":2,"next":null}};

// count:0 < index:1 => count: 1, prev: {"data":1,"next":{"data":2,"next":null}}, curr: {"data":2,"next":{"data":3,"next":null}
// count:1 < index:2 => count: 2, prev: {"data":2,"next":{"data":3,"next":null}, curr: {"data":3,"next":null}

// node: {data: a, next: {"data":3,"next":null}}, prev: {"data":2,"next": {data: a, next: {"data":3,"next":null}}