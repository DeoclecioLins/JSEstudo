
var sum_ = (n1,n2) => n1+n2;

//console.log(sum_(2,4))
var lista = [];
for(let c =0; c<=10;c++){
    
    //console.log(lista)
    lista.push(sum_(c,2))
    //console.log(lista)
}
console.log(lista)
console.log(sum_.bind(null,lista))
