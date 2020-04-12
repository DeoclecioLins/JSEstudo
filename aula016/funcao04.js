function fatorial(n){
    fat = 1
    for(let c = n;c>1;c--){
        console.log(`é ${fat} X ${c}`)
        fat *= c
        
    }
    return fat
}
console.log(fatorial(5))