//1-8-8.3__1

/*
function f() {
    alert("Hello!");
  }
  
  f.defer(1000); // выведет "Hello!" через 1 секунду

  Function.prototype.defer = function(ms) {
     setTimeout( this, ms);
  }
*/

//1-8-8.3__2

/*
function f(a, b) {
    alert( a + b );
  }
  
  f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

Function.prototype.defer = function(ms) {
    let func = this;
    return function(...args) {
        setTimeout(func.apply(this, args), ms);
    }
}
*/