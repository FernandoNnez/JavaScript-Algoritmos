function candles(arr) {
    //input: array de int
    //ouput: cantidad de velas máx
    let act = 0;
    let max = 0;
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
        act = 1;
      } else if (arr[i] === max) {
        act++;
      }
    }
    
    return act;
}  
  
console.log(candles([4, 4, 1, 3])); // 2 
console.log(candles([1, 1, 1, 1, 1])); // 5 
console.log(candles([5, 3, 1, 3, 5, 3, 1, 3, 5])); // 3
console.log(candles([10000, 10001, 10002, 10002, 10000])); // 2
console.log(candles([999, 1000, 99, 912, 100])); // 1
console.log("---TEST---");
console.log(candles([4,4,4,1,3])); // 3
console.log(candles([1,1,1,11,11,11,34,25,52352,1,3,52353])); // 1
