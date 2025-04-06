let numeros = [1,2,3,2,4,5,1,6,7,5]


function removerDuplicatas(arr){
    let semdupli = []


    for ( let pos in arr){

        if(arr[pos] != semdupli[pos]){
            semdupli[pos] = arr
        } else {
            console.log("sem igual")
        }       
    }
    return arr = semdupli
}

console.log(removerDuplicatas(numeros))