/*function pick(object) {
    let result = Object.create(null);

    // start at the second parameter
    for (let i = 1, len = arguments.length; i < len; i++) {
        result[arguments[i]] = object[arguments[i]];
    }

    return result;
}

let book = {
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakasxxxxxxxxx",
    year: 2015
};
let book1 = {
    title: "Understandingzzzzzzzz ECMAScript 6",
    author: "Nicholas C. Zaknnnnnnnnasxxxxxxxxx",
    year: 2015
};

let bookData = pick(book1, "author", "year");

console.log(bookData.author);   // "Nicholas C. Zakas"
console.log(bookData.year);     // 2015
*/

let book = {
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakasxxxxxxxxx",
    year: 2015
};
function pick(object, ...keys) {
    let result = Object.create(null);

    for (let i = 0, len = keys.length; i < len; i++) {
        result[keys[i]] = object[keys[i]];
    }

    return result;
}
let bookData = pick(book,"title", "author", "year");

console.log(bookData.author);   
console.log(bookData.title);    
console.log(bookData.year);     