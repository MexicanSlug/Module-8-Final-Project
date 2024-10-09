function calculatePay(hourlyWage, hoursWorked, overtimeHours) {
    const regularHours = Math.min(hoursWorked, 40);
    const basePay = hourlyWage * regularHours;

    const overtimeRate = hourlyWage * 1.5;
    const overtimePay = overtimeRate * overtimeHours;

    const totalPay = basePay + overtimePay;
    return totalPay;
}

function allTimesheetsSubmitted(submittedCount, totalCount = 35) {
    return submittedCount === totalCount;
}

function calculateFICATax(totalPay) {
    const FICA_RATE = 0.0765; 
    return totalPay * FICA_RATE;
}

module.exports = { calculatePay, allTimesheetsSubmitted, calculateFICATax };
