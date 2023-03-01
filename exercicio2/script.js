function recebaTresValores (idade , ensinoMedio , cursandoFaculdade){
    // idade = 29
    if (idade >= 18){
        console.log(`VERDADEIRA`)
    } else {
        console.log(`FALSA`)
    }
    
    // ensinoMedio = true
    if (ensinoMedio === true){
        console.log(`VERDADEIRA`)
    } else {
        console.log(`FALSA`)
    }
    
    // cursandoFaculdade = true
    if (cursandoFaculdade === true){
        console.log(`VERDADEIRA`)
    } else {
        console.log(`FALSA`)
    }

}

recebaTresValores(29, true , false)