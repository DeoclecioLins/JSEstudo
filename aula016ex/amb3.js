/*
var add = new Function("first", "second", "return first + second");

console.log(add(1, 1));     // 2
*/

"use strict";

if (true) {

    console.log(typeof doSomething);        // "function"

    function doSomething() {
        // ...
    }

    doSomething();
}

console.log(typeof doSomething);            // "undefined"