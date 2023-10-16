const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("1234 should return '1,234'", () => {
    expect(addCommas(1234)).toBe("1,234");
  });

  test("1000000 should return '1,000,000'", () => {
    expect(addCommas(1000000)).toBe("1,000,000");
  });

  test("9876543210 should return '9,876,543,210'", () => {
    expect(addCommas(9876543210)).toBe("9,876,543,210");
  });

  test("6 should return '6'", () => {
    expect(addCommas(6)).toBe("6");
  });

  test("-10 should return '-10'", () => {
    expect(addCommas(-10)).toBe("-10");
  });

  test("-5678 should return '-5,678'", () => {
    expect(addCommas(-5678)).toBe("-5,678");
  });

  // Bonus test cases for numbers with decimal places
  test("12345.678 should return '12,345.678'", () => {
    expect(addCommas(12345.678)).toBe("12,345.678");
  });

  test("-3141592.65 should return '-3,141,592.65'", () => {
    expect(addCommas(-3141592.65)).toBe("-3,141,592.65");
  });
});
