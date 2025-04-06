let numero = [5,8,7,6,9,]

function maiorN(arr){
 return Math.max(...arr)
}

function menorN(arr){
    return Math.min(...arr)
}

function somaN(arr){
    let soma = 0
    for ( let pos in arr){
        soma += arr[pos]
    }
    return arr = soma
}

function mediaN(arr){
    let soma = 0
    for (let pos in arr){

        soma += arr[pos]

    } 
    return soma / arr.length
}

console.log(` O maior valor é ${maiorN(numero)}`)
console.log(` O menor valor é ${menorN(numero)}`)
console.log(` A soma dos valores é de ${somaN(numero)}`)
console.log(` A média dos valores é de ${mediaN(numero)}`)