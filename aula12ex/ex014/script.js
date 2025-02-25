function carregar(){
    var mensagem = window.document.getElementById('msg')
    var imagem = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()

    mensagem.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
    //Bom dia

    imagem.scr = 'manha250.png'
    document.body.style.background = '#e2cd9f'
    } else if ( hora >=12 && hora < 18){
    //Boa tarde
    imagem.src = 'tarde250.png'
    document.body.style.background = '#b9846f'
    } else{
    //Boa noite
    imagem.scr = 'noite250.img'
    document.body.style.background = '#515154'
    }
}