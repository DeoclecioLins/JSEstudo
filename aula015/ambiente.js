
let num = [5,3,4,7,8]

num.push(10)
num.sort()
/*for(let c = 0;c < num.length ; c++){
    console.log(`A posisção ${c} tem o valor ${num[c]}`)
}*/

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}