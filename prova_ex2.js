console.log(`\nEx.2 - Estrutura condicional (if/else if/else)\n`)

let ex2_idade=65

console.log(`===BEM-VINDO AO PARQUE AQUÁTICO===\n`)
if(ex2_idade>=60){
    console.log(`Idade: ${ex2_idade}\nPreço a pagar= R$0,00 (Entrada Gratuita)`)
}
else if(ex2_idade>=11){
    console.log(`Idade: ${ex2_idade}\nPreço a pagar= R$80,00 (Entrada Normal)`)
    
}
else{
    console.log(`Idade: ${ex2_idade}\nPreço a pagar= R$40,00 (Meia Entrada)`)
}