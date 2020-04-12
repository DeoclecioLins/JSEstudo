/*const person = {
name: "Nicholas"
};

// works
person.name = "Greg";

// throws an error
person = {
    name: "Greg"
};
console.log(person)*/

var funcs = [];

for (let i = 0; i < 15; i++) {
    funcs.push(function() { console.log(i); });
}

funcs.forEach(function(func) {func(); });
//console.log(funcs)