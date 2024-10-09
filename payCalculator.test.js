const { calculatePay, allTimesheetsSubmitted, calculateFICATax } = require('./payCalculator'); // Adjust the path as needed

describe('Overtime Pay Calculation', () => {
    test('calculates base pay correctly', () => {
        expect(calculatePay(10, 40, 0)).toBe(400);
    });

    test('calculates overtime pay correctly', () => {
        expect(calculatePay(10, 46, 6)).toBe(490);
    });

    test('calculates pay with no overtime correctly', () => {
        expect(calculatePay(15, 40, 0)).toBe(600);
    });

    test('calculates exact overtime pay', () => {
        expect(calculatePay(20, 50, 10)).toBe(1100); // 800 base + 300 overtime
    });

    test('calculates pay when no hours worked', () => {
        expect(calculatePay(10, 0, 0)).toBe(0);
    });
});

describe('Timesheet and FICA Tax Tests', () => {
    test('checks if all timesheets have been submitted', () => {
        expect(allTimesheetsSubmitted(35)).toBe(true);
        expect(allTimesheetsSubmitted(34)).toBe(false)
    });

    test('calculates the correct FICA tax for total pay', () => {
        const totalPay = 252688; 
        const expectedFICATax = totalPay * 0.0765; 
        expect(calculateFICATax(totalPay)).toBeCloseTo(expectedFICATax);
    });

    test('checks specific FICA tax amount', () => {
        const totalPay = 252688; 
        const calculatedFICATax = calculateFICATax(totalPay);
        const expectedFICATax = 19268.98; 
        expect(calculatedFICATax).toBeCloseTo(expectedFICATax, 2)
    });
});


