describe("calculator tests", function(){
    it('should calculate the monthly rate correctly', function () {
        const values = {
            amount: 20000,
            years: 10,
            rate: 12
        };
        expect(calculateMonthlyPayment(values)).toEqual("286.94");
    });

    it("should return a result with 2 decimal places", function() {
        const values = {
            amount: 1025.7,
            years: 2,
            rate: 5
        };
        expect(calculateMonthlyPayment(values)).toEqual("45.00");
    });

    it("should handle over 100% intrest rates", function() {
        const values = {
            amount: 30000,
            years: 5,
            rate: 150
        };
        expect(calculateMonthlyPayment(values)).toEqual("3753.20");
    });
})

/// etc

