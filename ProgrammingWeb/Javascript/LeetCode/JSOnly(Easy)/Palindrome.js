/*
9. Palindrome Number
Easy

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
*/
let isPalindrome = function(x) {
    let fk = x + "";
    let fknew = fk.split("").reverse().join("");
    
    for ( let i = 0; i < fk.length / 2.000000000; i++) {
        if (fk[i] != fknew[i] || x < 0) {
            return false
        } 
    }
    return true;
};