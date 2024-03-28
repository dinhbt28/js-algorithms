import ListNode from './ListNode';

export default class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  /**
   * @param {*} value
   */
  append(value) {
    const node = new ListNode(value);

    if (this.head === null) {
      this.head = node;
    } else {
      let curr = this.head;

      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
  }

  /**
   * @returns size of linked list
   */
  size() {
    if (this.head === null) {
      return 0;
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

    if (index > this.size() || index < 0) {
      throw new Error('Position out of size Linked List');
    }

    const node = new ListNode(value);

    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let count = 0;
      let curr, prev;

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

  /**
   *
   * @param {*} index
   */
  removeFrom(index) {
    if (this.head === null) {
      throw new Error('Linked list is null');
    }

    if (index > this.size() || index < 0) {
      throw new Error('Position out of size Linked List');
    }

    let curr, prev;
    curr = this.head;

    if (index === 0) {
      this.head = curr.next;
    } else {
      let count = 0;

      while (count < index) {
        count++;
        prev = curr;
        curr = curr.next;
      }

      prev.next = curr.next;
    }
  }

  /**
   * @param {*} value 
   */

  removeValue(value) {
    if (this.head === null) {
      throw new Error('Linked list is empty');
    }

    if (!value) {
      throw new Error('Value remove')
    }

    let curr = this.head;
    let prev = null;

    while (curr) {
      if (curr.data === value) {
        if (prev === null) {
          this.head = curr.next;
        } else {
          prev.next = curr.next;
        }
      }
      prev = curr;
      curr = curr.next;
    }

  }
}
