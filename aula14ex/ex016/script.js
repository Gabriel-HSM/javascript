function contar(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){//length diz comprimento, ou quantas letras tem dentro. Esse bloco épara quando o usuário não coloca numeros nos botões
        res.innerHTML = 'Impossível Contar'
        window.alert('[ERRO] faltam dados')
        
    } else {

        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <=0){//considerando que o passo é 1 porque não foi colocado o valor 
            window.alert('Passo inválido considerando passo 1')
            p = 1
        }

        if (i < f){
            //Contagem crescente
             //for (inicio; teste; incremento) //no incremeto seria bom usar c += p que significa c + ele mesmo + p
                for(var c = i; c <= f; c = c + p ){  
                res.innerHTML += `${c} \u{1F449}`
                }
        }else {
            //contagem decrescente
            for (var c = i; c >= f; c-= p){
            res.innerHTML += `${c} \u{1F449}`
            }
                
        }
        res.innerHTML += `\u{1F3C1}`
    }
        

}