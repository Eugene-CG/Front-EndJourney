// 1-5-5.5__1

/*
function camalize(str) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}
*/

// 1-5-5.5__2

/*
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}
*/

// 1-5-5.5__3

/*
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
        }
    }
}
*/

// 1-5-5.5__4

/*
let arr = [1, 2, 5, 10, -5];

arr.sort((a, b) => b - a);
*/

// 1-5-5.5__5

/*
function copySorted(arr) {
    let copyArr = arr.slice();

    return copyArr.sort();
}
*/

// 1-5-5.5__6

/*
function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    }
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
 }
*/

// 1-5-5.5__7

/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map( item => item.name);

alert( names ); // Вася, Петя, Маша
*/

// 1-5-5.5__8

/*
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map( item => ({fullName: item.name + " " + item.surname, id: item.id}));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин
*/

// 1-5-5.5__9

/*
function sortByAge(users) {
    return users.sort((a, b) => a.age - b.age);
}
*/

// 1-5-5.5__10

/*
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
  
      // поменять элементы местами
      // мы используем для этого синтаксис "деструктурирующее присваивание"
      // подробнее о нём - в следующих главах
      // то же самое можно записать как:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  */

// 1-5-5.5__11

/*
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
*/

// 1-5-5.5__12

/*
function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
}
*/
