console.log(`Ex.5 - Funções (com parâmetros e retorno)\n`)

function calcularDesconto(valor){
    if(valor>200){
        percentual=0.10
        total = valor * percentual
        return console.log("Compra de", valor, "com 10% de desconto: R$",valor-total)
    }
    else{
        return console.log("Compra de ", valor, "sem desconto: R$",valor)
    }
}

calcularDesconto(100)
calcularDesconto(300)
calcularDesconto(500)