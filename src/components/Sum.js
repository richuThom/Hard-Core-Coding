export const Sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.warn('Invalid input: arguments must be numbers');
    return null;
  }

  return a + b;
};
