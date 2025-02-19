var idade = 70
console.log(`Você tem ${idade} anos.`)
if (idade < 16){
    console.log('Não vota')
} else if(idade <= 16 || idade >= 65){
        console.log('Voto opci0nal')
    }else{
        console.log('Voto obtigatório')
    }
