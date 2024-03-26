import ListNode from '../ListNode';

describe('ListNode', () => {
  it('should create list node with value', () => {
    const node = new ListNode(1);
    expect(node.data).toBe(1);
    expect(node.next).toBeNull();
  });
});
