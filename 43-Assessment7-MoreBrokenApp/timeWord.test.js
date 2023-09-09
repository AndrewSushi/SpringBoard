const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('converts "00:00" to "midnight"', () => {
    const result = timeWord('00:00');
    expect(result).toBe('midnight');
  });

  test('converts "00:12" to "twelve twelve AM"', () => {
    const result = timeWord('00:12');
    expect(result).toBe('twelve twelve AM');
  });

  test('converts "01:00" to "one o\'clock AM"', () => {
    const result = timeWord('01:00');
    expect(result).toBe('one o\'clock AM');
  });

  test('converts "06:01" to "six oh one AM"', () => {
    const result = timeWord('06:01');
    expect(result).toBe('six oh one AM');
  });

  test('converts "06:10" to "six ten AM"', () => {
    const result = timeWord('06:10');
    expect(result).toBe('six ten AM');
  });

  test('converts "06:18" to "six eighteen AM"', () => {
    const result = timeWord('06:18');
    expect(result).toBe('six eighteen AM');
  });

  test('converts "06:30" to "six thirty AM"', () => {
    const result = timeWord('06:30');
    expect(result).toBe('six thirty AM');
  });

  test('converts "10:34" to "ten thirty four AM"', () => {
    const result = timeWord('10:34');
    expect(result).toBe('ten thirty four AM');
  });

  test('converts "12:00" to "noon"', () => {
    const result = timeWord('12:00');
    expect(result).toBe('noon');
  });

  test('converts "12:09" to "twelve oh nine PM"', () => {
    const result = timeWord('12:09');
    expect(result).toBe('twelve oh nine PM');
  });

  test('converts "23:23" to "eleven twenty three PM"', () => {
    const result = timeWord('23:23');
    expect(result).toBe('eleven twenty three PM');
  });
});
