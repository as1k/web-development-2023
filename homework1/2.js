function createCounter(n) {
  let currentValue = n;

  return function() {
    return currentValue++;
  };
}

function runCalls(n, calls) {
  const counter = createCounter(n);
  const result = [];

  for (const call of calls) {
    if (call === "call") {
      result.push(counter());
    }
  }

  return result;
}
