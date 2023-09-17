function expect(value) {
  return {
    toBe: function(expectedValue) {
      if (value === expectedValue) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function(unexpectedValue) {
      if (value !== unexpectedValue) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
}
