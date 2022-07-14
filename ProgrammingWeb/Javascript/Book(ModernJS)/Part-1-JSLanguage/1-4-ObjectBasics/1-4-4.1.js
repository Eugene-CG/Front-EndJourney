// 1-4-4.1__1

/*
let user = {
    name: "John",
    surname: "Smith",
};

user.name = "Pete";
delete user.name;
*/

// 1-4-4.1__2

/*
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

let user = {};

console.log(isEmpty(user));
*/

// 1-4-4.1__3

/*
Yes
*/

// 1-4-4.1__4

/*
function sum(obj) {
    let allSum = 0;

    for ( let key in obj) {
        allsum += obj.key;
    }
    return allsum;
}
*/

// 1-4-4.1__5

/*
function multiplyNumeric(obj) {
    for ( let key in obj) {
        if ( typeof obj.key == "number")
        obj.key *= 2;
    }
}
*/