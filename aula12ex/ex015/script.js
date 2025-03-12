function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')//pega o elemento da data de nascimento
    var res = window.document.getElementById('res')//pegou o elemento escrito  da ultima div

    if (fano.value.length == 0 || fano.value >= ano){//Length não permite que esteja vazio
        window.alert('[ERRO] verifique os dados e tente novamente!!') 
    
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img= document.createElement('img') //cria elemento dinâmico com JS
        img.setAttribute('id', 'foto')//coloca atributo ID com nome foto
        


        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <15){
                //criança
                img.setAttribute('src', 'homemcrianca.png')
            }else if(idade < 28){
                //jovem
                img.setAttribute('src', 'homemjovem.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'homem.png')
            }else{
                //idoso
                img.setAttribute('src', 'homemidoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <15){
                //criança
            img.setAttribute('src', 'mulhercrianca.png')
            }else if(idade < 28){
                //jovem
                img.setAttribute('src', 'mulherjovem.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'mulher.png')
            }else{
                //idoso
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        res.style.textAlign = 'center'//mudando estilo pelo JS
        res.innerHTML = `Detectamos ${genero} com ${idade} anos `
        res.appendChild(img)
        img.style.display = 'flex'  
        img.style.justifyContent = 'center'
        img.style.alignItems = 'center' 
        img.style.margin = 'auto' 
        }
    
}