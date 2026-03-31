function deepEquals(a, b) {
  // NaN check
  if (typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b)) return true;

  // Type check
  if (typeof a !== typeof b) return false;

  // null check (typeof null === 'object', so must check before object handling)
  if (a === null && b === null) return true;
  if (a === null || b === null) return false;

  // Primitives (handles undefined, numbers, strings, booleans)
  if (typeof a !== 'object') return a === b;

  // Array check
  const aIsArray = Array.isArray(a);
  const bIsArray = Array.isArray(b);
  if (aIsArray !== bIsArray) return false;

  if (aIsArray) {
    if (a.length !== b.length) return false;
    return a.every((val, i) => deepEquals(val, b[i]));
  }

  // Object check
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) return false;

  return aKeys.every(key => Object.prototype.hasOwnProperty.call(b, key) && deepEquals(a[key], b[key]));
}

module.exports = deepEquals;
