import calculate from '../calculate';

describe('calculations', () => {
  test('it sets the next number', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    expect(calculate(obj, '2').next).toBe('2');
  });

  test('it sets to total from an operation', () => {
    let obj = {
      total: null,
      next: null,
      operation: null,
    };

    obj = calculate(obj, '2');
    expect(obj.next).toBe('2');

    obj = calculate(obj, '+');
    expect(obj.operation).toBe('+');

    obj = calculate(obj, '2');
    expect(obj.total).toBe('2');

    obj = calculate(obj, '=');
    expect(obj.total).toBe('4');
  });
});
