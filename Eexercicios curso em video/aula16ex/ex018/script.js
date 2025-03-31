let impn = document.getElementById("impn")//Número digitado pelo usuário tipo String
let res = document.getElementById("res")//resultado
let tab = document.getElementById("tab")//Seleção do Select
let valores = []

function isNumber(n){                        //função retorna true se for um número
    if(Number(n) >= 1 && Number(n) <= 100){             
        return true     
    } else {
        return false
    }
}               

function inLista(n, l){               //função retorna true se o número está na lista
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}


function adicionar(){
    
    if(isNumber(impn.value) && !inLista(impn.value, valores)){
        valores.push(Number(impn.value))//adiciona valor no vetor
        let item = document.createElement("option")
        item.text = `Valor ${impn.value} foi adicionado`
        tab.appendChild(item)
        res.innerHTML = ''
       



    } else {
        window.alert("Valor inválido ou já encontrado na lista.")
    }
    impn.value = '' //assim que clica em adicionar, apaga o que o usuário escreveu
    impn.focus() //faz como se eu estivesse clicado no espaço de digitar
}

function finalizar(){
    if(valores.length == 0){
        window.alert("Adicione valores antes de finalizar")
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){

            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        

        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} Números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}