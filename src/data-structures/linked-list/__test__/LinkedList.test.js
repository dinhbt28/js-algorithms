import ListNode from '../ListNode';
import LinkedList from '../LinkedList';

describe('LinkedList', () => {
  it('should create list node with value', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    expect(linkedList.size()).toBe(3);
  });

  it('should add value index', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.insertAt('a', 2);

    expect(linkedList.size()).toBe(4);
  });
});
