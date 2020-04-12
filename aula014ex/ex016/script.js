function countPass(){
    
    let vIni = document.getElementById('numIni')
    let vEnd = document.getElementById('numEnd')
    let vPas = document.getElementById('numPas')
    let res = document.getElementById('res')
    
    if(vIni.value.length ==0 || vEnd.value.length ==0 || vPas.value.length ==0){
        window.alert('[ERRO] Os campos precisam ser preenchidos!')
        res.innerHTML = 'Impossível contar!'
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(vIni.value)
        let f = Number(vEnd.value)
        let p = Number(vPas.value)
        if(p <= 0){
            window.alert( `Impossível contar, considerando PASSO 1!`)
            p = 1
        }
        if(i < f){
            for(let c = i ; c <= f ; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }            
        }else{
            for(let c = i ; c >= f ; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }

        }
        res.innerHTML += `\u{1F3C1}`
    }
    
    
 

}