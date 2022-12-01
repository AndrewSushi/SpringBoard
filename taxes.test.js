it("Should calculate the high tax bracket", function(){
    expect(calculateTaxes(50000)).toEqual(12500);
    expect(calculateTaxes(100000)).toEqual(25000);
    // expect(1 + 1).toEqual(2);
})
it("Should calculate the low tax bracket", function(){
    expect(calculateTaxes(10000)).toEqual(1500);
    expect(calculateTaxes(1000)).toEqual(150);
    expect(calculateTaxes(0)).toEqual(0);
})
it("Should remove duplicates from an array", function(){
    expect(removeDupes([1,1,2,2,3,4])).toEqual([1,2,3,4]);
    expect(removeDupes([1,2,3,4])).toEqual([1,2,3,4]);
})
it("Should remove duplicates from a string", function(){
    expect(removeDupes("Hello")).toBe("Helo");
    expect(removeDupes("Hello")).toBeInstanceOf(String);
})
it("Should remove value from array", function(){
    expect(remove([1,2,3,4,5,6], 6)).not.toContain(6);
})