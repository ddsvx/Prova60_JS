console.log(`\nEx.6 - Array de objetos (integradora)\n`)

let animais=[
    {nome:"Thor",tipo:"Cachorro",peso:45},
    {nome:"Larry",tipo:"Gato",peso:7},
    {nome:"Garfield",tipo:"Gato",peso:60},
    {nome:"Neymar",tipo:"Cachorro",peso:30}
]

let cont=0

animais.forEach(()=>{
    console.log(`Nome: ${animais[cont].nome} | Tipo: ${animais[cont].tipo} | Peso: ${animais[cont].peso}\n`)
    cont++
})

console.log(`Total de animais cadastrados: ${cont}`)