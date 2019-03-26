function countUniqueValues(arr){
    let left = 0;
    let right = 1;
    while (right < arr.length) {
        if (arr[left] === arr[right]) {
            right++;
        }
        if (arr[left] !== arr[right]) {
            left++;
            arr[left] = arr[right];
        }
    }
    return left;
}

countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])