function getArrayParams(...arr) {
	let max = -Infinity;
	let min = Infinity;
	let sum = 0;
	for (let m = 0; m < arr.length; m += 1) {
		sum += arr[m] / arr.length
		if (arr[m] > max) {
			max = arr[m];
		}

		if (arr[m] < min) {
			min = arr[m];
		}
	}
	let shortAvg = sum.toFixed(2)
	let completeAvg = parseFloat(shortAvg)
	return {min: min, max: max, avg: completeAvg};
}
getArrayParams(-99, 99, 10)
getArrayParams(1, 2, 3, -100, 10)
getArrayParams(5)

function summElementsWorker(...arr) {
	let sum = 0;
	for (let m = 0; m < arr.length; m += 1) {
		sum += arr[m];
	}
	return sum
}
console.log(summElementsWorker())
console.log(summElementsWorker(10, 10, 11, 20, 10))

function differenceMaxMinWorker(...arr) {
	if(arr.length === 0){
    return 0;
    }
    let maxCollector = -Infinity;
	let minCollector = Infinity;
	for (let m = 0; m < arr.length; m += 1) {
		if (arr[m] > maxCollector) {
			maxCollector = arr[m];
		}
		if (arr[m] < minCollector) {
			minCollector = arr[m];
		}
	}
	return maxCollector - minCollector
}
console.log(differenceMaxMinWorker())
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10))

function differenceEvenOddWorker(...arr) {
  let summEvenKeeper = 0;
  let summOddKeeper = 0;
  for(let m = 0; m < arr.length; m += 1){
    if(arr[m] % 2 === 0) {
      summEvenKeeper += arr[m];
    }
    if(arr[m] % 2 !== 0) {
      summOddKeeper += arr[m]
    }
  }
  return summEvenKeeper - summOddKeeper
}
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17))
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35))

function averageEvenElementsWorker(...arr) {
  if(arr.length === 0){
    return 0;
  } 
  let evenCollector = 0; 
  let countEvenelements = 0;
  for (let m = 0; m < arr.length; m += 1){
     if(arr[m] % 2 === 0){
       evenCollector += arr[m]
       countEvenelements += 1
     }
   }
  return evenCollector / countEvenelements
}
console.log(averageEvenElementsWorker())
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9))
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35))

function makeWork(arrOfArr, func) {
	const maxWorkerResult = [];
	for(let m = 0; m < arrOfArr.length; m += 1){
		maxWorkerResult.push(func(...arrOfArr[m]));
	}
	const completeMaxResult = Math.max(...maxWorkerResult)
	return completeMaxResult;
}
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];

console.log(makeWork(arr, summElementsWorker))
console.log(makeWork(arr, differenceMaxMinWorker))
console.log(makeWork(arr, differenceEvenOddWorker))
console.log(makeWork(arr, averageEvenElementsWorker))
