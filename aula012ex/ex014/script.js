function carregar(){
    var msg = window.document.getElementById('msg')
    var imagem_ = window.document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    
    msg.innerHTML = `São exatamente ${hora} horas!`
    if (hora < 12){
        imagem_.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    }else if ( hora >= 12 && hora <= 18){
        imagem_.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    }else {
        imagem_.src = 'fotonoite.png'
        document.body.style.background = '#515154'

    }
}