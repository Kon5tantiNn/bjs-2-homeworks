function getArrayParams(...arr) {
	let max = -Infinity;
	let min = Infinity;
	let sum = 0;
	for (m = 0; m < arr.length; m += 1) {
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
	let objCollector = {
		min: min,
		max: max,
		avg: completeAvg
	}
	return console.log(objCollector);
}
getArrayParams(-99, 99, 10)
getArrayParams(1, 2, 3, -100, 10)
getArrayParams(5)

function summElementsWorker(...arr) {
	let sum = 0;
	for (m = 0; m < arr.length; m += 1) {
		sum += arr[m];
	}
	return console.log(sum)
}
summElementsWorker()
summElementsWorker(10, 10, 11, 20, 10)

function differenceMaxMinWorker(...arr) {
	let maxCollector = -Infinity
	let minCollector = Infinity
	for (m = 0; m < arr.length; m += 1) {
		if (arr[m] > maxCollector) {
			maxCollector = arr[m];
		}
		if (arr[m] < minCollector) {
			minCollector = arr[m];
		}
	}
	return console.log(maxCollector - minCollector)
}
differenceMaxMinWorker(0)
differenceMaxMinWorker(10, 10, 11, 20, 10)

function differenceEvenOddWorker(...arr) {
  let summEvenKeeper = 0;
  let summOddKeeper= 0;
  for(m = 0; m < arr.length; m += 1){
    if(arr[m] % 2 === 0) {
      summEvenKeeper += arr[m];
    }
    if(arr[m] % 2 !== 0) {
      summOddKeeper += arr[m]
    }
  }
  return console.log(summEvenKeeper - summOddKeeper)
}
differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)
differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)

function averageEvenElementsWorker(...arr) {
   let evenCollector = 0;
   let countEvenelements = 0;
   for (m = 0; m < arr.length; m += 1){
     if(arr[m] % 2 === 0){
       evenCollector += arr[m]
       countEvenelements += 1
     }
   }
   return console.log(evenCollector / countEvenelements)
}
averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)
averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)

function makeWork (arr, func) {

}
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];