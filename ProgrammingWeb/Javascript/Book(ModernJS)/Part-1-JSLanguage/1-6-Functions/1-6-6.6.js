// 1-6-6.6__1 

/*
ok
*/

// 1-6-6.6__2

/*
function sum(a) {

    let currentSum = a;
  
    function f(b) {
      currentSum += b;
      return f;
    }
  
    f.toString = function() {
      return currentSum;
    };
  
    return f;
  }
  */