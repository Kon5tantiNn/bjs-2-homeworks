function compareArrays(arr1, arr2) {
    const compFn = arr1.every((el, i) => el === arr2[i]);
    if (arr1.length !== arr2.length){
        return false;
    }
    return console.log(compFn);
}
compareArrays([1, 2, 3], [1, 2, 3])
compareArrays([1, 2], [1, 2, 3])
compareArrays([1, 2, 3], [3, 2, 1])
compareArrays([0, 1, 2], [0, 1])
compareArrays([0, 1], [0, 1, 2])
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])


function getUsersNamesInAgeRange(users, gender) {
  
}