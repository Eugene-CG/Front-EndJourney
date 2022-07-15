// 1-6-6.9__1

/*
function work(a, b) {
    alert( a + b ); // произвольная функция или метод
  }
  
  work = spy(work);
  
  work(1, 2); // 3
  work(4, 5); // 9
  
  for (let args of work.calls) {
    alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
  }

 function spy(func) {
     function wrap(...args) {
        wrap.calls.push(args);
        return func.apply(this, arguments);
     }

     wrap.calls = [];
     return wrap;
 }
 */

 // 1-6-6.9__2
 /*

 function delay(f, ms) {

    return function() {
      setTimeout(() => f.apply(this, arguments), ms);
    };
  
}
*/

//done after