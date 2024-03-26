import ListNode from '../ListNode';
import LinkedList from '../LinkedList';

describe('LinkedList', () => {
  it('should create list node with value', () => {
    let node1 = new ListNode(1);
    let node2 = new ListNode(2);
    let node3 = new ListNode(3);
    node1.next = node2;
    node2.next = node3;
    const linkedList = new LinkedList(node1);
    expect(linkedList.size()).toBe(3);
  });

  it('should add value index', () => {
    let node1 = new ListNode(1);
    let node2 = new ListNode(2);
    let node3 = new ListNode(3);
    node1.next = node2;
    node2.next = node3;
    const linkedList = new LinkedList(node1);
    linkedList.insertAt('a', 2);

    console.log(JSON.stringify(linkedList));

    expect(linkedList.size()).toBe(4);
  });
});
