function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')


    if (num.value.lenght == 0){
        window.alert('Por favor, digite um número!!')
    } else {
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ''
    while (c <= 10 ){ 
        let item = document.createElement('option') //criar elemento com JS
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`//seta atributo value para as options. c, 1,2,3...

        tab.appendChild(item)//adicionar elemento filho dentro do select
        c++//imagina se não tiver isso?? ele iria repetir pra sempre o while
    }
    }

}