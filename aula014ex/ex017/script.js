function gerarTabuada(){
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')
    

    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        let n = Number(num.value)
        
        let c = 0
        tab.innerHTML =''
        do {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
            item.value= `tab${c}`            
            c++
        }while(c<=10)
    }   
}