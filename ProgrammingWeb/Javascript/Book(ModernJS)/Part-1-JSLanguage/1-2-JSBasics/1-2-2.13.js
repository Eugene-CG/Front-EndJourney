// 1-2-2.13__1

/*
let i = 3;

while (i) {
  alert( i-- );
} 
// print 1, but i == 0
*/

// 1-2-2.13__2

/*
let i = 0;
while (++i < 5) alert( i ); 1...4

let i = 0;
while (i++ < 5) alert( i ); 1...5

*/

// 1-2-2.13__3

/*
При помощи цикла for выведите чётные числа от 2 до 10.

for ( let i = 2; i <= 10; i+=2) alert(i);
*/

// 1-2-2.13__4

/*
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
let i = 0;
while ( i < 3) i++
*/

// 1-2-2.13__5

/*

*/

// 1-2-2.13__6

/*
let num;

do {
  num = prompt(" 100?", 0);
} while (num <= 100 && num);
*/

// 1-2-2.13__7

/*
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime;
  }

  alert( i ); 
}
*/