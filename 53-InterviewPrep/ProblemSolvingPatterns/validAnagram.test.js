const validAnagram = require("./validAnagram");

describe("validAnagram", function() {
  it("returns true for valid anagrams", function() {
    expect(validAnagram('listen', 'silent')).toBe(true);
    expect(validAnagram('abc', 'cab')).toBe(true);
    expect(validAnagram('cinema', 'iceman')).toBe(true);
  });

  it("returns false for invalid anagrams", function() {
    expect(validAnagram('hello', 'world')).toBe(false);
    expect(validAnagram('abc', 'def')).toBe(false);
    expect(validAnagram('rat', 'car')).toBe(false);
  });

  it("handles anagrams with spaces", function() {
    expect(validAnagram('rail safety', 'fairy tales')).toBe(true);
    expect(validAnagram('hello world', 'world hello')).toBe(true);
  });
});
