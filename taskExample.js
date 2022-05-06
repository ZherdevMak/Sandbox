'use strict'
let arr = [1,-4,5,0,-13,16,7,8,-1,12];
function getMaxSubSum(arr) {
  let arr1 = [];
  let arr2 = [];
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      for ( let a = i; a< arr.length; a++) {
        sum += arr[a]; 
        arr1.push(sum);
       
      }
      let c = Math.max.apply(null, arr1);
        arr2.push(c);
        arr1 = [];
        sum = 0;
  } else {arr2.push(sum);
      sum = 0;
    }
}
 return Math.max.apply(null, arr2);
}
alert(getMaxSubSum(arr));