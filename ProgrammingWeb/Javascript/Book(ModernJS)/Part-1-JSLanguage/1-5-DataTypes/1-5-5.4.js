// 1-5-5.4__1

/*
4
*/

// 1-5-5.4__2

/*
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-roll");
styles[Math.floor((styles.length - 1)/ 2)] = "Classic";
alert(styles.shift);
styles.unshift("1", "2");
*/

// 1-5-5.4__3

/*
array
*/

// 1-5-5.4__4

/*
function sumInput() {
    let arr = [];
    i = 0;
    while()
    {

        arr[i] += prompt("Eter something", "");

        if( arr[i] == "" || arr[i] == null || !isFinite(value))  break;
        i++
    }
    let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
*/

// 1-5-5.4__5

/*
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { 
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum); 
    if (partialSum < 0) partialSum = 0; 
  }

  return maxSum;
}
*/