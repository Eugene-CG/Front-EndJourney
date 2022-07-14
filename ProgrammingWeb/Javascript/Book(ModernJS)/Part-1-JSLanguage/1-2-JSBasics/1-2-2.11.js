// 1-2-2.11__1

/*
alert( null || 2 || undefined ); // 2
*/

// 1-2-2.11__2

/*
alert( alert(1) || 2 || alert(3) ); //1 & 2
*/

// 1-2-2.11__3

/*
alert( 1 && null && 2 ); // null
*/

// 1-2-2.11__4

/*
alert( alert(1) && alert(2) ); // 1 & undefiend
*/

// 1-2-2.11__5

/*
alert( null || 2 && 3 || 4 ); // 3
*/

// 1-2-2.11__6

/*
    if (age > 14 && age <= 90)
*/

// 1-2-2.11__7

/*
 if ( age < 14 && age >= 90)
*/

// 1-2-2.11__8

/*
if (-1 || 0) alert( 'first' ); // first
if (-1 && 0) alert( 'second' ); //  false
if (null || -1 && 1) alert( 'third' ); // third
*/

// 1-2-2.11__9

/*

let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass === 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass === '' || pass === null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}

*/