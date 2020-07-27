export function errorIfNotString(arg) {
  if (typeof arg !== 'string')  throw new Error('Input must be string');
}
