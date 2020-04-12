
let num = document.getElementById('fnum')
let selctArea = document.getElementById('flista')
let res = document.querySelector('div#res')
let lista = []

function isNumber(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else {
        return false
    }
}
function inList(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}

function adicionar(){
    res.innerHTML =''
    let n = Number(num.value)
    
    let item = document.createElement('option')
    if(isNumber(num.value) && !inList(num.value, lista)){
        lista.push(n)
        item.text = `Valor ${n} adicionado`
        selctArea.appendChild(item)
 
    }else{
        window.alert('Valor invalido ou já encontrado!')
    }
    num.value=''
    num.focus()
}
/***************************************************************/
function lengList(l){
    return l.length
}
function maxValues(l){
    return Math.max(...l)
}
function minValues(l){
    return Math.min(...l)
}
function addValues(l){
    let sum =0
    for(let c in l){
         sum += Number(l[c])
         console.log(sum)
    }
    return sum
}
function avgValues(l){

    return addValues(l)/l.length
}

function finalizar(){
    lista.sort((a,b) => a-b)
    console.log(lista)
    res.innerHTML += `Ao todo temos ${lengList(lista)} números na lista! <br>`
    res.innerHTML += `O maior valor foi ${maxValues(lista)}!<br>`
    res.innerHTML += `O menor valor foi ${minValues(lista)}!<br>`
    res.innerHTML += `Somando todos os valores, temos ${addValues(lista)}!<br>`
    res.innerHTML += `A média dos valores digitados é  ${avgValues(lista)}!<br>`
    
}


