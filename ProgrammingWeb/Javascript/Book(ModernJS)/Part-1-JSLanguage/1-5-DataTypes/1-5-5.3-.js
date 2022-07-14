// 1-5-5.3__1

/*
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}
*/

// 1-5-5.3__2

/*
function checkSpam(str) {
    str = str.toLowerCase();
    if ( str.indexOf("xxx") == "-1" || str.indexOf("viagra") == "-1") {
        return true;
    }
    return false;
   // return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
*/

// 1-5-5.3__3

/*
function truncate(str, maxlength) {
    if ( str.length > maxlength) {
        return str.slice(0, maxlength) + "…";
    }
}
*/

// 1-5-5.3__4

/*
function extractCurrencyValue(str) {
    return +str.slice(1);
}
*/