function fatorial(n){
    if (n==1){
        return 1
    }else{
        let v =  n* fatorial(n-1)
        console.log(`é ${v}`)
        return v
      
    }
}
console.log(fatorial(5))