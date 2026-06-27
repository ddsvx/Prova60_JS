console.log(`\nEx.3 - Estrutura de repetição (for)\n`)

let carro=["Monza","Fiat Uno","Space Fox","Rx-7","Lancer"],pedagio=0

for(let i=0;i<carro.length;i++){
    console.log(`===REGISTRO PEDÁGIO===\n${carro[i]} - R$12,50`)
    pedagio = carro.length*12.5
}

console.log(`Total arrecadado= ${pedagio}`)