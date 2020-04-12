function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
   
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade<12){
                //criança
                img.setAttribute('src', 'boy.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'youngman.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'man.png')
            }else {
                //Idoso
                img.setAttribute('src', 'oldman.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade<12){
                //criança
                img.setAttribute('src', 'girl.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'youngwoman.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'woman.png')
            }else {
                //Idoso
                img.setAttribute('src', 'oldwoman.png')
            }
        }
        if(genero != "Homem"){

            document.body.style.background = "pink"
        }else{
            document.body.style.background = "green"
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Identificamos ${genero} de ${idade} anos!`
        res.appendChild(img)
        
    }
}