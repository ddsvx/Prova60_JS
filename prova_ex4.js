console.log(`\nEx.4 - Arrays e métodos\n`)

let playlist=["Garota de Ipanema","Aquarela","Trem-Bala"]

playlist.push("Evidências")
playlist.push("Anunciação")

console.log(`Adicionamos Evidências na nossa playlist?`)
if(playlist.includes("Evidências")===true){
    console.log(`Sim, adicionamos!`)
}
else{
    console.log(`Não, esquecemos!`)
}
let i=0
playlist.forEach(()=>{
    i++
    console.log(i, `- ${playlist[i-1]}`)
})