import Stack from '../Stack';

describe('Stack', () => {
  it('should stack empty', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  it('should stack push data', () => {
    const stack = new Stack();
    stack.push(1);

    expect(stack.length).toBe(1);
  });

  it('should stack pop data', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();

    expect(stack.length).toBe(1);
  });

  it('should stack peek data', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    
    expect(stack.peek()).toBe(2);
  });
});
