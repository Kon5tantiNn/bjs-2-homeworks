"use strict"
function solveEquation(a, b, c) {
    let arr = [];
    let d = Math.pow(b, 2) - 4 * a * c
    if (d === 0) {
        arr.push(-b / (2 * a))
    } else if (d > 0) {
        arr.push((-b + Math.sqrt(d) ) / (2 * a)) && arr.push((-b - Math.sqrt(d)) / (2 * a))
    }
    return arr
}
solveEquation(1,5,4)
solveEquation(1,2,1)
solveEquation(1,2,10)


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let percentOfMonth = percent / 100 / 12;
    let loanBody = amount - contribution;
    let payment = loanBody * (percentOfMonth + percentOfMonth / ((1 + percentOfMonth) ** countMonths - 1));
    let totalSum = payment * countMonths;
    let roundTotalSum = Math.round(totalSum * 100) / 100;
    return roundTotalSum;
}

calculateTotalMortgage(10,0,50000,12)
calculateTotalMortgage(10,1000,50000,12)
calculateTotalMortgage(10,0,20000,24)
calculateTotalMortgage(10,1000,20000,24)
calculateTotalMortgage(10,20000,20000,24)
calculateTotalMortgage(10,0,10000,12)