import ListNode from '../ListNode';
import LinkedList from '../LinkedList';

describe('LinkedList', () => {
  it('should create empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.size()).toBe(0);
  });

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

  it('should remove value in list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.removeValue(2);

    expect(linkedList.size()).toBe(2);
  });

  it('should insert value throw error head null', () => {
    const linkedList = new LinkedList();

    expect(() => {
      linkedList.insertAt(0, 1);
    }).toThrow();
  });

  it('should insert value throw error out of size', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);

    expect(() => {
      linkedList.insertAt(1, 2);
    }).toThrow();
  });

  it('should insert value position 0', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.insertAt(2, 0);

    expect(linkedList.size()).toBe(2);
  });
});
