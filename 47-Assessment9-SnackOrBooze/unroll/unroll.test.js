const unroll = require("./unroll");

describe("#unroll", function () {
  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("correctly unrolls a 2x2 square grid", function () {
    const square = [
      [1, 2],
      [3, 4],
    ];
    const expected = [1, 2, 4, 3];
    expect(unroll(square)).toEqual(expected);
  });

  it("correctly unrolls a 3x3 square grid", function () {
    const square = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expected = [1, 2, 3, 6, 9, 8, 7, 4, 5];
    expect(unroll(square)).toEqual(expected);
  });

  it("correctly unrolls a 4x4 square grid", function () {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    const expected = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
    expect(unroll(square)).toEqual(expected);
  });

  it("correctly unrolls a 1x1 square grid", function () {
    const square = [[1]];
    const expected = [1];
    expect(unroll(square)).toEqual(expected);
  });

  it("handles an empty square grid", function () {
    const square = [];
    const expected = [];
    expect(unroll(square)).toEqual(expected);
  });

  it("handles a square grid with one row and multiple columns", function () {
    const square = [[1, 2, 3, 4, 5]];
    const expected = [1, 2, 3, 4, 5];
    expect(unroll(square)).toEqual(expected);
  });

  it("handles a square grid with one column and multiple rows", function () {
    const square = [[1], [2], [3], [4], [5]];
    const expected = [1, 2, 3, 4, 5];
    expect(unroll(square)).toEqual(expected);
  });
});
